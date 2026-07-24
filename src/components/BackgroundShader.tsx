import React, { useEffect, useRef } from 'react';

interface BackgroundShaderProps {
  mode?: 'grid' | 'dots';
  className?: string;
}

export const BackgroundShader: React.FC<BackgroundShaderProps> = ({
  mode = 'dots',
  className = 'fixed inset-0 w-full h-full z-[-1] pointer-events-none',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return;

    let animationFrameId: number;

    const syncSize = () => {
      const w = canvas.clientWidth || window.innerWidth;
      const h = canvas.clientHeight || window.innerHeight;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    };

    const resizeObserver = new ResizeObserver(syncSize);
    resizeObserver.observe(canvas);
    syncSize();

    const vs = `attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;

    const fsGrid = `precision highp float;
uniform float u_time;
uniform vec2 u_resolution;

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    float line = step(0.98, fract(uv.x * 25.0)) + step(0.98, fract(uv.y * 25.0));
    float grid = line * 0.12;
    
    vec3 color = vec3(0.02, 0.04, 0.08);
    color += grid * vec3(0.23, 0.51, 0.96);
    
    float pulse = (sin(u_time * 0.5) * 0.5 + 0.5) * 0.06;
    color += pulse * vec3(0.0, 0.4, 0.8);
    
    gl_FragColor = vec4(color, 1.0);
}`;

    const fsDots = `precision highp float;
uniform float u_time;
uniform vec2 u_resolution;
varying vec2 v_texCoord;

float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
}

void main() {
    vec2 uv = v_texCoord;
    vec3 color = vec3(0.02, 0.03, 0.05); // Deep cyber background
    
    // Grid lines
    vec2 grid_uv = fract(uv * 40.0);
    float grid = step(0.98, grid_uv.x) + step(0.98, grid_uv.y);
    color += grid * vec3(0.05, 0.12, 0.22);
    
    // Scanning horizontal sweep line
    float scan = step(0.995, fract(uv.y - u_time * 0.08));
    color += scan * vec3(0.0, 0.35, 0.65) * 0.5;
    
    // Glowing node points
    vec2 p_uv = floor(uv * 40.0);
    float p = hash(p_uv);
    if (p > 0.985) {
        float glow = sin(u_time * 2.0 + p * 10.0) * 0.5 + 0.5;
        color += glow * vec3(0.2, 0.55, 1.0) * 0.45;
    }
    
    gl_FragColor = vec4(color, 1.0);
}`;

    const compileShader = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };

    const prog = gl.createProgram()!;
    gl.attachShader(prog, compileShader(gl.VERTEX_SHADER, vs));
    gl.attachShader(prog, compileShader(gl.FRAGMENT_SHADER, mode === 'grid' ? fsGrid : fsDots));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

    const pos = gl.getAttribLocation(prog, 'a_position');
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, 'u_time');
    const uRes = gl.getUniformLocation(prog, 'u_resolution');

    const render = (t: number) => {
      syncSize();
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uTime) gl.uniform1f(uTime, t * 0.001);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationFrameId = requestAnimationFrame(render);
    };

    render(0);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, [mode]);

  return (
    <div className={className}>
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};

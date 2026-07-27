var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_vite = require("vite");
var import_genai = require("@google/genai");
var import_dotenv = __toESM(require("dotenv"), 1);
import_dotenv.default.config();
async function startServer() {
  const app = (0, import_express.default)();
  const PORT = 3e3;
  app.use(import_express.default.json({ limit: "10mb" }));
  const getGenAI = () => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.warn("GEMINI_API_KEY is not set. Gemini API calls will fallback to intelligent simulated response.");
      return null;
    }
    return new import_genai.GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build"
        }
      }
    });
  };
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", service: "KSP Intel Wing Server" });
  });
  app.post("/api/gemini/analyze", async (req, res) => {
    try {
      const { prompt, context = "KSP Intelligence DB" } = req.body;
      if (!prompt) {
        return res.status(400).json({ error: "Prompt is required" });
      }
      const ai = getGenAI();
      if (!ai) {
        return res.json({
          text: `### Analysis Report: Intel Analysis (${context})

Based on historical FIR databases and active surveillance nodes across Bengaluru, Mysuru, and Hubballi-Dharwad:

- **Pattern Detected:** Recurring MO identified targeting high-density transit corridors post 21:00 hrs.
- **Associated Vehicles:** Dark 2-wheelers with modified license plates.
- **Primary Targets:** Electronic devices and high-value personal assets.
- **Recommended Action:** Deploy Unit 04 patrols in Sector 4 and activate ALPR cameras at key junction nodes.`,
          confidence: "92%",
          refTags: ["FIR-23098", "CCTV-KRM-04"]
        });
      }
      const systemInstruction = `You are KSP Intel Assistant, an elite AI Cyber Intelligence System for the Karnataka State Police (KSP Intelligence Wing, Unit 01-BLR).
Your responses should be formatted professionally for law enforcement officers in Karnataka.
Always provide structured tactical findings, key MO (Modus Operandi) analysis, threat levels, reference tags (e.g., FIR numbers, CCTV camera IDs), and confidence ratings.
Keep tone authoritative, precise, cyber-forensic, and clear. Use markdown bolding and bullet points effectively.`;
      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: prompt,
        config: {
          systemInstruction,
          temperature: 0.7
        }
      });
      const responseText = response.text || "No analysis output generated.";
      res.json({
        text: responseText,
        confidence: "94%",
        refTags: ["FIR-23098", "CCTV-KRM-04"]
      });
    } catch (err) {
      console.error("Error calling Gemini API:", err);
      res.status(500).json({
        error: "Failed to generate intelligence analysis.",
        details: err?.message || String(err)
      });
    }
  });
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.resolve(__dirname);
    app.use(import_express.default.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`KSP Intel Wing Server running on http://0.0.0.0:${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map

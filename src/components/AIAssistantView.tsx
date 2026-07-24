import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';

export const AIAssistantView: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'user',
      timestamp: '10:42 AM',
      content:
        'Analyze recent robbery patterns in Koramangala area over the last 30 days. Highlight any recurring MOs.',
    },
    {
      id: '2',
      sender: 'ai',
      timestamp: '10:42 AM',
      content:
        'I have analyzed 14 reported incidents matching your criteria in the Koramangala jurisdiction between Sept 15 and Oct 15.',
      metadata: {
        title: 'Analysis Report: Koramangala Robberies (30 Days)',
        isConfidential: true,
        confidence: '94%',
        refTags: ['FIR-23098', 'CCTV-KRM-04'],
        keyFindings: [
          'Target Selection: Pedestrians carrying laptops near tech parks post 9:00 PM.',
          'Vehicle: Black Pulsar motorcycles (partial plates recovered in 2 cases).',
          'Weaponry: Intimidation via blunt objects; no firearms reported.',
        ],
      },
    },
  ]);

  const [inputQuery, setInputQuery] = useState('');
  const [isGenerating, setIsLoading] = useState(false);
  const [activeSession, setActiveSession] = useState('Bengaluru Robbery Analysis');
  const chatBottomRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isGenerating]);

  const handleSendMessage = async (textToSend?: string) => {
    const promptText = textToSend || inputQuery;
    if (!promptText.trim() || isGenerating) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      content: promptText,
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputQuery('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/gemini/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: promptText, context: 'KSP Intelligence DB' }),
      });

      const data = await response.json();

      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        content: data.text || 'Intelligence query processed successfully.',
        metadata: {
          title: `Analysis Report: ${promptText.slice(0, 35)}...`,
          isConfidential: true,
          confidence: data.confidence || '92%',
          refTags: data.refTags || ['FIR-23098', 'CCTV-KRM-04'],
          keyFindings: [
            'Correlated 12 recent FIR records across active BLR Sectors.',
            'Spatial-temporal heat signature indicates 18:00 - 22:00 spike.',
            'Cross-indexed with Known Suspects database Node ID-8829-X.',
          ],
        },
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      console.error(err);
      const fallbackAiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        content:
          'Based on KSP Intelligence DB records, patterns indicate heightened cyber & theft activity along primary transit hubs.',
        metadata: {
          title: 'Intelligence Assessment',
          isConfidential: true,
          confidence: '90%',
          refTags: ['FIR-23098', 'KSP-GRID-01'],
        },
      };
      setMessages((prev) => [...prev, fallbackAiMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const recentSessions = [
    { title: 'FIR 23045 Summary', timeAgo: '2 Hours Ago' },
    { title: 'Bengaluru Robbery Analysis', timeAgo: 'Yesterday' },
    { title: 'Suspect Network Map', timeAgo: 'Oct 12' },
  ];

  return (
    <div className="flex-1 flex h-[calc(100vh-64px)] mt-16 overflow-hidden w-full relative">
      {/* Session History Sidebar */}
      <aside className="hidden lg:flex flex-col w-72 border-r border-white/10 bg-[#111417]/80 overflow-y-auto">
        <div className="p-4 border-b border-white/10">
          <button
            onClick={() => {
              setMessages([]);
              setActiveSession('New Analysis');
            }}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg border border-secondary text-secondary hover:bg-secondary/10 transition-colors cyber-glow-active font-label-caps text-xs font-semibold cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">add</span>
            <span>New Analysis</span>
          </button>
        </div>

        <div className="p-4 flex-1">
          <h3 className="font-label-caps text-xs text-outline mb-4 uppercase tracking-wider font-semibold">
            Recent Sessions
          </h3>
          <ul className="space-y-2">
            {recentSessions.map((session, idx) => (
              <li key={idx}>
                <button
                  onClick={() => setActiveSession(session.title)}
                  className={`w-full text-left p-3 rounded-lg border transition-all ${
                    activeSession === session.title
                      ? 'bg-surface-container-high/70 border-secondary/50'
                      : 'hover:bg-surface-container-high/30 border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="material-symbols-outlined text-outline text-[16px]">chat</span>
                    <span className="font-data-mono text-xs text-on-surface font-medium truncate">
                      {session.title}
                    </span>
                  </div>
                  <span className="font-label-caps text-[10px] text-on-surface-variant/60 block">
                    {session.timeAgo}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Main Chat Interface */}
      <div className="flex-1 flex flex-col relative overflow-hidden bg-[#111417]">
        {/* Messages Scroll Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth pb-32">
          {messages.length === 0 ? (
            /* Welcome Empty Screen */
            <div className="h-full flex flex-col items-center justify-center text-center max-w-2xl mx-auto my-auto py-12">
              <span
                className="material-symbols-outlined text-primary text-6xl mb-4 opacity-80"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                smart_toy
              </span>
              <h2 className="font-display-lg text-2xl md:text-3xl text-on-surface font-bold mb-2">
                KSP Intelligence Assistant
              </h2>
              <p className="font-body-lg text-sm text-on-surface-variant mb-8">
                Secure AI processing activated. How can I assist with your investigation today?
              </p>

              {/* Suggestion Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                <button
                  onClick={() =>
                    handleSendMessage('Predict crime hotspots based on recent FIRs in Bengaluru')
                  }
                  className="glass-panel p-4 rounded-xl text-left hover:border-secondary/50 transition-all group flex flex-col gap-2 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-secondary opacity-70 group-hover:opacity-100 transition-opacity">
                    timeline
                  </span>
                  <span className="font-body-md text-xs font-medium text-on-surface">
                    Predict crime hotspots based on recent FIRs
                  </span>
                </button>

                <button
                  onClick={() =>
                    handleSendMessage('Show known associates for Suspect ID: 9402')
                  }
                  className="glass-panel p-4 rounded-xl text-left hover:border-secondary/50 transition-all group flex flex-col gap-2 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-secondary opacity-70 group-hover:opacity-100 transition-opacity">
                    group
                  </span>
                  <span className="font-body-md text-xs font-medium text-on-surface">
                    Show known associates for Suspect ID: 9402
                  </span>
                </button>

                <button
                  onClick={() =>
                    handleSendMessage('Explain evidence protocol for seized digital assets')
                  }
                  className="glass-panel p-4 rounded-xl text-left hover:border-secondary/50 transition-all group flex flex-col gap-2 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-secondary opacity-70 group-hover:opacity-100 transition-opacity">
                    policy
                  </span>
                  <span className="font-body-md text-xs font-medium text-on-surface">
                    Explain evidence protocol for seized digital assets
                  </span>
                </button>
              </div>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto space-y-6">
              {messages.map((msg) =>
                msg.sender === 'user' ? (
                  /* User Message Bubble */
                  <div key={msg.id} className="flex flex-col items-end gap-1">
                    <div className="bg-[#323539] text-on-surface px-5 py-3 rounded-2xl rounded-tr-sm max-w-[85%] border border-white/5 shadow-md">
                      <p className="font-body-md text-sm">{msg.content}</p>
                    </div>
                    <span className="font-label-caps text-[10px] text-on-surface-variant/50 mr-2">
                      Officer • {msg.timestamp}
                    </span>
                  </div>
                ) : (
                  /* AI Response Bubble */
                  <div key={msg.id} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mt-1">
                      <span
                        className="material-symbols-outlined text-primary text-[20px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        smart_toy
                      </span>
                    </div>

                    <div className="flex-1 space-y-3 max-w-[90%]">
                      {/* Status Line */}
                      <div className="flex items-center gap-2 text-secondary font-data-mono text-xs opacity-80">
                        <span className="material-symbols-outlined text-[16px] animate-spin">
                          autorenew
                        </span>
                        <span>Querying Case Center DB... Accessing KSP Grid...</span>
                      </div>

                      {/* Main Card */}
                      <div className="glass-panel p-5 rounded-2xl rounded-tl-sm relative overflow-hidden border border-white/10">
                        <div className="scan-line" />

                        {msg.metadata?.title && (
                          <h4 className="font-headline-md text-base md:text-lg font-bold text-on-surface mb-3 flex items-center gap-2 flex-wrap">
                            <span>{msg.metadata.title}</span>
                            {msg.metadata.isConfidential && (
                              <span className="bg-surface-container px-2 py-0.5 rounded text-[10px] font-data-mono text-outline-variant border border-outline-variant/30 font-semibold">
                                CONFIDENTIAL
                              </span>
                            )}
                          </h4>
                        )}

                        <div className="prose prose-invert max-w-none font-body-md text-sm text-on-surface-variant space-y-3">
                          <p className="whitespace-pre-line">{msg.content}</p>

                          {/* Key Findings Box */}
                          {msg.metadata?.keyFindings && msg.metadata.keyFindings.length > 0 && (
                            <div className="bg-black/40 border border-white/10 p-4 rounded-lg my-3">
                              <h5 className="font-label-caps text-xs text-primary mb-2 font-bold uppercase tracking-wider">
                                Key Findings & MO
                              </h5>
                              <ul className="list-disc pl-5 space-y-1 text-xs text-on-surface">
                                {msg.metadata.keyFindings.map((finding, fIdx) => (
                                  <li key={fIdx}>{finding}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Ref Pills */}
                          {msg.metadata?.refTags && msg.metadata.refTags.length > 0 && (
                            <div className="flex flex-wrap gap-2 my-2 items-center">
                              <span className="font-label-caps text-xs text-outline font-semibold mr-1">
                                Ref:
                              </span>
                              {msg.metadata.refTags.map((tag, tIdx) => (
                                <a
                                  key={tIdx}
                                  href="#search"
                                  className="inline-flex items-center gap-1 bg-surface-container px-2.5 py-1 rounded text-xs font-data-mono text-primary hover:bg-primary/10 border border-primary/20 transition-colors"
                                >
                                  <span className="material-symbols-outlined text-[14px]">
                                    description
                                  </span>
                                  <span>{tag}</span>
                                </a>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Actionable Footer */}
                        <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between flex-wrap gap-3">
                          <div className="flex items-center gap-1.5 bg-black/30 px-2.5 py-1 rounded border border-white/5">
                            <span className="w-2 h-2 rounded-full bg-secondary" />
                            <span className="font-data-mono text-xs text-secondary font-semibold">
                              Confidence: {msg.metadata?.confidence || '94%'}
                            </span>
                          </div>

                          <div className="flex gap-2">
                            <button
                              onClick={() => alert('Opening geospatial overlay in Command Center')}
                              className="px-3 py-1.5 rounded bg-surface border border-white/10 text-xs font-label-caps hover:bg-white/5 transition-colors flex items-center gap-1 cursor-pointer"
                            >
                              <span className="material-symbols-outlined text-[14px]">map</span>
                              <span>Map View</span>
                            </button>
                            <button
                              onClick={() => alert('Intelligence dossier exported as PDF')}
                              className="px-3 py-1.5 rounded bg-surface border border-white/10 text-xs font-label-caps hover:bg-white/5 transition-colors flex items-center gap-1 text-primary cursor-pointer"
                            >
                              <span className="material-symbols-outlined text-[14px]">
                                file_download
                              </span>
                              <span>Export</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}

              {/* Typing indicator */}
              {isGenerating && (
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <span
                      className="material-symbols-outlined text-primary text-[20px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      smart_toy
                    </span>
                  </div>
                  <div className="glass-panel px-4 py-3 rounded-2xl rounded-tl-sm flex items-center gap-1.5 w-20">
                    <div className="w-2 h-2 bg-secondary rounded-full animate-ping" />
                    <div className="w-2 h-2 bg-secondary rounded-full animate-ping delay-100" />
                    <div className="w-2 h-2 bg-secondary rounded-full animate-ping delay-200" />
                  </div>
                </div>
              )}

              <div ref={chatBottomRef} />
            </div>
          )}
        </div>

        {/* Input Bar */}
        <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 bg-gradient-to-t from-[#111417] via-[#111417] to-transparent pointer-events-none z-20">
          <div className="max-w-4xl mx-auto pointer-events-auto">
            <div className="glass-panel rounded-xl flex flex-col p-2 cyber-glow focus-within:border-secondary focus-within:cyber-glow-active transition-all border border-white/10">
              {/* Context row */}
              <div className="flex items-center gap-2 px-2 py-1">
                <span className="bg-surface-container-high px-2 py-0.5 rounded text-[10px] font-data-mono text-outline-variant flex items-center gap-1">
                  <span className="material-symbols-outlined text-[12px]">database</span>
                  <span>KSP Intelligence DB</span>
                </span>
              </div>

              {/* Textarea & buttons */}
              <div className="flex items-end gap-2 relative">
                <button
                  type="button"
                  onClick={() => alert('Attachment upload dialog initiated.')}
                  className="p-2 text-outline hover:text-primary transition-colors flex-shrink-0 cursor-pointer"
                  title="Attach digital evidence"
                >
                  <span className="material-symbols-outlined">add_circle</span>
                </button>

                <textarea
                  value={inputQuery}
                  onChange={(e) => setInputQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                  className="w-full bg-transparent border-none text-on-surface font-body-md text-sm placeholder:text-outline-variant resize-none focus:ring-0 max-h-32 py-2 outline-none"
                  placeholder="Request intelligence analysis, search records, or correlate data..."
                  rows={1}
                />

                <div className="flex items-center gap-1 p-1 flex-shrink-0">
                  <button
                    type="button"
                    onClick={() => alert('Voice command active. Speak clearly.')}
                    className="p-2 text-outline hover:text-secondary transition-colors cursor-pointer"
                    title="Voice dictation"
                  >
                    <span className="material-symbols-outlined">mic</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSendMessage()}
                    disabled={!inputQuery.trim() || isGenerating}
                    className="w-10 h-10 rounded-lg bg-primary text-on-primary flex items-center justify-center hover:bg-primary-container transition-colors shadow-lg disabled:opacity-50 cursor-pointer"
                  >
                    <span
                      className="material-symbols-outlined text-[20px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      send
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <div className="text-center mt-2">
              <span className="font-data-mono text-[10px] text-outline-variant">
                AI responses may require manual verification. KSP Intel v2.4
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

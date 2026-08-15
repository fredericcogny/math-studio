import { useLayoutEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import { ui } from "./i18n";
import { askSocraticTutor, type SocraticMessage } from "./socraticApi";
import type { Locale } from "./types";

interface SocraticChatProps {
  exercisePrompt: string;
  exerciseSolution: string;
  lessonTitle: string;
  locale: Locale;
}

export function SocraticChat({ exercisePrompt, exerciseSolution, lessonTitle, locale }: SocraticChatProps) {
  const t = ui[locale].tutor;
  const [messages, setMessages] = useState<SocraticMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const messagesRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (isOpen && messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [isOpen, loading, messages]);

  async function handleSend(textToSend?: string) {
    const query = (textToSend ?? input).trim();
    if (!query || loading) return;

    const userMsg: SocraticMessage = {
      sender: "user",
      text: query,
      timestamp: new Date().toLocaleTimeString(locale === "en" ? "en-US" : "fr-FR", { hour: "2-digit", minute: "2-digit" }),
    };

    const newHistory = [...messages, userMsg];
    setMessages(newHistory);
    setInput("");
    setLoading(true);

    try {
      const responseText = await askSocraticTutor(
        exercisePrompt,
        exerciseSolution,
        query,
        messages,
        lessonTitle,
        locale,
      );

      const botMsg: SocraticMessage = {
        sender: "bot",
        text: responseText,
        timestamp: new Date().toLocaleTimeString(locale === "en" ? "en-US" : "fr-FR", { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages([...newHistory, botMsg]);
    } catch {
      const errorMsg: SocraticMessage = {
        sender: "bot",
        text: t.error,
        timestamp: new Date().toLocaleTimeString(locale === "en" ? "en-US" : "fr-FR", { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages([...newHistory, errorMsg]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="socratic-wrapper">
      <button
        className="socratic-toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>💬</span>
        <strong>{isOpen ? t.close : t.ask}</strong>
      </button>

      {isOpen && (
        <div className="socratic-chat-card">
          <div className="socratic-messages" ref={messagesRef} aria-live="polite">
            {messages.length === 0 && (
              <div className="socratic-welcome">
                <p>👋 {t.welcome}</p>
                <div className="quick-prompts">
                  <button onClick={() => handleSend(t.start)}>
                    💡 {t.start}
                  </button>
                  <button onClick={() => handleSend(t.formulaQuestion)}>
                    📐 {t.formula}
                  </button>
                  <button onClick={() => handleSend(t.verifyQuestion)}>
                    🔍 {t.verify}
                  </button>
                </div>
              </div>
            )}

            {messages.map((msg, idx) => (
              <div key={idx} className={`socratic-bubble ${msg.sender}`}>
                <span className="sender-tag">{msg.sender === "user" ? t.you : t.tutor}</span>
                <div className="message-content">
                  <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                    {msg.text}
                  </ReactMarkdown>
                </div>
                <small className="timestamp">{msg.timestamp}</small>
              </div>
            ))}

            {loading && (
              <div className="socratic-bubble bot loading">
                <span className="sender-tag">{t.tutor}</span>
                <div className="typing-indicator" role="status" aria-label={t.typing}>
                  <span /> <span /> <span />
                </div>
              </div>
            )}
          </div>

          <form
            className="socratic-input-bar"
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
          >
            <input
              type="text"
              aria-label={t.placeholder}
              placeholder={t.placeholder}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={loading}
            />
            <button type="submit" disabled={loading || !input.trim()}>
              {t.send}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

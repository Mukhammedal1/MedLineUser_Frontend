import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const AIPage = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Salom! Men tibbiy maslahat beruvchi AI yordamchisiman. Simptomlaringizni ayting, men qaysi doktorga borishingiz kerakligini maslahat beraman 🏥",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const newMessages: Message[] = [
      ...messages,
      { role: "user", content: input },
    ];

    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/ai-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await res.json();

      setMessages([...newMessages, { role: "assistant", content: data.reply }]);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        width: 900,
        margin: "0 auto",
        padding: "20px",
        height: "550px", // chat balandligi
        display: "flex",
        flexDirection: "column",
        background: "transparent",
        borderRadius: 12,
      }}
    >
      {/* Header */}
      <p
        style={{
          color: "white",
          fontSize: 20,
          fontWeight: 600,
          marginBottom: 16,
        }}
      >
        🏥 AI Tibbiy Maslahat
      </p>

      {/* Messages container */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 12,
          marginBottom: 16,
        }}
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
            }}
          >
            <div
              style={{
                background: msg.role === "user" ? "#2563eb" : "#1e293b",
                color: "white",
                padding: "12px 16px",
                borderRadius: 12,
                maxWidth: "75%",
                lineHeight: 1.6,
                whiteSpace: "pre-wrap",
              }}
            >
              {msg.content}
            </div>
          </div>
        ))}

        {loading && (
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <div
              style={{
                background: "#1e293b",
                color: "#94a3b8",
                padding: "12px 16px",
                borderRadius: 12,
              }}
            >
              AI yozmoqda...
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div style={{ display: "flex", gap: 8 }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Simptomlaringizni yozing..."
          style={{
            flex: 1,
            padding: "12px 16px",
            borderRadius: 10,
            border: "1px solid #334155",
            background: "#0f172a",
            color: "white",
            fontSize: 15,
            outline: "none",
          }}
        />
        <button
          onClick={sendMessage}
          disabled={loading}
          style={{
            padding: "12px 24px",
            background: loading ? "#334155" : "#2563eb",
            color: "white",
            border: "none",
            borderRadius: 10,
            cursor: loading ? "not-allowed" : "pointer",
            fontSize: 15,
            fontWeight: 500,
          }}
        >
          Yuborish
        </button>
      </div>
    </div>
  );
};

export default AIPage;

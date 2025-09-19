"use client";
import { useState, useRef, useEffect } from "react";
import { Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AIPopover() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! I'm your AyurSutra AI assistant. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatRef = useRef(null);

  useEffect(() => {
    if (open && chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, open]);

  async function sendMessage(e) {
    e.preventDefault();
    if (!input.trim()) return;
    const newMessages = [...messages, { role: "user", content: input }];
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
      setMessages([...newMessages, { role: "assistant", content: data.content }]);
    } catch (err) {
      setMessages([...newMessages, { role: "assistant", content: "Sorry, something went wrong." }]);
    }
    setLoading(false);
  }

  return (
    <div>
      <Button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-50 rounded-full shadow-lg size-16 flex items-center justify-center bg-gradient-to-br from-primary to-green-500 hover:scale-105 transition-transform"
        style={{ borderRadius: "50%" }}
      >
        <Bot className="w-8 h-8 text-white" />
      </Button>
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 bg-white rounded-2xl shadow-2xl border p-4 flex flex-col" style={{ minHeight: 350, maxHeight: 500 }}>
          <div className="flex items-center mb-2">
            <Bot className="w-6 h-6 text-primary mr-2" />
            <span className="font-semibold">AyurSutra AI Assistant</span>
            <button className="ml-auto text-gray-400 hover:text-gray-700" onClick={() => setOpen(false)}>&times;</button>
          </div>
          <div ref={chatRef} className="flex-1 overflow-y-auto space-y-2 mb-2 pr-1">
            {messages.map((msg, i) => (
              <div key={i} className={`text-sm rounded-lg px-3 py-2 max-w-[90%] ${msg.role === "assistant" ? "bg-gray-100 text-gray-800 self-start" : "bg-primary text-white self-end ml-auto"}`}>{msg.content}</div>
            ))}
            {loading && <div className="text-xs text-gray-400">Thinking...</div>}
          </div>
          <form onSubmit={sendMessage} className="flex gap-2 mt-2">
            <input
              className="flex-1 border rounded-full px-3 py-2 text-sm focus:outline-none focus:ring"
              placeholder="Ask me anything..."
              value={input}
              onChange={e => setInput(e.target.value)}
              disabled={loading}
              autoFocus
            />
            <Button type="submit" size="sm" disabled={loading || !input.trim()} className="rounded-full px-4">Send</Button>
          </form>
        </div>
      )}
    </div>
  );
}

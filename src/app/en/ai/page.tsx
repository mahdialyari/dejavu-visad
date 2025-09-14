"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FaPaperPlane, FaImage, FaBrain } from "react-icons/fa";

interface Message {
  sender: "user" | "ai";
  text?: string;
  image?: string;
}

export default function ChatAIPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [image, setImage] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [typingText, setTypingText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when new messages are added
  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, typingText]);

  const handleSend = async () => {
    if (!input.trim() && !image) return;

    const userMessage: Message = { sender: "user", text: input, image };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setImage(undefined);
    setLoading(true);
    setTypingText("");

    try {
      const res = await fetch(`/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();

      const aiText =
        data.choices?.[0]?.message?.content || "❌ No valid response received.";

      let i = 0;
      const typeText = () => {
        setTypingText((prev) => prev + aiText[i]);
        i++;
        if (i < aiText.length) {
          requestAnimationFrame(typeText);
        } else {
          setMessages((prev) => [...prev, { sender: "ai", text: aiText }]);
          setTypingText("");
          setLoading(false);
        }
      };
      requestAnimationFrame(typeText);
    } catch (error) {
      console.error("❌ Error receiving response:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "Error receiving response from server 😢" },
      ]);
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-cover bg-center p-4 overflow-hidden" style={{ backgroundImage: `url('/images/ai/AI.jpg')` }}>
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Main chat container */}
      <div className="relative z-10 w-full max-w-2xl h-[40vh] flex flex-col bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl">
        {/* Header - on top edge of container */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-5 py-2 rounded-full shadow-lg font-bold text-base flex items-center gap-2 z-30">
          <FaBrain className="text-lg" /> DejaVu AI
        </div>

        {/* Messages - main scrollable area */}
        <div 
          ref={messagesContainerRef}
          className="flex-1 overflow-y-auto p-4 space-y-3 mt-8"
          style={{ maxHeight: 'calc(100% - 80px)' }}
        >
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`max-w-[80%] p-3 rounded-2xl shadow-md ${
                msg.sender === "user"
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white ml-auto"
                  : "bg-white/90 text-gray-900 mr-auto"
              }`}
            >
              {msg.image && (
                <Image
                  src={msg.image}
                  alt="Uploaded image"
                  width={96}
                  height={96}
                  className="w-24 h-24 rounded-lg mb-2 object-cover shadow"
                />
              )}
              {msg.text}
            </div>
          ))}

          {loading && (
            <div className="max-w-[80%] p-3 rounded-2xl shadow-md bg-white/90 text-gray-900 mr-auto">
              {typingText}
              <span className="animate-pulse">▌</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input + Upload + Send */}
        <div className="p-4 flex items-center gap-2 bg-white/10 border-t border-white/20">
          {/* Image upload */}
          <input
            id="upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
          <label htmlFor="upload" className="cursor-pointer text-white p-2">
            <FaImage className="text-xl hover:scale-110 transition" />
          </label>

          {/* Text input */}
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            type="text"
            placeholder="How can I assist you?"
            className="flex-1 p-3 rounded-full bg-white/90 text-gray-900 placeholder-gray-500 outline-none"
          />

          {/* Send button */}
          <button
            onClick={handleSend}
            className="p-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:scale-105 transition shadow-lg"
          >
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </section>
  );
}
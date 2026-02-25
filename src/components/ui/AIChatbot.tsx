"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Bot, Loader2 } from "lucide-react";
import { useChat, Message } from "ai/react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Button } from "./button";
import { useSound } from "@/hooks/useSound";

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      initialMessages: [
        {
          id: "welcome",
          role: "assistant",
          content:
            "Hi! I'm Genesis, your AI guide. How can I help you transform your career today?",
        } as Message,
      ],
    });

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { playSound } = useSound();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleOpenToggle = () => {
    playSound(isOpen ? "pop" : "click");
    setIsOpen(!isOpen);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;
    playSound("click");
    handleSubmit(e);
  };

  return (
    <>
      {/* Floating Hologram Orb Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: isOpen ? (window.innerWidth < 640 ? 0 : 1) : 1,
          scale: isOpen ? (window.innerWidth < 640 ? 0 : 1) : 1,
          pointerEvents: isOpen && window.innerWidth < 640 ? "none" : "auto",
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        onClick={handleOpenToggle}
        onMouseEnter={() => playSound("hover")}
        className="fixed bottom-6 right-6 z-[160] w-14 h-14 rounded-full bg-primary/20 backdrop-blur-md border border-primary/50 shadow-[0_0_20px_rgba(59,130,246,0.5)] flex items-center justify-center group overflow-hidden sm:flex"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-purple-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Hologram Pulse Rings */}
        <div
          className="absolute inset-0 rounded-full border border-primary/30 animate-ping"
          style={{ animationDuration: "3s" }}
        />
        <div
          className="absolute inset-2 rounded-full border border-purple-500/30 animate-ping"
          style={{ animationDuration: "2s", animationDelay: "0.5s" }}
        />

        {isOpen ? (
          <X className="w-6 h-6 text-white relative z-10" />
        ) : (
          <Bot className="w-6 h-6 text-white relative z-10 group-hover:scale-110 transition-transform duration-300 group-hover:animate-glitch" />
        )}
      </motion.button>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed inset-0 sm:inset-auto sm:bottom-24 sm:right-6 z-[150] w-full sm:w-[400px] h-[100dvh] sm:h-[600px] sm:max-h-[80vh] bg-black/95 sm:bg-black/80 backdrop-blur-3xl border-0 sm:border border-white/10 sm:rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="h-20 sm:h-16 border-b border-white/10 flex items-center justify-between px-6 sm:px-4 bg-white/5 shrink-0 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10" />
              <div className="flex items-center relative z-10">
                <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse mr-3 shadow-[0_0_15px_rgba(74,222,128,0.7)]" />
                <div className="flex flex-col">
                  <span className="font-bold text-white tracking-widest text-lg sm:text-base">
                    GENESIS AI
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] text-green-400 uppercase tracking-[0.2em] font-black">
                      System Online
                    </span>
                  </div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleOpenToggle}
                className="relative z-10 text-white/50 hover:text-white hover:bg-white/10 rounded-full sm:hidden"
              >
                <X className="w-6 h-6" />
              </Button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-4 flex flex-col gap-6 sm:gap-4 no-scrollbar scroll-smooth bg-gradient-to-b from-transparent to-primary/5">
              {messages.map((msg: Message) => (
                <motion.div
                  key={msg.id}
                  initial={{
                    opacity: 0,
                    y: 10,
                    x: msg.role === "assistant" ? -10 : 10,
                  }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  className={`flex ${msg.role === "assistant" ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`max-w-[90%] sm:max-w-[85%] rounded-2xl px-5 py-3.5 sm:px-4 sm:py-3 text-sm leading-relaxed ${
                      msg.role === "assistant"
                        ? "bg-white/5 backdrop-blur-md text-white/90 rounded-tl-sm border border-white/10 prose prose-invert prose-sm prose-p:leading-relaxed"
                        : "bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-tr-sm shadow-[0_10px_20px_rgba(37,99,235,0.3)] font-medium"
                    }`}
                  >
                    {msg.role === "assistant" ? (
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                          a: (props) => (
                            <a
                              {...props}
                              className="text-primary hover:underline font-semibold"
                              target="_blank"
                              rel="noreferrer"
                            />
                          ),
                          ul: ({ ...props }) => (
                            <ul
                              {...props}
                              className="list-disc pl-4 my-2 space-y-1.5"
                            />
                          ),
                          p: ({ ...props }) => (
                            <p {...props} className="last:mb-0 mb-3" />
                          ),
                        }}
                      >
                        {msg.content}
                      </ReactMarkdown>
                    ) : (
                      msg.content
                    )}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white/5 backdrop-blur-md rounded-2xl rounded-tl-sm px-5 py-3 border border-white/10 flex items-center gap-3 text-primary/80 text-sm font-medium">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Genesis is processing...
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form
              onSubmit={onSubmit}
              className="p-5 sm:p-4 border-t border-white/10 bg-black/40 backdrop-blur-xl shrink-0 flex gap-3 relative pb-8 sm:pb-4"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              <input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Ask anything..."
                className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-5 h-12 text-sm focus:outline-none focus:ring-1 focus:ring-primary/50 text-white placeholder:text-white/30 transition-all"
                autoComplete="off"
              />
              <Button
                type="submit"
                size="icon"
                disabled={isLoading}
                className="h-12 w-12 shrink-0 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)]"
              >
                <Send className="w-5 h-5" />
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

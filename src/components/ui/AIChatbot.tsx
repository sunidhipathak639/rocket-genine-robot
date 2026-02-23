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
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200, damping: 20 }}
        onClick={handleOpenToggle}
        onMouseEnter={() => playSound("hover")}
        className="fixed bottom-6 right-6 z-[100] w-14 h-14 rounded-full bg-primary/20 backdrop-blur-md border border-primary/50 shadow-[0_0_20px_rgba(59,130,246,0.5)] flex items-center justify-center group overflow-hidden"
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
            className="fixed bottom-24 right-6 z-[100] w-[350px] max-w-[calc(100vw-3rem)] h-[500px] max-h-[70vh] bg-black/80 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden"
            style={{
              boxShadow:
                "0 0 0 1px rgba(255,255,255,0.05), 0 0 40px rgba(59,130,246,0.1)",
            }}
          >
            {/* Header */}
            <div className="h-16 border-b border-white/10 flex items-center px-4 bg-white/5 shrink-0 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10" />
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse mr-3 shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
              <div className="flex flex-col relative z-10">
                <span className="font-semibold text-white tracking-wide">
                  Genesis AI
                </span>
                <span className="text-[10px] text-green-400 uppercase tracking-widest">
                  Online
                </span>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 no-scrollbar scroll-smooth">
              {messages.map((msg: Message) => (
                <motion.div
                  key={msg.id}
                  initial={{
                    opacity: 0,
                    x: msg.role === "assistant" ? -10 : 10,
                  }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.role === "assistant" ? "justify-start" : "justify-end"}`}
                  onAnimationComplete={() => {
                    if (msg.role === "assistant") playSound("pop");
                  }}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      msg.role === "assistant"
                        ? "bg-white/10 text-white rounded-tl-sm border border-white/5 prose prose-invert prose-sm prose-p:leading-relaxed prose-pre:bg-black/50 prose-pre:border prose-pre:border-white/10"
                        : "bg-primary text-primary-foreground rounded-tr-sm shadow-[0_0_15px_rgba(59,130,246,0.3)]"
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
                              className="list-disc pl-4 my-2 space-y-1"
                            />
                          ),
                          ol: ({ ...props }) => (
                            <ol
                              {...props}
                              className="list-decimal pl-4 my-2 space-y-1"
                            />
                          ),
                          li: ({ ...props }) => (
                            <li {...props} className="marker:text-primary/70" />
                          ),
                          strong: ({ ...props }) => (
                            <strong
                              {...props}
                              className="text-white font-bold"
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
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-white/10 rounded-2xl rounded-tl-sm px-4 py-3 border border-white/5 flex items-center gap-2 text-muted-foreground text-sm">
                    <Loader2 className="w-4 h-4 animate-spin text-primary" />
                    Genesis is thinking...
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form
              onSubmit={onSubmit}
              className="p-3 border-t border-white/10 bg-white/5 shrink-0 flex gap-2 relative"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              <input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Ask about AI Engineering..."
                className="flex-1 bg-black/50 border border-white/10 rounded-full px-4 h-10 text-sm focus:outline-none focus:border-primary/50 text-white placeholder:text-muted-foreground/50 transition-colors"
                autoComplete="off"
              />
              <Button
                type="submit"
                size="icon"
                className="h-10 w-10 shrink-0 rounded-full bg-primary hover:bg-primary/90 text-white shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                onMouseEnter={() => playSound("hover")}
              >
                <Send className="w-4 h-4 translate-x-px -translate-y-px" />
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

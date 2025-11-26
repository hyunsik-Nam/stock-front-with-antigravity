"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, User, Sparkles, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
};

const MOCK_RESPONSES = [
  "현재 시장 상황을 분석 중입니다... 변동성이 확대되고 있으니 주의가 필요합니다.",
  "AAPL의 RSI 지표가 30 이하로 떨어졌습니다. 과매도 구간으로 판단됩니다.",
  "알고리즘이 새로운 매수 기회를 포착했습니다. 상세 리포트를 생성할까요?",
  "지난 24시간 동안 포트폴리오 수익률은 +1.2% 입니다.",
  "리스크 관리 프로토콜에 따라 일부 포지션을 축소하는 것을 권장합니다.",
];

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "안녕하세요. QuantPulse AI입니다. 무엇을 도와드릴까요?",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;

    const newUserMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setInputValue("");
    setIsTyping(true);

    // Mock AI Response
    setTimeout(() => {
      const randomResponse =
        MOCK_RESPONSES[Math.floor(Math.random() * MOCK_RESPONSES.length)];
      const newAiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: randomResponse,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, newAiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-[600px] w-full max-w-4xl mx-auto bg-card border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative">
      {/* Chat Header */}
      <div className="p-4 border-b border-white/10 flex items-center gap-3 bg-background/50 backdrop-blur-md">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
          <Bot className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-bold flex items-center gap-2">
            Woookiki AI <Sparkles className="w-3 h-3 text-yellow-400" />
          </h3>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Online
          </p>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
        <AnimatePresence initial={false}>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
              className={cn(
                "flex gap-4 max-w-[80%]",
                message.role === "user" ? "ml-auto flex-row-reverse" : ""
              )}
            >
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
                  message.role === "assistant"
                    ? "bg-primary/20 text-primary"
                    : "bg-secondary/20 text-secondary"
                )}
              >
                {message.role === "assistant" ? (
                  <Bot className="w-5 h-5" />
                ) : (
                  <User className="w-5 h-5" />
                )}
              </div>
              <div
                className={cn(
                  "p-4 rounded-2xl text-sm leading-relaxed shadow-sm",
                  message.role === "assistant"
                    ? "bg-muted text-foreground rounded-tl-none"
                    : "bg-primary text-primary-foreground rounded-tr-none"
                )}
              >
                {message.content}
                <div className="text-[10px] opacity-50 mt-1 text-right">
                  {message.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {isTyping && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-4 max-w-[80%]"
          >
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary">
              <Bot className="w-5 h-5" />
            </div>
            <div className="bg-muted p-4 rounded-2xl rounded-tl-none flex items-center gap-1">
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                className="w-1.5 h-1.5 bg-primary rounded-full"
              />
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                className="w-1.5 h-1.5 bg-primary rounded-full"
              />
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                className="w-1.5 h-1.5 bg-primary rounded-full"
              />
            </div>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-background/50 backdrop-blur-md border-t border-white/10">
        <form
          onSubmit={handleSendMessage}
          className="flex gap-2 items-center relative"
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="시장 상황에 대해 물어보세요..."
            className="flex-1 bg-card border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-muted-foreground"
          />
          <Button
            type="submit"
            size="icon"
            disabled={!inputValue.trim() || isTyping}
            className={cn(
              "rounded-xl transition-all duration-300",
              inputValue.trim()
                ? "bg-primary text-black hover:bg-primary/90 shadow-[0_0_10px_rgba(0,227,150,0.3)]"
                : "bg-muted text-muted-foreground"
            )}
          >
            <Send className="w-4 h-4" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChatInterface;

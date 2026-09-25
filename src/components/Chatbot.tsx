import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Phone, MessageCircle, FileText, Sparkles, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteContent';
import { ChatMessage } from '../types';

interface ChatbotProps {
  onOpenQuote: (servicePrefill?: string) => void;
}

export const Chatbot: React.FC<ChatbotProps> = ({ onOpenQuote }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-welcome',
      sender: 'assistant',
      text: 'Hi! Welcome to IJAM Home Solutions. How can we help with your project today?',
      timestamp: 'Just now',
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages]);

  const quickOptions = [
    { label: '🏠 Home Services', action: 'home-services' },
    { label: '🏢 Multi-Family Services', action: 'multifamily-services' },
    { label: '💰 Request a Quote', action: 'request-quote' },
    { label: '📸 Send Project Details', action: 'send-details' },
    { label: '📲 Talk on WhatsApp', action: 'whatsapp' },
    { label: '📞 Contact IJAM', action: 'contact' },
  ];

  const handleQuickAction = (action: string) => {
    if (action === 'request-quote') {
      onOpenQuote();
      addAssistantMessage('I have opened the Solutions Form for you. You can enter your project details, urgency, and upload photos directly. Would you like me to clarify anything about the process?');
      return;
    }
    if (action === 'send-details') {
      onOpenQuote();
      addAssistantMessage('You can upload project photos directly in Step 4 of our Solutions Form. That helps our team evaluate the scope and provide an accurate response!');
      return;
    }
    if (action === 'whatsapp') {
      window.open(BUSINESS_INFO.whatsappUrl, '_blank');
      addAssistantMessage(`Connecting you with IJAM Home Solutions on WhatsApp at ${BUSINESS_INFO.whatsappNumber}. A specialist will assist you directly!`);
      return;
    }
    if (action === 'contact') {
      addAssistantMessage(`You can reach IJAM Home Solutions directly by phone at ${BUSINESS_INFO.phoneFormatted}, by email at ${BUSINESS_INFO.email}, or on WhatsApp at ${BUSINESS_INFO.whatsappNumber}. Our hours are Monday through Friday, 9:00 AM – 5:00 PM.`);
      return;
    }
    if (action === 'home-services') {
      addUserMessage('Tell me about Customer Home Services');
      respondToQuery('Tell me about Customer Home Services');
      return;
    }
    if (action === 'multifamily-services') {
      addUserMessage('Tell me about Multi-Family Services');
      respondToQuery('Tell me about Multi-Family Services');
      return;
    }
  };

  const addUserMessage = (text: string) => {
    const newMsg: ChatMessage = {
      id: 'msg-' + Date.now(),
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages((prev) => [...prev, newMsg]);
  };

  const addAssistantMessage = (text: string, quickAction?: ChatMessage['quickAction']) => {
    const newMsg: ChatMessage = {
      id: 'msg-' + Date.now(),
      sender: 'assistant',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      quickAction,
    };
    setMessages((prev) => [...prev, newMsg]);
  };

  const respondToQuery = async (query: string) => {
    setIsLoading(true);

    try {
      // Send to server-side Gemini API
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          history: messages.map((m) => ({
            role: m.sender === 'user' ? 'user' : 'model',
            text: m.text,
          })),
        }),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.reply) {
          addAssistantMessage(data.reply);
          setIsLoading(false);
          return;
        }
      }
    } catch {
      // Fallback below
    }

    // Built-in Knowledge Base Fallback conforming to prompt's strict grounding rules:
    setTimeout(() => {
      const lower = query.toLowerCase();

      if (lower.includes('home service') || lower.includes('residential') || lower.includes('remodel') || lower.includes('kitchen')) {
        addAssistantMessage(
          'IJAM Home Solutions provides reliable customer home services and custom remodeling in the Tampa area. From minor repairs to full renovations and custom kitchen remodels, we deliver quality workmanship, timely service, and lasting results tailored to your lifestyle, needs, and vision.',
          { type: 'quote', label: 'Open Solutions Form' }
        );
      } else if (lower.includes('multi family') || lower.includes('apartment') || lower.includes('duplex') || lower.includes('complex')) {
        addAssistantMessage(
          'We provide expert multifamily construction services for apartments, duplexes, and residential complexes. Our team delivers quality workmanship, efficient timelines, and long-lasting results designed for property durability and tenant turnaround.',
          { type: 'quote', label: 'Request Multi-Family Solution' }
        );
      } else if (lower.includes('price') || lower.includes('cost') || lower.includes('rate') || lower.includes('estimate') || lower.includes('how much')) {
        addAssistantMessage(
          'Because every home and property project is unique, IJAM Home Solutions provides detailed and transparent breakdowns of costs based on your specific requirements. Please submit your details through our Solutions Form or contact us directly on WhatsApp so we can evaluate your project accurately.',
          { type: 'quote', label: 'Submit Project Details' }
        );
      } else if (lower.includes('rank') || lower.includes('top 1') || lower.includes('percentile')) {
        addAssistantMessage(
          'When compared to the 191,478 Contractors in Florida, IJAM Home Solutions ranks in the 99th percentile, meaning in the top 1%. This study was based on metrics such as communication, experience, and customer feedback.'
        );
      } else if (lower.includes('phone') || lower.includes('call') || lower.includes('contact') || lower.includes('number')) {
        addAssistantMessage(
          `You can reach IJAM Home Solutions at ${BUSINESS_INFO.phoneFormatted}, email us at ${BUSINESS_INFO.email}, or chat directly on WhatsApp at ${BUSINESS_INFO.whatsappNumber}. Our hours are Monday to Friday, 9:00 AM – 5:00 PM.`,
          { type: 'whatsapp', label: 'Chat on WhatsApp' }
        );
      } else if (lower.includes('photo') || lower.includes('picture') || lower.includes('upload')) {
        addAssistantMessage(
          'Yes! You can upload project photos in Step 4 of our Solutions Form. Clear photos help our team assess the situation and prepare a thorough solution.',
          { type: 'quote', label: 'Go to Photo Upload' }
        );
      } else if (lower.includes('urgency') || lower.includes('timeline') || lower.includes('how fast') || lower.includes('asap')) {
        addAssistantMessage(
          'Our Solutions Form allows you to specify your Desired Problem Urgency: "Asap", "Next Week", or "Next Month". For urgent matters, you can also reach us immediately by phone or WhatsApp at (727) 692-5922.'
        );
      } else {
        // Strict grounding rule: Never invent!
        addAssistantMessage(
          'I don\'t want to give you incorrect information. Let me connect you with IJAM Home Solutions so they can give you the correct answer. You can message them on WhatsApp or submit your project details on our Solutions Form.',
          { type: 'whatsapp', label: 'Connect on WhatsApp' }
        );
      }
      setIsLoading(false);
    }, 400);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userText = inputValue.trim();
    addUserMessage(userText);
    setInputValue('');
    respondToQuery(userText);
  };

  return (
    <>
      {/* Floating Action Buttons: WhatsApp stacked on top of AI Chatbot (positioned on the LEFT) */}
      {!isOpen && (
        <div className="fixed bottom-20 md:bottom-6 left-4 sm:left-6 z-40 flex flex-col items-start gap-2.5">
          {/* WhatsApp Pill Button (stacked on top) */}
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-2 font-bold text-xs sm:text-sm border-2 border-white/90 group"
            aria-label="WhatsApp Us"
          >
            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <MessageCircle className="w-3.5 h-3.5 text-white fill-white" />
            </div>
            <span className="font-heading font-extrabold tracking-wide">WhatsApp Us</span>
          </a>

          {/* AI Chatbot Pill Button (bottom) */}
          <button
            onClick={() => setIsOpen(true)}
            className="px-4 py-2.5 rounded-full bg-[#0d1424] hover:bg-[#131d33] text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-2 font-bold text-xs sm:text-sm border-2 border-[#ff9923] group cursor-pointer"
            aria-label="Open IJAM Home Solutions Assistant"
          >
            <div className="w-5 h-5 rounded-full bg-[#ff9923]/20 flex items-center justify-center shrink-0">
              <Bot className="w-3.5 h-3.5 text-[#ff9923]" />
            </div>
            <span className="font-heading font-extrabold tracking-wide">IJAM Assistant AI</span>
          </button>
        </div>
      )}

      {/* Chat Window (positioned on the LEFT) */}
      {isOpen && (
        <div className="fixed bottom-20 md:bottom-6 left-4 sm:left-6 z-50 w-[calc(100vw-32px)] sm:w-[380px] h-[520px] max-h-[80vh] bg-[#121622] border-2 border-[#2b3548] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5">
          
          {/* Header */}
          <div className="bg-[#171d2b] p-3.5 border-b border-[#252f42] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-[#ff9923] to-[#fcb900] flex items-center justify-center text-black">
                <Bot className="w-5 h-5" />
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#29962c] ring-1 ring-black"></span>
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-heading font-extrabold text-white leading-tight">
                  IJAM Home Solutions Assistant
                </h3>
                <span className="text-[10px] text-gray-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#29962c]"></span>
                  Official Brand AI &bull; Grounded Knowledge
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-[#20293b]"
              aria-label="Close Chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Options Bar */}
          <div className="bg-[#0e111a] px-3 py-2 border-b border-[#1f2636] overflow-x-auto no-scrollbar flex items-center gap-1.5 whitespace-nowrap">
            {quickOptions.map((opt) => (
              <button
                key={opt.action}
                onClick={() => handleQuickAction(opt.action)}
                className="px-2.5 py-1 rounded-lg bg-[#161c28] hover:bg-[#20283a] text-gray-300 hover:text-white border border-[#263144] text-[11px] font-medium transition-colors shrink-0"
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#0d1017]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'assistant' && (
                  <div className="w-7 h-7 rounded-lg bg-[#1a2130] border border-[#2b3548] flex items-center justify-center shrink-0 mt-0.5 text-[#ff9923]">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 text-xs sm:text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#29962c] text-white rounded-br-none'
                      : 'bg-[#181e2b] text-gray-200 border border-[#263144] rounded-bl-none'
                  }`}
                >
                  <p>{msg.text}</p>
                  
                  {msg.quickAction && (
                    <div className="mt-2.5 pt-2 border-t border-[#263144]">
                      {msg.quickAction.type === 'quote' && (
                        <button
                          onClick={() => {
                            setIsOpen(false);
                            onOpenQuote();
                          }}
                          className="px-3 py-1.5 rounded-lg bg-[#29962c] hover:bg-[#228025] text-white font-bold text-xs flex items-center gap-1 shadow-sm"
                        >
                          <span>{msg.quickAction.label}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      )}

                      {msg.quickAction.type === 'whatsapp' && (
                        <a
                          href={BUSINESS_INFO.whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 rounded-lg bg-[#172719] border border-[#29962c] text-white font-semibold text-xs flex items-center gap-1 hover:bg-[#203722]"
                        >
                          <MessageCircle className="w-3.5 h-3.5 text-[#29962c]" />
                          <span>{msg.quickAction.label}</span>
                        </a>
                      )}
                    </div>
                  )}

                  <span className="text-[9px] text-gray-400 block text-right mt-1">
                    {msg.timestamp}
                  </span>
                </div>

                {msg.sender === 'user' && (
                  <div className="w-7 h-7 rounded-lg bg-[#1e2535] flex items-center justify-center shrink-0 mt-0.5 text-gray-300">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-2.5 items-center">
                <div className="w-7 h-7 rounded-lg bg-[#1a2130] flex items-center justify-center text-[#ff9923]">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-[#181e2b] border border-[#263144] px-4 py-3 rounded-2xl text-xs text-gray-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff9923] animate-bounce"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff9923] animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff9923] animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer */}
          <form onSubmit={handleSendMessage} className="p-3 bg-[#131722] border-t border-[#232c3d] flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about home solutions, multi-family..."
              className="flex-1 px-3 py-2 rounded-xl bg-[#19202e] border border-[#293448] text-white text-xs outline-none focus:border-[#ff9923]"
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isLoading}
              className="p-2 rounded-xl bg-[#ff9923] hover:bg-[#fcb900] disabled:opacity-40 text-black font-bold transition-colors cursor-pointer"
              aria-label="Send Message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </>
  );
};

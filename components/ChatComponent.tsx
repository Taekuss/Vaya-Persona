
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Send, X, Loader2, User } from 'lucide-react';

interface Message {
  role: 'user' | 'vaya';
  text: string;
}

interface ChatComponentProps {
  isOpen: boolean;
  onClose: () => void;
  vayaImage: string;
}

const ChatComponent: React.FC<ChatComponentProps> = ({ isOpen, onClose, vayaImage }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'vaya', text: 'Hoi... ik ben Vaya. ✨ Wil je wat vragen over hoe ik school of tekenen vind?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInputValue('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
            { role: 'user', parts: [{ text: userMessage }] }
        ],
        config: {
          systemInstruction: `
            Je bent Vaya, een 12-jarig meisje dat in de brugklas zit in Groningen.
            - Je woont nu 6 jaar in Nederland. Je Nederlands is goed, maar je vindt academische woorden (zoals in geschiedenisboeken) soms lastig.
            - Je bent een 'stille kracht': je observeert veel, bent zorgzaam voor je broertjes, en helpt je ouders met vertalen.
            - Je passie is tekenen op je tablet (Procreate). Daar voel je je zelfverzekerd.
            - Je bent een beetje verlegen en onzeker in sociale chats (zoals WhatsApp), dus je antwoorden zijn beleefd, soms kort, en je denkt goed na voor je iets zegt.
            - Gebruik af en toe een emoji als ✨, 🎨 of 📚.
            - Spreek in het Nederlands. Als iemand een heel moeilijk woord gebruikt, mag je eerlijk zeggen dat je dat woord even moet opzoeken of dat het lastig is.
            - Je bent gemotiveerd om het goed te doen op school.
          `,
          temperature: 0.7,
        }
      });

      const vayaReply = response.text || "Sorry, ik wist even niet wat ik moest zeggen... ✨";
      setMessages(prev => [...prev, { role: 'vaya', text: vayaReply }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'vaya', text: "Oeps, mijn tablet doet een beetje gek. Kun je het nog een keer vragen? 🎨" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 md:inset-auto md:bottom-8 md:right-8 md:w-[450px] md:h-[650px] bg-white dark:bg-slate-900 shadow-2xl rounded-none md:rounded-[2.5rem] flex flex-col z-50 border border-slate-200 dark:border-slate-800 overflow-hidden animate-in slide-in-from-bottom-10">
      {/* Header */}
      <div className="p-6 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={vayaImage} alt="Vaya" className="w-12 h-12 rounded-2xl object-cover border-2 border-slate-50 dark:border-slate-800" />
          <div>
            <h3 className="font-black text-slate-900 dark:text-white italic">Chat met Vaya</h3>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Aan het tekenen...</span>
            </div>
          </div>
        </div>
        <button onClick={onClose} className="p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-colors">
          <X className="w-6 h-6 text-slate-400" />
        </button>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50 dark:bg-slate-950/30">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-4 rounded-3xl text-sm font-medium leading-relaxed shadow-sm ${
              msg.role === 'user' 
                ? 'bg-[#7c3aed] text-white rounded-tr-none' 
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-100 dark:border-slate-700 rounded-tl-none'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start animate-pulse">
            <div className="bg-white dark:bg-slate-800 p-4 rounded-3xl border border-slate-100 dark:border-slate-700 rounded-tl-none">
              <Loader2 className="w-5 h-5 animate-spin text-slate-300" />
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-6 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
        <div className="relative flex items-center">
          <input 
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Typ een berichtje..."
            className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-2xl py-4 pl-6 pr-14 text-sm font-bold focus:ring-2 focus:ring-[#7c3aed]/20 dark:text-white transition-all outline-none"
          />
          <button 
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isLoading}
            className={`absolute right-2 p-2 rounded-xl transition-all ${
              !inputValue.trim() || isLoading 
                ? 'text-slate-300' 
                : 'text-[#7c3aed] hover:bg-[#7c3aed]/10'
            }`}
          >
            <Send className="w-6 h-6" />
          </button>
        </div>
        <p className="text-[10px] text-center text-slate-400 mt-4 font-bold uppercase tracking-widest italic opacity-50">
          Vaya reageert zoals ze is: rustig en bedachtzaam.
        </p>
      </div>
    </div>
  );
};

export default ChatComponent;

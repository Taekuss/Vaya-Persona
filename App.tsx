
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import ChatComponent from './components/ChatComponent';
import { 
  RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer,
  Radar as RechartsRadar
} from 'recharts';
import { 
  Info,
  AlertCircle,
  Clock,
  Layers,
  MessageSquare,
  CheckCircle2
} from 'lucide-react';
import { PERSONALITY_TRAITS, TIMELINE_DATA, PROBLEMS_NEEDS, TOUCHPOINTS } from './constants';

/**
 * Main application component for the Persona Dashboard of Vaya.
 * This component manages layout, sections, dark mode, and the chat overlay.
 */
const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('wie');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Sync scroll position with the sidebar's active section.
  useEffect(() => {
    const sectionElement = document.getElementById(activeSection);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [activeSection]);

  // Handle dark mode side effects on the document root and body.
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      document.body.style.backgroundColor = '#020617'; // slate-950
    } else {
      root.classList.remove('dark');
      document.body.style.backgroundColor = '#ffffff'; // pure white
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  // Vaya's portrait image URL used across the application.
  const vayaImageUrl = "https://i.ibb.co/0yKQmFyh/unnamed.jpg"; 

  return (
    <div className={`${isDarkMode ? 'dark' : ''} min-h-screen transition-colors duration-300`}>
      <div className="flex min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
        <Sidebar 
          activeSection={activeSection} 
          setActiveSection={setActiveSection} 
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          vayaImage={vayaImageUrl}
        />
        
        <main className="flex-1 max-w-6xl mx-auto p-4 md:p-10 space-y-16 pb-32">
          {/* Section: Wie is Vaya - Introduction and context. */}
          <section id="wie" className="space-y-8 scroll-mt-10">
            <header className="flex flex-col md:flex-row items-center md:items-end justify-between gap-6">
              <div className="flex items-center gap-6">
                 <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#7c3aed] to-[#f43f5e] rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                    <img 
                      src={vayaImageUrl} 
                      alt="Vaya" 
                      className="relative w-32 h-32 md:w-40 md:h-40 rounded-3xl object-cover border-4 border-white dark:border-slate-800 shadow-2xl"
                    />
                 </div>
                 <div>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-2 italic">Vaya</h2>
                    <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed font-medium">
                      "Ik teken liever dan dat ik praat, maar ik leer elke dag bij."
                    </p>
                    <button 
                      onClick={() => setIsChatOpen(true)}
                      className="mt-4 flex items-center gap-2 bg-[#7c3aed] hover:bg-[#6d28d9] text-white px-6 py-2.5 rounded-2xl font-bold transition-all shadow-lg shadow-indigo-500/20 active:scale-95"
                    >
                      <MessageSquare className="w-5 h-5" /> Praat met Vaya
                    </button>
                 </div>
              </div>
              <div className="flex gap-2">
                <span className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-1 rounded-full text-xs font-bold text-slate-600 dark:text-slate-400 shadow-sm uppercase tracking-wider">12 jaar</span>
                <span className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-1 rounded-full text-xs font-bold text-slate-600 dark:text-slate-400 shadow-sm uppercase tracking-wider">Brugklas</span>
              </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Info className="text-[#7c3aed] w-6 h-6" /> Achtergrond & Context
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-xl">
                    Sinds zes jaar woont Vaya in Nederland. De overstap naar de middelbare school in Groningen is een grote uitdaging. 
                    De teksten bij geschiedenis en aardrijkskunde zijn complex, wat haar onzeker maakt over haar taalvaardigheid.
                  </p>
                </div>
                
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div className="bg-[#7c3aed]/5 dark:bg-[#7c3aed]/10 p-5 rounded-[2rem] border border-[#7c3aed]/10">
                    <h4 className="font-black text-[#7c3aed] text-xs mb-2 uppercase tracking-widest">Stille Kracht</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-tight">Observator die presteert voor haar familie.</p>
                  </div>
                  <div className="bg-[#f43f5e]/5 dark:bg-[#f43f5e]/10 p-5 rounded-[2rem] border border-[#f43f5e]/10">
                    <h4 className="font-black text-[#f43f5e] text-xs mb-2 uppercase tracking-widest">Creatief</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-tight">Op haar tablet spreekt ze in beelden, niet in woorden.</p>
                  </div>
                  <div className="bg-[#fb923c]/5 dark:bg-[#fb923c]/10 p-5 rounded-[2rem] border border-[#fb923c]/10">
                    <h4 className="font-black text-[#fb923c] text-xs mb-2 uppercase tracking-widest">Zorgzaam</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-tight">Vertaalt voor haar ouders en helpt haar broertjes.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 shadow-sm border border-slate-100 dark:border-slate-800">
                <h3 className="text-xl font-bold mb-6">Persona Profiel</h3>
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={PERSONALITY_TRAITS}>
                      <PolarGrid stroke={isDarkMode ? "#334155" : "#e2e8f0"} />
                      {/* FIX: Set dataKey to "name" as a string to match the data structure and resolve type error. */}
                      <PolarAngleAxis dataKey="name" tick={{ fill: isDarkMode ? '#94a3b8' : '#64748b', fontSize: 10 }} />
                      <RechartsRadar
                        name="Vaya"
                        dataKey="score"
                        stroke="#7c3aed"
                        fill="#7c3aed"
                        fillOpacity={0.6}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Problemen & Behoeften - Visualizing the persona's pain points. */}
          <section id="problemen" className="space-y-8 scroll-mt-24">
            <h3 className="text-3xl font-black flex items-center gap-3">
              <AlertCircle className="text-[#f43f5e] w-8 h-8" /> Inzichten & Uitdagingen
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PROBLEMS_NEEDS.map((item, idx) => (
                <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col">
                  <div className="mb-6">
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{item.problem}</p>
                  </div>
                  <div className="space-y-4 flex-1">
                    <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl">
                      <p className="text-[10px] font-black uppercase text-[#f43f5e] mb-2 tracking-widest">Urgentie</p>
                      <p className="text-sm font-medium">{item.urgency}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase text-slate-400 mb-2 tracking-widest">Impact</p>
                      <ul className="space-y-2">
                        {item.impact.map((imp, i) => (
                          <li key={i} className="flex gap-2 text-xs text-slate-600 dark:text-slate-400">
                            <CheckCircle2 className="w-4 h-4 text-[#c8f53c] shrink-0" /> {imp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-slate-50 dark:border-slate-800">
                    <p className="text-[10px] font-black uppercase text-[#7c3aed] mb-1 tracking-widest">Dieperliggende Behoefte</p>
                    <p className="text-sm font-bold italic">"{item.underlyingNeed}"</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Een Dag in het Leven - Daily routine timeline. */}
          <section id="dag" className="space-y-8 scroll-mt-24">
            <h3 className="text-3xl font-black flex items-center gap-3">
              <Clock className="text-[#fb923c] w-8 h-8" /> De Dagelijkse Routine
            </h3>
            <div className="relative space-y-4">
              <div className="absolute left-[27px] top-0 bottom-0 w-0.5 bg-slate-100 dark:bg-slate-800 hidden md:block"></div>
              {TIMELINE_DATA.map((entry, idx) => (
                <div key={idx} className="relative flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center group">
                  <div className="flex items-center gap-4 z-10">
                    <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center shadow-sm text-sm font-black text-[#7c3aed] shrink-0">
                      {entry.time}
                    </div>
                  </div>
                  <div className="flex-1 bg-white dark:bg-slate-900 p-6 md:p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm group-hover:border-[#7c3aed]/30 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h4 className="font-bold text-lg mb-1">{entry.title}</h4>
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-2xl">{entry.description}</p>
                      </div>
                      {entry.touchpoint && (
                        <div className="px-4 py-2 bg-slate-50 dark:bg-slate-800 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-400 border border-slate-100 dark:border-slate-700 whitespace-nowrap">
                          {entry.touchpoint}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Touchpoints - Tools and ecosystem overview. */}
          <section id="touchpoints" className="space-y-8 scroll-mt-24">
            <h3 className="text-3xl font-black flex items-center gap-3">
              <Layers className="text-[#c8f53c] w-8 h-8" /> Ecosystem & Tools
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TOUCHPOINTS.map((category, idx) => (
                <div key={idx} className="space-y-4">
                  <h4 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${
                      category.category === 'Analoog' ? 'bg-[#fb923c]' : category.category === 'Digitaal' ? 'bg-[#7c3aed]' : 'bg-[#f43f5e]'
                    }`}></div>
                    {category.category}
                  </h4>
                  <div className="bg-white dark:bg-slate-900 p-4 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm space-y-2">
                    {category.items.map((item, i) => (
                      <div key={i} className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl text-sm font-bold flex items-center justify-between group hover:bg-[#7c3aed]/5 transition-colors">
                        {item}
                        <CheckCircle2 className="w-4 h-4 text-[#c8f53c] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>

      {/* Chat Overlay for interacting with the Vaya persona. */}
      {isChatOpen && (
        <ChatComponent 
          isOpen={isChatOpen} 
          onClose={() => setIsChatOpen(false)} 
          vayaImage={vayaImageUrl}
        />
      )}
    </div>
  );
};

// FIX: Export default App to ensure the module can be imported correctly in index.tsx.
export default App;


import React, { useState, useEffect, useRef } from 'react';
import Sidebar from './components/Sidebar';
import ChatComponent from './components/ChatComponent';
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer,
  Radar as RechartsRadar
} from 'recharts';
import { 
  Palette, 
  BookOpen, 
  CheckCircle2, 
  AlertCircle, 
  Info,
  Layers,
  Smartphone,
  Target,
  MessageCircle,
  BrainCircuit,
  MessageSquare,
  X
} from 'lucide-react';
import { PERSONALITY_TRAITS, TIMELINE_DATA, PROBLEMS_NEEDS, TOUCHPOINTS, PALETTE } from './constants';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('wie');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const sectionElement = document.getElementById(activeSection);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [activeSection]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  // Vaya's portrait image
  const vayaImageUrl = "https://i.ibb.co/0yKQmFyh/unnamed.jpg"; 

  return (
    <div className={`${isDarkMode ? 'dark' : ''}`}>
      <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
        <Sidebar 
          activeSection={activeSection} 
          setActiveSection={setActiveSection} 
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          vayaImage={vayaImageUrl}
        />
        
        <main className="flex-1 max-w-6xl mx-auto p-4 md:p-10 space-y-16 pb-32">
          {/* Section: Wie is Vaya */}
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
                      <PolarAngleAxis dataKey="name" tick={{ fill: isDarkMode ? '#94a3b8' : '#64748b', fontSize: 10, fontWeight: 700 }} />
                      <RechartsRadar
                        name="Vaya"
                        dataKey="score"
                        stroke={PALETTE.purple}
                        fill={PALETTE.purple}
                        fillOpacity={0.4}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 shadow-sm border border-slate-100 dark:border-slate-800">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Target className="text-[#c8f53c] w-5 h-5" /> Doelen & Behoeften
                </h3>
                <ul className="space-y-4">
                  {[
                    { text: 'Woordenschat vergroten voor schoolboeken', icon: <BookOpen className="w-4 h-4" /> },
                    { text: 'Zelfvertrouwen in sociale groepschats', icon: <MessageCircle className="w-4 h-4" /> },
                    { text: 'Visueel leren met afbeeldingen/video', icon: <Palette className="w-4 h-4" /> },
                  ].map((goal, idx) => (
                    <li key={idx} className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 transition-transform hover:scale-[1.02]">
                      <span className="bg-[#7c3aed] text-white p-2.5 rounded-xl">{goal.icon}</span>
                      <span className="text-slate-700 dark:text-slate-300 font-bold">{goal.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 shadow-sm border border-slate-100 dark:border-slate-800">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-[#fb923c]">
                  <AlertCircle className="w-5 h-5" /> Frustraties & Drempels
                </h3>
                <div className="space-y-5">
                  <div className="flex gap-4">
                    <div className="h-2 w-2 rounded-full bg-[#fb923c] mt-2.5 shrink-0"></div>
                    <div>
                      <h4 className="font-bold text-slate-800 dark:text-slate-200">Academische Taal</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Vaktermen geven haar het gevoel minder slim te zijn dan ze is.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-2 w-2 rounded-full bg-[#fb923c] mt-2.5 shrink-0"></div>
                    <div>
                      <h4 className="font-bold text-slate-800 dark:text-slate-200">De Rol van Helper</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Balans vinden tussen gezin en haar eigen schoolwerk.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Problemen & Behoeften */}
          <section id="problemen" className="space-y-8 scroll-mt-10">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-3xl font-black italic">Diepere Inzichten</h2>
              <p className="text-slate-500 dark:text-slate-400">De barrières die Vaya elke dag moet overwinnen.</p>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {PROBLEMS_NEEDS.map((item, idx) => (
                <div key={idx} className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden flex flex-col md:flex-row group transition-all hover:shadow-xl">
                  <div className="md:w-1/3 bg-slate-50 dark:bg-slate-800/30 p-8 border-r border-slate-100 dark:border-slate-800 flex flex-col">
                    <div className="w-14 h-14 rounded-2xl bg-[#7c3aed] text-white flex items-center justify-center mb-6 font-black text-2xl shadow-lg shadow-indigo-100 dark:shadow-none">
                      {idx + 1}
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white leading-tight mb-4">{item.title}</h3>
                    <div className="mt-auto">
                      <span className="text-[10px] font-black uppercase text-[#7c3aed] tracking-[0.2em]">Urgentie</span>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 italic font-medium">{item.urgency}</p>
                    </div>
                  </div>
                  <div className="flex-1 p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-[10px] font-black uppercase text-slate-400 mb-4 tracking-[0.2em] flex items-center gap-2">
                         <AlertCircle className="w-3 h-3 text-[#fb923c]" /> Het Probleem
                      </h4>
                      <p className="text-slate-700 dark:text-slate-300 font-bold leading-relaxed text-lg">{item.problem}</p>
                      
                      <h4 className="text-[10px] font-black uppercase text-slate-400 mt-8 mb-4 tracking-[0.2em]">Dagelijkse Impact</h4>
                      <ul className="space-y-3">
                        {item.impact.map((imp, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400 font-medium">
                            <CheckCircle2 className="w-5 h-5 text-[#c8f53c] shrink-0 mt-0.5" />
                            <span>{imp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-[#7c3aed]/5 dark:bg-[#7c3aed]/10 rounded-[2rem] p-8 flex flex-col justify-center items-center text-center border border-[#7c3aed]/10">
                      <BrainCircuit className="w-12 h-12 text-[#7c3aed] mb-5" />
                      <h4 className="text-[10px] font-black uppercase text-[#7c3aed]/60 mb-3 tracking-[0.2em]">Onderliggende Behoefte</h4>
                      <p className="text-slate-900 dark:text-white font-black text-xl leading-tight italic">"{item.underlyingNeed}"</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Dag in het Leven */}
          <section id="dag" className="space-y-12 scroll-mt-10">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-6">
               <h2 className="text-3xl font-black italic">Een Dag uit het Leven</h2>
               <div className="flex gap-4">
                  <span className="flex items-center gap-1.5 text-[10px] text-slate-400 font-black uppercase tracking-widest"><div className="w-2.5 h-2.5 rounded-full bg-[#7c3aed]"></div> Thuis</span>
                  <span className="flex items-center gap-1.5 text-[10px] text-slate-400 font-black uppercase tracking-widest"><div className="w-2.5 h-2.5 rounded-full bg-[#f43f5e]"></div> School</span>
               </div>
            </div>

            <div className="relative border-l-4 border-slate-200 dark:border-slate-800 ml-6 space-y-12 pb-12">
              {TIMELINE_DATA.map((entry, idx) => (
                <div key={idx} className="relative pl-12">
                  <div className={`absolute -left-[14px] top-1 w-6 h-6 rounded-full border-4 border-white dark:border-slate-950 shadow-md ${
                    entry.type === 'home' ? 'bg-[#7c3aed]' :
                    entry.type === 'school' ? 'bg-[#f43f5e]' :
                    entry.type === 'creative' ? 'bg-[#c8f53c]' : 'bg-[#fb923c]'
                  }`}></div>
                  
                  <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12">
                    <div className="md:w-32 shrink-0 pt-1">
                      <span className="text-2xl font-black text-slate-900 dark:text-slate-100 tracking-tighter">{entry.time}</span>
                    </div>
                    <div className="flex-1 bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-slate-800 hover:border-[#7c3aed]/30 transition-all group">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-2xl font-black text-slate-900 dark:text-white group-hover:text-[#7c3aed] transition-colors">{entry.title}</h3>
                        {entry.type === 'school' && <span className="bg-[#f43f5e]/10 text-[#f43f5e] text-[10px] font-black uppercase px-3 py-1 rounded-full border border-[#f43f5e]/20 tracking-widest">Pijnpunt</span>}
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 text-lg font-medium">{entry.description}</p>
                      <div className="flex items-center gap-3 pt-6 border-t border-slate-50 dark:border-slate-800/50">
                        <Layers className="w-5 h-5 text-slate-300" />
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Touchpoint:</span>
                        <span className="text-sm font-black text-[#7c3aed]">{entry.touchpoint}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Touchpoints */}
          <section id="touchpoints" className="space-y-8 scroll-mt-10">
             <div className="bg-slate-900 dark:bg-black rounded-[3.5rem] p-10 md:p-20 text-white overflow-hidden relative shadow-2xl">
                <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-[#7c3aed]/10 rounded-full blur-[100px] -mr-40 -mt-40"></div>
                <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-[#f43f5e]/10 rounded-full blur-[100px] -ml-40 -mb-40"></div>

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
                  <div className="space-y-12">
                    <h2 className="text-4xl font-black italic tracking-tight">Tools & Touchpoints</h2>
                    <div className="grid grid-cols-1 gap-8">
                      {TOUCHPOINTS.map((group, idx) => (
                        <div key={idx} className="space-y-4">
                          <h4 className="text-[10px] font-black uppercase text-[#c8f53c] tracking-[0.4em]">{group.category}</h4>
                          <div className="flex flex-wrap gap-3">
                            {group.items.map((item, i) => (
                              <span key={i} className="bg-white/5 backdrop-blur-xl px-5 py-2.5 rounded-2xl text-sm font-bold border border-white/10 hover:bg-white/10 transition-all hover:scale-105">
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-2xl rounded-[3rem] p-10 border border-white/10 space-y-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-black flex items-center gap-4 italic">
                      <Smartphone className="w-8 h-8 text-[#a855f7]" /> Digitale Voorkeuren
                    </h3>
                    <div className="space-y-6">
                      <div className="flex gap-6 p-6 rounded-[2rem] bg-white/5 border border-white/5 hover:border-white/20 transition-all">
                        <Palette className="w-8 h-8 text-[#f43f5e] shrink-0" />
                        <div>
                          <h4 className="font-black text-lg mb-1 italic">Creativiteit</h4>
                          <p className="text-sm text-slate-400 font-medium">"Tekenen is mijn ontsnapping. Geen woorden nodig."</p>
                        </div>
                      </div>
                      <div className="flex gap-6 p-6 rounded-[2rem] bg-white/5 border border-white/5 hover:border-white/20 transition-all">
                        <BookOpen className="w-8 h-8 text-[#7c3aed] shrink-0" />
                        <div>
                          <h4 className="font-black text-lg mb-1 italic">Audio Content</h4>
                          <p className="text-sm text-slate-400 font-medium">"Luisteren helpt me teksten beter te onthouden."</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
             </div>
          </section>

          <footer className="pt-24 text-center border-t border-slate-200 dark:border-slate-800">
             <div className="inline-block px-4 py-2 bg-slate-100 dark:bg-slate-900 rounded-full mb-6">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">Persona Analysis Project</p>
             </div>
             <p className="text-sm font-bold text-slate-400 italic">Vaya: De Stille Kracht • 2024</p>
          </footer>
        </main>
      </div>

      {/* Live Chat Component */}
      {isChatOpen && (
        <ChatComponent 
          isOpen={isChatOpen} 
          onClose={() => setIsChatOpen(false)} 
          vayaImage={vayaImageUrl}
        />
      )}

      {/* Floating Chat Button (if closed) */}
      {!isChatOpen && (
        <button 
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-8 right-8 w-16 h-16 bg-[#7c3aed] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all z-40 group"
        >
          <MessageSquare className="w-7 h-7" />
          <span className="absolute right-full mr-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white px-4 py-2 rounded-xl text-sm font-bold shadow-xl border border-slate-100 dark:border-slate-800 opacity-0 group-hover:opacity-100 pointer-events-none transition-all whitespace-nowrap">
            Praat met Vaya
          </span>
        </button>
      )}
    </div>
  );
};

export default App;

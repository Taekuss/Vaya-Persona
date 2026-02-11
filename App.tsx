
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,
  Radar as RechartsRadar
} from 'recharts';
import { 
  Palette, 
  Home, 
  BookOpen, 
  CheckCircle2, 
  AlertCircle, 
  Info,
  Layers,
  Layout,
  Target,
  MessageCircle,
  BrainCircuit,
  Smartphone,
  Moon,
  Sun
} from 'lucide-react';
import { PERSONALITY_TRAITS, TIMELINE_DATA, PROBLEMS_NEEDS, TOUCHPOINTS, PALETTE } from './constants';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('wie');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const sectionElement = document.getElementById(activeSection);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [activeSection]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  // Profile image URL from the user upload
  const vayaImageUrl = "https://files.oaiusercontent.com/file-K1kYv8JvF5y4v8v8v8v8v8v8"; // Placeholder for the provided image

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
                      className="relative w-24 h-24 rounded-full object-cover border-4 border-white dark:border-slate-800 shadow-xl"
                    />
                 </div>
                 <div>
                    <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-1">Vaya</h2>
                    <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed italic">
                      "De stille kracht die observeert, creëert en zorgt."
                    </p>
                 </div>
              </div>
              <div className="flex gap-2">
                <span className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-1 rounded-full text-xs font-bold text-slate-600 dark:text-slate-400 shadow-sm uppercase tracking-wider">12 jaar</span>
                <span className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-1 rounded-full text-xs font-bold text-slate-600 dark:text-slate-400 shadow-sm uppercase tracking-wider">Brugklas</span>
                <span className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-1 rounded-full text-xs font-bold text-slate-600 dark:text-slate-400 shadow-sm uppercase tracking-wider">Groningen</span>
              </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Info className="text-[#7c3aed] w-5 h-5" /> Achtergrond & Context
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                    Vaya woont zes jaar in Nederland. De overstap naar de middelbare school voelt als een grote sprong. 
                    Vooral vakken als geschiedenis en aardrijkskunde met complexe teksten maken haar onzeker over haar taalvaardigheid.
                  </p>
                </div>
                
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-[#7c3aed]/5 dark:bg-[#7c3aed]/10 p-4 rounded-2xl border border-[#7c3aed]/10">
                    <h4 className="font-bold text-[#7c3aed] text-sm mb-1 uppercase tracking-tight">Stille Kracht</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Observator die goed wil presteren voor zichzelf en haar ouders.</p>
                  </div>
                  <div className="bg-[#f43f5e]/5 dark:bg-[#f43f5e]/10 p-4 rounded-2xl border border-[#f43f5e]/10">
                    <h4 className="font-bold text-[#f43f5e] text-sm mb-1 uppercase tracking-tight">Creatief</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Op haar tablet verdwijnt haar onzekerheid. Hier spreekt beeld.</p>
                  </div>
                  <div className="bg-[#fb923c]/5 dark:bg-[#fb923c]/10 p-4 rounded-2xl border border-[#fb923c]/10">
                    <h4 className="font-bold text-[#fb923c] text-sm mb-1 uppercase tracking-tight">Zorgzaam</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Helpt broertjes en fungeert als tolk voor haar ouders.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-800">
                <h3 className="text-xl font-bold mb-6">Persona Profiel</h3>
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={PERSONALITY_TRAITS}>
                      <PolarGrid stroke={isDarkMode ? "#334155" : "#e2e8f0"} />
                      <PolarAngleAxis dataKey="name" tick={{ fill: isDarkMode ? '#94a3b8' : '#64748b', fontSize: 10, fontWeight: 600 }} />
                      <RechartsRadar
                        name="Vaya"
                        dataKey="score"
                        stroke={PALETTE.purple}
                        fill={PALETTE.purple}
                        fillOpacity={0.5}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-800">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Target className="text-[#c8f53c] w-5 h-5" /> Doelen & Behoeften
                </h3>
                <ul className="space-y-4">
                  {[
                    { text: 'Woordenschat vergroten voor schoolboeken', icon: <BookOpen className="w-4 h-4" /> },
                    { text: 'Zelfvertrouwen in WhatsApp-groepen', icon: <MessageCircle className="w-4 h-4" /> },
                    { text: 'Visueel leren met afbeeldingen/video', icon: <Palette className="w-4 h-4" /> },
                  ].map((goal, idx) => (
                    <li key={idx} className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                      <span className="bg-[#7c3aed] text-white p-2 rounded-lg">{goal.icon}</span>
                      <span className="text-slate-700 dark:text-slate-300 font-medium">{goal.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-800">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-[#fb923c]">
                  <AlertCircle className="w-5 h-5" /> Frustraties & Drempels
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="h-2 w-2 rounded-full bg-[#fb923c] mt-2 shrink-0"></div>
                    <div>
                      <h4 className="font-bold text-slate-800 dark:text-slate-200">Taalbarrières</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Academisch Nederlands geeft haar soms het gevoel minder slim te zijn.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-2 w-2 rounded-full bg-[#fb923c] mt-2 shrink-0"></div>
                    <div>
                      <h4 className="font-bold text-slate-800 dark:text-slate-200">Druk van de 'helper' rol</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Balans vinden tussen thuis-verantwoordelijkheden en eigen schoolwerk.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-2 w-2 rounded-full bg-[#fb923c] mt-2 shrink-0"></div>
                    <div>
                      <h4 className="font-bold text-slate-800 dark:text-slate-200">Digitale ruis</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Moeite met de 'toon' inschatten in grote groepsapps.</p>
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
              <p className="text-slate-500 dark:text-slate-400">De impact van taal en sociale druk op Vaya's succes.</p>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {PROBLEMS_NEEDS.map((item, idx) => (
                <div key={idx} className="bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden flex flex-col md:flex-row group">
                  <div className="md:w-1/3 bg-slate-50 dark:bg-slate-800/30 p-8 border-r border-slate-100 dark:border-slate-800 flex flex-col">
                    <div className="w-12 h-12 rounded-2xl bg-[#7c3aed] text-white flex items-center justify-center mb-6 font-bold text-xl shadow-lg shadow-indigo-100 dark:shadow-none">
                      {idx + 1}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight mb-4">{item.title}</h3>
                    <div className="mt-auto">
                      <span className="text-xs font-black uppercase text-[#7c3aed] tracking-widest">Urgentie</span>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 italic">{item.urgency}</p>
                    </div>
                  </div>
                  <div className="flex-1 p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xs font-bold uppercase text-slate-400 mb-4 tracking-widest flex items-center gap-2">
                         <AlertCircle className="w-3 h-3 text-[#fb923c]" /> Het Probleem
                      </h4>
                      <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed">{item.problem}</p>
                      
                      <h4 className="text-xs font-bold uppercase text-slate-400 mt-8 mb-4 tracking-widest">Impact</h4>
                      <ul className="space-y-2">
                        {item.impact.map((imp, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                            <CheckCircle2 className="w-4 h-4 text-[#c8f53c] shrink-0 mt-0.5" />
                            <span>{imp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-[#7c3aed]/5 dark:bg-[#7c3aed]/10 rounded-2xl p-6 flex flex-col justify-center items-center text-center border border-[#7c3aed]/10">
                      <BrainCircuit className="w-10 h-10 text-[#7c3aed] mb-4" />
                      <h4 className="text-xs font-bold uppercase text-[#7c3aed]/60 mb-2 tracking-widest">Onderliggende Behoefte</h4>
                      <p className="text-slate-900 dark:text-white font-bold text-lg leading-tight">{item.underlyingNeed}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Dag in het Leven */}
          <section id="dag" className="space-y-12 scroll-mt-10">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
               <h2 className="text-3xl font-black italic">Dag in het Leven</h2>
               <div className="flex gap-4">
                  <span className="flex items-center gap-1 text-xs text-slate-400 font-bold"><div className="w-2 h-2 rounded-full bg-[#7c3aed]"></div> Thuis</span>
                  <span className="flex items-center gap-1 text-xs text-slate-400 font-bold"><div className="w-2 h-2 rounded-full bg-[#f43f5e]"></div> School</span>
               </div>
            </div>

            <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 space-y-12 pb-8">
              {TIMELINE_DATA.map((entry, idx) => (
                <div key={idx} className="relative pl-12">
                  <div className={`absolute -left-[11px] top-0 w-5 h-5 rounded-full border-4 border-white dark:border-slate-950 shadow-sm ${
                    entry.type === 'home' ? 'bg-[#7c3aed]' :
                    entry.type === 'school' ? 'bg-[#f43f5e]' :
                    entry.type === 'creative' ? 'bg-[#c8f53c]' : 'bg-[#fb923c]'
                  }`}></div>
                  
                  <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12">
                    <div className="md:w-24 shrink-0">
                      <span className="text-lg font-black text-slate-900 dark:text-slate-100 tracking-tighter">{entry.time}</span>
                    </div>
                    <div className="flex-1 bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 hover:border-[#7c3aed]/30 transition-colors group">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-[#7c3aed] transition-colors">{entry.title}</h3>
                        {entry.type === 'school' && <span className="bg-[#f43f5e]/10 text-[#f43f5e] text-[10px] font-black uppercase px-2 py-0.5 rounded-full border border-[#f43f5e]/20">Knelpunt</span>}
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">{entry.description}</p>
                      <div className="flex items-center gap-2 pt-4 border-t border-slate-50 dark:border-slate-800/50">
                        <Layers className="w-4 h-4 text-slate-400" />
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Touchpoint:</span>
                        <span className="text-xs font-bold text-[#7c3aed]">{entry.touchpoint}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Touchpoints */}
          <section id="touchpoints" className="space-y-8 scroll-mt-10">
             <div className="bg-slate-900 dark:bg-black rounded-[3rem] p-10 md:p-16 text-white overflow-hidden relative shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#7c3aed]/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#f43f5e]/10 rounded-full blur-3xl -ml-20 -mb-20"></div>

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="space-y-8">
                    <h2 className="text-3xl font-black italic">Touchpoints</h2>
                    <div className="grid grid-cols-1 gap-6">
                      {TOUCHPOINTS.map((group, idx) => (
                        <div key={idx} className="space-y-2">
                          <h4 className="text-xs font-bold uppercase text-[#c8f53c] tracking-widest">{group.category}</h4>
                          <div className="flex flex-wrap gap-2">
                            {group.items.map((item, i) => (
                              <span key={i} className="bg-white/5 backdrop-blur-md px-3 py-1.5 rounded-xl text-sm font-medium border border-white/10 hover:bg-white/10 transition-colors">
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 space-y-6">
                    <h3 className="text-xl font-bold flex items-center gap-3">
                      <Smartphone className="w-6 h-6 text-[#a855f7]" /> Digitale Voorkeuren
                    </h3>
                    <div className="space-y-4">
                      <div className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                        <Palette className="w-6 h-6 text-[#f43f5e] shrink-0" />
                        <div>
                          <h4 className="font-bold">Creativiteit</h4>
                          <p className="text-sm text-slate-400 italic">"Procreate en Canva om gevoelens te vertalen naar beeld."</p>
                        </div>
                      </div>
                      <div className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                        <BookOpen className="w-6 h-6 text-[#7c3aed] shrink-0" />
                        <div>
                          <h4 className="font-bold">Audio Content</h4>
                          <p className="text-sm text-slate-400 italic">"De uitspraak in audioboeken helpt haar tekst te onthouden."</p>
                        </div>
                      </div>
                      <div className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                        <Layout className="w-6 h-6 text-[#c8f53c] shrink-0" />
                        <div>
                          <h4 className="font-bold">Hulpmiddelen</h4>
                          <p className="text-sm text-slate-400 italic">"Vertaal-apps zijn een essentieel vangnet bij schoolwerk."</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
             </div>
          </section>

          <footer className="pt-16 text-center text-slate-400">
             <p className="text-xs font-bold uppercase tracking-widest">Persona Profile Dashboard • 2024</p>
             <p className="text-sm mt-2">Vaya: De Stille Kracht</p>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default App;

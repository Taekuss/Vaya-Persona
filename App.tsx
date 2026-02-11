
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell
} from 'recharts';
import { 
  Palette, 
  Users, 
  Home, 
  BookOpen, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight,
  Info,
  Layers,
  Layout,
  // Fix: Adding missing icon imports
  Target,
  MessageCircle,
  BrainCircuit,
  Smartphone
} from 'lucide-react';
import { PERSONALITY_TRAITS, TIMELINE_DATA, PROBLEMS_NEEDS, TOUCHPOINTS } from './constants';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('wie');

  // Handle scroll to sync with active section (simple version)
  useEffect(() => {
    const sectionElement = document.getElementById(activeSection);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, [activeSection]);

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="flex-1 max-w-6xl mx-auto p-4 md:p-10 space-y-16 pb-32">
        {/* Section: Wie is Vaya */}
        <section id="wie" className="space-y-8">
          <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-2 italic">Vaya</h2>
              <p className="text-lg text-slate-500 max-w-2xl leading-relaxed">
                "De stille kracht die observeert, creëert en zorgt."
              </p>
            </div>
            <div className="flex gap-2">
              <span className="bg-white border border-slate-200 px-3 py-1 rounded-full text-xs font-bold text-slate-600 shadow-sm uppercase tracking-wider">12 jaar</span>
              <span className="bg-white border border-slate-200 px-3 py-1 rounded-full text-xs font-bold text-slate-600 shadow-sm uppercase tracking-wider">Brugklas</span>
              <span className="bg-white border border-slate-200 px-3 py-1 rounded-full text-xs font-bold text-slate-600 shadow-sm uppercase tracking-wider">Groningen</span>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Background Card */}
            <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Info className="text-indigo-500 w-5 h-5" /> Achtergrond & Context
                </h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  Vaya woont zes jaar in Nederland. De overstap naar de middelbare school voelt als een grote sprong. 
                  Vooral vakken als geschiedenis en aardrijkskunde met complexe teksten maken haar onzeker over haar taalvaardigheid.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-indigo-50/50 p-4 rounded-2xl">
                  <h4 className="font-bold text-indigo-700 text-sm mb-1">Stille Kracht</h4>
                  <p className="text-xs text-indigo-600/80">Observator die goed wil presteren voor zichzelf en haar ouders.</p>
                </div>
                <div className="bg-pink-50/50 p-4 rounded-2xl">
                  <h4 className="font-bold text-pink-700 text-sm mb-1">Creatieve Uitlaatklep</h4>
                  <p className="text-xs text-pink-600/80">Op haar tablet verdwijnt haar onzekerheid. Hier spreekt beeld, geen woord.</p>
                </div>
                <div className="bg-emerald-50/50 p-4 rounded-2xl">
                  <h4 className="font-bold text-emerald-700 text-sm mb-1">Zorgzaam</h4>
                  <p className="text-xs text-emerald-600/80">Helpt broertjes met huiswerk en fungeert als tolk voor haar ouders.</p>
                </div>
              </div>
            </div>

            {/* Personality Radar */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold mb-6">Persona Profiel</h3>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={PERSONALITY_TRAITS}>
                    <PolarGrid stroke="#e2e8f0" />
                    <PolarAngleAxis dataKey="name" tick={{ fill: '#64748b', fontSize: 10, fontWeight: 600 }} />
                    <Radar
                      name="Vaya"
                      dataKey="score"
                      stroke="#6366f1"
                      fill="#6366f1"
                      fillOpacity={0.6}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Goals & Needs */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Target className="text-indigo-500 w-5 h-5" /> Doelen & Behoeften
              </h3>
              <ul className="space-y-4">
                {[
                  { text: 'Woordenschat vergroten voor schoolboeken', icon: <BookOpen className="w-4 h-4" /> },
                  { text: 'Zelfvertrouwen in WhatsApp-groepen', icon: <MessageCircle className="w-4 h-4" /> },
                  { text: 'Visueel leren met afbeeldingen/video', icon: <Palette className="w-4 h-4" /> },
                ].map((goal, idx) => (
                  <li key={idx} className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <span className="bg-indigo-500 text-white p-2 rounded-lg">{goal.icon}</span>
                    <span className="text-slate-700 font-medium">{goal.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Frustrations */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-rose-600">
                <AlertCircle className="w-5 h-5" /> Frustraties & Drempels
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="h-2 w-2 rounded-full bg-rose-500 mt-2 shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-slate-800">Taalbarrières</h4>
                    <p className="text-sm text-slate-500">Academisch Nederlands geeft haar soms het gevoel minder slim te zijn.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-2 w-2 rounded-full bg-rose-500 mt-2 shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-slate-800">Druk van de 'helper' rol</h4>
                    <p className="text-sm text-slate-500">Balans vinden tussen thuis-verantwoordelijkheden en eigen schoolwerk.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-2 w-2 rounded-full bg-rose-500 mt-2 shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-slate-800">Digitale ruis</h4>
                    <p className="text-sm text-slate-500">Moeite met de 'toon' inschatten in grote groepsapps.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Problemen & Behoeften */}
        <section id="problemen" className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-black italic">Diepere Inzichten</h2>
            <p className="text-slate-500">Waarom is het urgent en wat is de impact op Vaya's dagelijks leven?</p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {PROBLEMS_NEEDS.map((item, idx) => (
              <div key={idx} className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden flex flex-col md:flex-row group">
                <div className="md:w-1/3 bg-slate-50 p-8 border-r border-slate-100 flex flex-col">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500 text-white flex items-center justify-center mb-6 font-bold text-xl shadow-lg shadow-indigo-100">
                    {idx + 1}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 leading-tight mb-4">{item.title}</h3>
                  <div className="mt-auto">
                    <span className="text-xs font-black uppercase text-indigo-500 tracking-widest">Urgentie</span>
                    <p className="text-sm text-slate-600 mt-1 italic">{item.urgency}</p>
                  </div>
                </div>
                <div className="flex-1 p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xs font-bold uppercase text-slate-400 mb-4 tracking-widest flex items-center gap-2">
                       <AlertCircle className="w-3 h-3 text-rose-500" /> Het Probleem
                    </h4>
                    <p className="text-slate-700 font-medium leading-relaxed">{item.problem}</p>
                    
                    <h4 className="text-xs font-bold uppercase text-slate-400 mt-8 mb-4 tracking-widest">Impact op dagelijks leven</h4>
                    <ul className="space-y-2">
                      {item.impact.map((imp, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{imp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-indigo-50/30 rounded-2xl p-6 flex flex-col justify-center items-center text-center">
                    <BrainCircuit className="w-10 h-10 text-indigo-500 mb-4" />
                    <h4 className="text-xs font-bold uppercase text-indigo-400 mb-2 tracking-widest">Onderliggende Behoefte</h4>
                    <p className="text-indigo-900 font-bold text-lg leading-tight">{item.underlyingNeed}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Dag in het Leven */}
        <section id="dag" className="space-y-12">
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
             <h2 className="text-3xl font-black italic">Dag in het Leven</h2>
             <div className="flex gap-4">
                <span className="flex items-center gap-1 text-xs text-slate-400 font-bold"><div className="w-2 h-2 rounded-full bg-indigo-500"></div> Thuis</span>
                <span className="flex items-center gap-1 text-xs text-slate-400 font-bold"><div className="w-2 h-2 rounded-full bg-rose-500"></div> School</span>
             </div>
          </div>

          <div className="relative border-l-2 border-slate-200 ml-4 space-y-12 pb-8">
            {TIMELINE_DATA.map((entry, idx) => (
              <div key={idx} className="relative pl-12">
                {/* Marker */}
                <div className={`absolute -left-[11px] top-0 w-5 h-5 rounded-full border-4 border-white shadow-sm ${
                  entry.type === 'home' ? 'bg-indigo-500' :
                  entry.type === 'school' ? 'bg-rose-500' :
                  entry.type === 'creative' ? 'bg-emerald-500' : 'bg-amber-500'
                }`}></div>
                
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12">
                  <div className="md:w-24 shrink-0">
                    <span className="text-lg font-black text-slate-900 tracking-tighter">{entry.time}</span>
                  </div>
                  <div className="flex-1 bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:border-indigo-200 transition-colors group">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{entry.title}</h3>
                      {entry.type === 'school' && <span className="bg-rose-100 text-rose-600 text-[10px] font-black uppercase px-2 py-0.5 rounded-full">Knelpunt</span>}
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-4">{entry.description}</p>
                    <div className="flex items-center gap-2 pt-4 border-t border-slate-50">
                      <Layers className="w-4 h-4 text-slate-400" />
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Touchpoint:</span>
                      <span className="text-xs font-bold text-indigo-500">{entry.touchpoint}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Touchpoints & Digitale Voorkeuren */}
        <section id="touchpoints" className="space-y-8">
           <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white overflow-hidden relative">
              {/* Abstract decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl -ml-20 -mb-20"></div>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <h2 className="text-3xl font-black italic">Gereedschapskist & Touchpoints</h2>
                  <div className="grid grid-cols-1 gap-6">
                    {TOUCHPOINTS.map((group, idx) => (
                      <div key={idx} className="space-y-2">
                        <h4 className="text-xs font-bold uppercase text-indigo-400 tracking-widest">{group.category}</h4>
                        <div className="flex flex-wrap gap-2">
                          {group.items.map((item, i) => (
                            <span key={i} className="bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-xl text-sm font-medium border border-white/5">
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
                    <Smartphone className="w-6 h-6 text-indigo-400" /> Digitale Voorkeuren
                  </h3>
                  <div className="space-y-4">
                    <div className="flex gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                      <div className="p-3 bg-indigo-500/20 rounded-xl text-indigo-400 h-fit">
                        <Palette className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold">Creativiteit</h4>
                        <p className="text-sm text-slate-400 italic">"Procreate en Canva om gevoelens te vertalen naar beeld."</p>
                      </div>
                    </div>
                    <div className="flex gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                      <div className="p-3 bg-indigo-500/20 rounded-xl text-indigo-400 h-fit">
                        <BookOpen className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold">Content Voorkeur</h4>
                        <p className="text-sm text-slate-400 italic">"Audioboeken boven fysieke boeken; uitspraak helpt bij onthouden."</p>
                      </div>
                    </div>
                    <div className="flex gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                      <div className="p-3 bg-indigo-500/20 rounded-xl text-indigo-400 h-fit">
                        <Layout className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold">Zelfredzaamheid</h4>
                        <p className="text-sm text-slate-400 italic">"Vertaal-apps en digitale woordenboeken als constante back-up."</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
           </div>
        </section>

        <footer className="pt-16 text-center text-slate-400">
           <p className="text-xs font-bold uppercase tracking-widest">Persona Profile Design • 2024</p>
           <p className="text-sm mt-2">Gemaakt voor Vaya: De Stille Kracht</p>
        </footer>
      </main>
    </div>
  );
};

export default App;


import React from 'react';
import { User, Target, AlertTriangle, Clock, Layers, Moon, Sun } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (id: string) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  vayaImage: string;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, setActiveSection, isDarkMode, toggleDarkMode, vayaImage }) => {
  const menuItems = [
    { id: 'wie', icon: <User className="w-5 h-5" />, label: 'Persona' },
    { id: 'problemen', icon: <AlertTriangle className="w-5 h-5" />, label: 'Inzichten' },
    { id: 'dag', icon: <Clock className="w-5 h-5" />, label: 'Routine' },
    { id: 'touchpoints', icon: <Layers className="w-5 h-5" />, label: 'Tools' },
  ];

  return (
    <aside className="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 h-screen sticky top-0 flex flex-col hidden md:flex transition-colors">
      <div className="p-8 border-b border-slate-100 dark:border-slate-800">
        <div className="flex flex-col items-center gap-4">
          <img 
            src={vayaImage} 
            alt="Vaya" 
            className="w-20 h-20 rounded-2xl object-cover shadow-lg border-2 border-slate-50 dark:border-slate-800"
          />
          <div className="text-center">
            <h1 className="font-black text-xl tracking-tight text-slate-900 dark:text-white">Vaya (12)</h1>
            <p className="text-xs text-[#7c3aed] font-bold uppercase tracking-widest mt-1">Brugklasser</p>
          </div>
        </div>
      </div>
      
      <nav className="flex-1 p-4 space-y-1 mt-4">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-200 group ${
              activeSection === item.id 
              ? 'bg-[#7c3aed]/10 text-[#7c3aed] font-bold' 
              : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            <span className={`${activeSection === item.id ? 'text-[#7c3aed]' : 'text-slate-400'} group-hover:scale-110 transition-transform`}>
              {item.icon}
            </span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-6 space-y-4">
        <button 
          onClick={toggleDarkMode}
          className="w-full flex items-center justify-between p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
        >
          <span className="text-xs font-bold uppercase tracking-wider">Modus</span>
          {isDarkMode ? <Sun className="w-4 h-4 text-[#c8f53c]" /> : <Moon className="w-4 h-4 text-[#7c3aed]" />}
        </button>

        <div className="bg-gradient-to-br from-[#7c3aed] to-[#a855f7] rounded-3xl p-5 text-white shadow-xl shadow-indigo-500/10">
          <p className="text-[10px] font-black uppercase opacity-70 mb-1 tracking-widest">Focus</p>
          <p className="text-sm font-bold leading-tight">Zelfvertrouwen & Taalbegrip</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

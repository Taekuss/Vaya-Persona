
import React from 'react';
import { User, Target, AlertTriangle, Clock, Layers } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (id: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, setActiveSection }) => {
  const menuItems = [
    { id: 'wie', icon: <User className="w-5 h-5" />, label: 'Wie is Vaya?' },
    { id: 'problemen', icon: <AlertTriangle className="w-5 h-5" />, label: 'Problemen & Behoeften' },
    { id: 'dag', icon: <Clock className="w-5 h-5" />, label: 'Dag in het Leven' },
    { id: 'touchpoints', icon: <Layers className="w-5 h-5" />, label: 'Touchpoints' },
  ];

  return (
    <aside className="w-64 bg-white border-r border-slate-200 h-screen sticky top-0 flex flex-col hidden md:flex">
      <div className="p-6 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-xl">
            V
          </div>
          <div>
            <h1 className="font-bold text-lg">Vaya (12)</h1>
            <p className="text-xs text-slate-500 font-medium">Brugklasser, Groningen</p>
          </div>
        </div>
      </div>
      
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
              activeSection === item.id 
              ? 'bg-indigo-50 text-indigo-600 font-semibold' 
              : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 mt-auto">
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-4 text-white">
          <p className="text-xs font-medium opacity-80 mb-1">Status</p>
          <p className="text-sm font-bold">Observator & Creatieveling</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

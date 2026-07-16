import { BookOpen, CheckSquare, FileCheck, Home, Menu, MessageSquare, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const navItems = [
  { id: 'home', icon: Home, label: 'Overview' },
  { id: 'projects', icon: BookOpen, label: 'Assignments' },
  { id: 'evidence', icon: FileCheck, label: 'Evidence' },
  { id: 'rubric', icon: CheckSquare, label: 'Rubric' },
  { id: 'summary', icon: MessageSquare, label: 'Reflection' },
];

export default function Sidebar({ activeTab, setActiveTab, isMobileOpen, setIsMobileOpen }) {
  const { student } = portfolioData;
  const selectTab = (id) => {
    setActiveTab(id);
    setIsMobileOpen(false);
  };

  return (
    <>
      <header className="portfolio-mobile-header glass-panel sticky top-0 z-[60] mx-3 mt-3 flex h-16 items-center justify-between rounded-full px-5 lg:hidden">
        <div>
          <p className="font-display text-xl font-medium text-charcoal">{student.name}</p>
          <p className="mt-0.5 text-[9px] font-extrabold uppercase tracking-[0.16em] text-muted-dark">French Language & Culture Learning Portfolio</p>
        </div>
        <button type="button" aria-label={isMobileOpen ? 'Đóng menu' : 'Mở menu'} aria-expanded={isMobileOpen} onClick={() => setIsMobileOpen(!isMobileOpen)} className="icon-button-dark">
          {isMobileOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </header>
 
      <aside className={`portfolio-sidebar glass-dark fixed inset-y-0 left-0 z-50 m-0 flex w-[304px] flex-col rounded-none px-5 py-6 transition-transform duration-300 lg:m-5 lg:translate-x-0 lg:rounded-[2.25rem] ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="border-b border-white/10 px-3 pb-7 pt-2">
          <p className="font-display text-4xl font-medium tracking-[-0.02em] text-white">Portfolio</p>
          <p className="mt-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-white/45">Academic Year {student.academicYear}</p>
          <div className="mt-9 flex items-center gap-3 rounded-3xl border border-white/10 bg-white/[0.06] p-3 backdrop-blur-2xl">
            <img src="/images.jpg" alt={`${student.name} portfolio owner`} className="h-14 w-14 rounded-2xl border border-white/15 object-cover shadow-md" />
            <div className="space-y-1 text-[10px] font-bold uppercase tracking-[0.1em] text-white/62">
              <p className="text-white">{student.name}</p>
              <p>{student.shortUniversity}</p>
            </div>
          </div>
          <div className="mt-5 space-y-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white/45">
            <p>{student.major}</p>
          </div>
        </div>
 
        <nav className="flex-1 space-y-1 px-1 py-7" aria-label="Portfolio sections">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = item.id === activeTab;
            return (
              <button type="button" key={item.id} onClick={() => selectTab(item.id)} className={`group relative flex w-full items-center gap-3 rounded-2xl px-4 py-3.5 text-left text-[11px] font-extrabold uppercase tracking-[0.13em] transition duration-200 ${isActive ? 'text-primary' : 'text-white/48 hover:bg-white/[0.06] hover:text-white'}`}>
                {isActive && <motion.span layoutId="active-nav-blob" className="absolute inset-0 rounded-2xl bg-white shadow-glow" transition={{ type: 'spring', stiffness: 420, damping: 32 }} />}
                <span className="relative z-10 flex items-center gap-3">
                <Icon size={17} strokeWidth={1.7} />
                <span>{String(index + 1).padStart(2, '0')} {item.label}</span>
                </span>
              </button>
            );
          })}
        </nav>
 
        <div className="border-t border-white/10 px-3 py-5">
          <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-white/35">Editorial Academic Archive</p>
        </div>
      </aside>
 
      {isMobileOpen && <button type="button" aria-label="Đóng menu" className="portfolio-mobile-overlay fixed inset-0 z-40 bg-charcoal/25 backdrop-blur-sm lg:hidden" onClick={() => setIsMobileOpen(false)} />}
    </>
  );
}

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Sidebar from './components/Sidebar';
import HomeTab from './components/HomeTab';
import ProjectsTab from './components/ProjectsTab';
import EvidenceTable from './components/EvidenceTable';
import RubricTable from './components/RubricTable';
import Summary from './components/Summary';

const tabTitles = {
  home: 'Overview / Tổng quan',
  projects: 'Assignments / Bài tập & Dự án',
  evidence: 'Evidence / Minh chứng',
  rubric: 'Rubric / Tiêu chí',
  summary: 'Reflection / Tổng kết',
};

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <HomeTab setActiveTab={setActiveTab} />;
      case 'projects': return <ProjectsTab />;
      case 'evidence': return <EvidenceTable />;
      case 'rubric': return <RubricTable />;
      case 'summary': return <Summary />;
      default: return <HomeTab setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="portfolio-app aether-bg relative min-h-screen overflow-hidden text-charcoal lg:flex">
      <span className="liquid-blob left-[-12rem] top-[-10rem] h-[34rem] w-[34rem] bg-primary-mint" />
      <span className="liquid-blob right-[-12rem] top-[4rem] h-[38rem] w-[38rem] bg-tertiary-blue [animation-delay:-7s]" />
      <span className="liquid-blob bottom-[-16rem] right-[16%] h-[32rem] w-[32rem] bg-secondary-warm [animation-delay:-13s]" />
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
      />
      <div className="portfolio-main relative z-10 min-w-0 flex-1 lg:ml-sidebar">
        <header className="portfolio-topbar glass-panel sticky top-4 z-30 mx-4 mt-4 hidden h-[72px] items-center justify-between rounded-full px-5 md:flex xl:mx-8 xl:px-7">
          <h1 className="font-display text-3xl font-medium tracking-[-0.02em]">{tabTitles[activeTab]}</h1>
          <span className="editorial-label rounded-full bg-white/40 px-4 py-2">Academic Year 2025–26</span>
        </header>
        <motion.main
          key={activeTab}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {renderContent()}
        </motion.main>
      </div>
    </div>
  );
}

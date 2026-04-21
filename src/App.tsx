import { usePortfolioData } from './usePortfolioData';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ExperienceSection } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Showcase } from './components/Showcase';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Loader2 } from 'lucide-react';

export default function App() {
  const { data, loading, error } = usePortfolioData();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0A0A0B]">
        <div className="text-center space-y-4">
          <Loader2 className="animate-spin text-cyan-500 mx-auto" size={40} />
          <div className="text-xs font-black uppercase tracking-[0.3em] text-white/50">
            Initialising Systems...
          </div>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0A0A0B] p-4 text-center">
        <div className="space-y-4 max-w-md">
          <div className="text-red-500 font-bold uppercase tracking-widest text-sm">System Error</div>
          <p className="text-gray-400">Unable to load portfolio data. Please check the console or the data-source file.</p>
        </div>
      </div>
    );
  }

  const { profile, experience, certifications, projects } = data;

  return (
    <div className="min-h-screen relative selection:bg-cyan-500/30">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-orange-500/5 blur-[120px] rounded-full" />
      </div>

      <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-panel px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 border border-accent-blue flex items-center justify-center font-bold text-sm text-accent-blue">
              AR
            </div>
            <div>
              <h1 className="text-sm font-bold tracking-tight text-white uppercase">{profile.name}</h1>
              <div className="font-mono text-[9px] text-accent-blue/70">SYS_ENG_v2.4_STABLE</div>
            </div>
          </div>
          
          <div className="hidden lg:flex gap-10">
            <div className="font-mono text-[10px] text-text-dim flex flex-col">
              <span className="text-[8px] uppercase tracking-widest opacity-50">Locus</span>
              <span className="text-accent-blue">GAZA/PALESTINE</span>
            </div>
            <div className="font-mono text-[10px] text-text-dim flex flex-col">
              <span className="text-[8px] uppercase tracking-widest opacity-50">Target</span>
              <span className="text-accent-blue">FULLSTACK_ARCT</span>
            </div>
            <div className="font-mono text-[10px] text-text-dim flex flex-col">
              <span className="text-[8px] uppercase tracking-widest opacity-50">Status</span>
              <span className="text-accent-green">ACTIVE_SYNC</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a href={profile.contact.github} target="_blank" rel="noopener noreferrer" className="text-text-dim hover:text-accent-blue transition-colors"><Github size={16} /></a>
            <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-dim hover:text-accent-blue transition-colors"><Linkedin size={16} /></a>
            <a href={`mailto:${profile.contact.email}`} className="text-text-dim hover:text-accent-blue transition-colors"><Mail size={16} /></a>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-24 px-4 max-w-7xl mx-auto space-y-10 pb-20">
        <Hero profile={profile} />
        <div className="grid lg:grid-cols-[1fr_300px] gap-8">
          <div className="space-y-8">
            <About profile={profile} />
            <Showcase projects={projects} />
          </div>
          <div className="space-y-8">
            <ExperienceSection experience={experience} />
            <Certifications certifications={certifications} />
          </div>
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 w-full z-50 bg-panel border-t border-white/10 px-6 py-2 flex justify-between items-center font-mono text-[10px] text-text-dim backdrop-blur-md">
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent-green rounded-full animate-pulse" />
            SECURE_CONN: [256-BIT]
          </div>
          <div className="hidden sm:block">SRC: PORTFOLIO-DATA.JSON</div>
        </div>
        
        <div className="flex gap-6">
          <div className="flex gap-2"><span>CPU: 14%</span><span>MEM: 3.8GB</span></div>
          <div className="hidden md:block">USER_AUTH: {profile.name.toUpperCase()}</div>
        </div>
      </footer>
    </div>
  );
}

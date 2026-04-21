import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LayoutGrid, Gamepad2, Layers } from 'lucide-react';
import { Project } from '../types';
import { ProjectCard } from './ProjectCard';

interface ShowcaseProps {
  projects: Project[];
}

export function Showcase({ projects }: ShowcaseProps) {
  const [filter, setFilter] = useState<'All' | 'Web' | 'Game'>('All');

  const filteredProjects = projects.filter(p => filter === 'All' || p.category === filter);

  const categories = [
    { id: 'All', icon: Layers, label: 'All Projects' },
    { id: 'Web', icon: LayoutGrid, label: 'Web Systems' },
    { id: 'Game', icon: Gamepad2, label: 'Game Lab' },
  ] as const;

  return (
    <section id="showcase" className="space-y-6">
      <div className="hud-panel p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="label-small">Showcase Grid [CENTRAL_VIEWPORT]</span>
            <h2 className="text-xl font-bold text-text-bright uppercase tracking-tight">Deployment Archive</h2>
          </div>

          <div className="flex items-center gap-1 bg-white/5 p-1 border border-white/5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`flex items-center gap-2 px-4 py-1.5 text-[9px] font-bold uppercase tracking-widest transition-all ${
                  filter === cat.id 
                    ? 'bg-accent-blue text-black' 
                    : 'text-text-dim hover:text-text-bright hover:bg-white/5'
                }`}
              >
                <cat.icon size={12} />
                {cat.id}
              </button>
            ))}
          </div>
        </div>
      </div>

      <motion.div 
        layout
        className="grid md:grid-cols-2 gap-4"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Experimental: Layout Recommendation Section */}
      <div className="hud-panel p-6 border-accent-green/20 relative overflow-hidden group">

          <iframe frameborder="0" src="https://itch.io/embed/4496542?bg_color=141417&amp;fg_color=00ff94&amp;link_color=00ff94&amp;border_color=104330" width="552" height="167"><a href="https://infsicko.itch.io/isometric-tower-defense-prototype">Isometric Tower Defense (Prototype) by infsicko</a></iframe>
      </div>
    </section>
  );
}

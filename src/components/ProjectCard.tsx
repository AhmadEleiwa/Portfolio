import { motion } from 'motion/react';
import { ExternalLink, Code2, Gamepad2 } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  key?: string | number;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const isGame = project.category === 'Game';
  
  const accentColor = isGame ? 'text-accent-green' : 'text-accent-blue';
  const borderClass = isGame ? 'border-l-[3px] border-l-accent-green' : 'border-l-[3px] border-l-accent-blue';
  const tagColor = isGame ? 'bg-accent-green/10 text-accent-green' : 'bg-accent-blue/10 text-accent-blue';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ backgroundColor: 'rgba(255,255,255,0.04)' }}
      className={`group relative overflow-hidden bg-white/[0.02] border border-white/10 ${borderClass} transition-all duration-300 p-4`}
    >
      <div className="relative aspect-video mb-3 overflow-hidden border border-white/5 opacity-80 group-hover:opacity-100 transition-opacity">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-2 right-2">
          <div className={`text-[8px] font-black uppercase tracking-[0.2em] px-2 py-0.5 rounded-sm ${isGame ? 'bg-accent-green text-black' : 'bg-accent-blue text-black'}`}>
            {project.category}
          </div>
        </div>
      </div>

      <div className="space-y-1">
        <h3 className="text-[13px] font-bold text-text-bright tracking-tight">
          {project.title}
        </h3>
        <p className="text-[10px] text-text-dim leading-relaxed line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.tech.map((t) => (
            <span 
              key={t} 
              className={`font-mono text-[8px] px-1.5 py-0.5 rounded-sm ${tagColor}`}
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-3 mt-3 border-t border-white/5">
          <div className="text-[9px] font-mono text-text-dim uppercase tracking-tighter">
            ID: <span className={accentColor}>{project.id}</span>
          </div>
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest ${accentColor} hover:brightness-125 transition-all`}
          >
            LAUNCH
            <ExternalLink size={10} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

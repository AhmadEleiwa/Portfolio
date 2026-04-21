import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';
import { Experience } from '../types';

interface ExperienceProps {
  experience: Experience[];
}

export function ExperienceSection({ experience }: ExperienceProps) {
  return (
    <section id="experience" className="hud-panel p-6">
      <span className="label-small">Professional Log</span>
      <div className="space-y-6 mt-4">
        {experience.map((exp, idx) => (
          <motion.div
            key={exp.company + idx}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="exp-item"
          >
            <div className="flex justify-between items-start gap-2">
              <h3 className="text-xs font-bold text-text-bright uppercase tracking-tight">{exp.role}</h3>
              <div className="text-[9px] font-mono text-text-dim whitespace-nowrap">{exp.period}</div>
            </div>
            <div className="text-accent-blue font-mono text-[10px] uppercase mb-2">{exp.company}</div>
            
            <p className="text-[10px] text-text-dim leading-relaxed mb-2">
              {exp.description}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {exp.tech.map((t) => (
                <span key={t} className="text-[8px] px-1 bg-white/5 text-text-dim font-mono border border-white/5">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { Award } from 'lucide-react';
import { Certification } from '../types';

interface CertificationsProps {
  certifications: Certification[];
}

export function Certifications({ certifications }: CertificationsProps) {
  return (
    <section id="certifications" className="hud-panel p-6">
      <span className="label-small">System Upgrades</span>
      <div className="flex flex-col gap-3 mt-4">
        {certifications.map((cert) => (
          <div 
            key={cert.title}
            className="text-[10px] p-3 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors flex justify-between items-center group"
          >
            <div className="space-y-1">
              <div className="text-text-bright font-bold tracking-tight">○ {cert.title}</div>
              <div className="text-accent-blue/60 text-[9px] font-mono group-hover:text-accent-blue transition-colors uppercase">{cert.issuer}</div>
            </div>
            <div className="text-text-dim text-[9px] font-mono">{cert.year}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

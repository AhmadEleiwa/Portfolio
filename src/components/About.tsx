import { motion } from 'motion/react';
import { ShieldCheck, Cpu, Code2 } from 'lucide-react';
import { Profile } from '../types';

interface AboutProps {
  profile: Profile;
}

export function About({ profile }: AboutProps) {
  return (
    <div className="grid md:grid-cols-[1fr_250px] gap-6">
      <section className="hud-panel p-6 hud-border">
        <span className="label-small">Biographical Data</span>
        <div className="space-y-4 text-[12px] text-text-dim leading-relaxed">
          <p>{profile.about}</p>
          <div className="p-3 bg-white/5 border border-white/5 font-mono text-[10px] text-accent-blue/80 italic">
            // INIT_PROJECT: PLANT_DISEASE_DETECTION (CNN) <br />
            // STATUS: SYSTEM_OPTIMIZED_SUCCESS
          </div>
        </div>
      </section>

      <section className="hud-panel p-6">
        <span className="label-small">Tech Stack Efficiency</span>
        <div className="space-y-4">
          <div className="space-y-1">
            <div className="text-[10px] text-text-bright font-bold uppercase">React / TS</div>
            <div className="skill-bar"><div className="skill-fill" style={{ width: '95%' }} /></div>
          </div>
          <div className="space-y-1">
            <div className="text-[10px] text-text-bright font-bold uppercase">C# / .NET</div>
            <div className="skill-bar"><div className="skill-fill" style={{ width: '70%', background: 'var(--color-accent-green)' }} /></div>
          </div>
          <div className="space-y-1">
            <div className="text-[10px] text-text-bright font-bold uppercase">Godot Engine</div>
            <div className="skill-bar"><div className="skill-fill" style={{ width: '85%', background: 'var(--color-accent-green)' }} /></div>
          </div>
        </div>
      </section>
    </div>
  );
}

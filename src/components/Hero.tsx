import { motion } from 'motion/react';
import { Terminal, Code, Cpu } from 'lucide-react';
import { Profile } from '../types';

interface HeroProps {
  profile: Profile;
}

export function Hero({ profile }: HeroProps) {
  return (
    <section className="relative min-h-[40vh] flex flex-col items-center justify-center py-12 overflow-hidden px-4 hud-panel border-white/10">
      <div className="absolute top-4 left-4 font-mono text-[9px] text-accent-blue/40 tracking-widest">
        BOOT_SEQUENCE_V2.4 // SYNC_SUCCESS
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center space-y-4 max-w-4xl"
      >
        <div className="flex justify-center gap-1 mb-2">
           {[...Array(6)].map((_, i) => (
             <div key={i} className="w-1.5 h-1.5 bg-accent-blue/20 rounded-full" />
           ))}
        </div>

        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-text-bright uppercase leading-none">
          {profile.name} <br />
          <span className="text-accent-blue">COMPUTER_ENGINEER</span>
        </h1>
        
        <p className="text-sm md:text-base text-text-dim max-w-xl mx-auto font-medium tracking-tight">
          B.Sc graduate in <span className="text-accent-blue">Computer Systems</span>. Bridging 3D visualization, state-heavy web apps, and immersive C# Godot environments.
        </p>

  
      </motion.div>

      <div className="absolute top-0 right-0 w-32 h-32 border-r border-t border-accent-blue/10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l border-b border-accent-green/10 pointer-events-none" />
    </section>
  );
}

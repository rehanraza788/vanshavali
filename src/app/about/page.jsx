import React from "react";
import { TreeDeciduous, History, Users, Heart, Share2, ShieldCheck } from "lucide-react";

const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white overflow-hidden relative selection:bg-emerald-500/30">

      {/* Background Glow Effects */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-24 text-center z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-8 animate__animated animate__fadeInDown text-slate-200">
          <TreeDeciduous size={16} />
          <span>Connecting Generations</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-200 via-white to-teal-200 mb-6 drop-shadow-sm animate__animated animate__fadeInUp animate__fast">
          Preserving Your Legacy
        </h1>

        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed animate__animated animate__fadeInUp animate__delay-1s">
          Vanshavali is more than just a family tree. It's a bridge between your past and your future, ensuring your family's history is never forgotten.
        </p>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

          {/* Card 1 */}
          <FeatureCard
            icon={<History className="text-emerald-400" size={32} />}
            title="Ancestral Roots"
            description="Trace your lineage back through generations. Discover the stories, names, and origins that define who you are today."
            delay={0.2}
          />

          {/* Card 2 */}
          <FeatureCard
            icon={<Share2 className="text-teal-400" size={32} />}
            title="Digital Preservation"
            description="Securely store names, dates, and memories. A permanent digital archive that withstands the test of time."
            delay={0.4}
          />

          {/* Card 3 */}
          <FeatureCard
            icon={<Users className="text-cyan-400" size={32} />}
            title="Family Connections"
            description="Understand the complex web of relationships in your family. visualise how every member is connected."
            delay={0.6}
          />
        </div>
      </div>

      {/* Mission Section */}
      <div className="relative max-w-5xl mx-auto px-6 py-16 md:py-32 flex flex-col items-center text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/20 to-transparent pointer-events-none" />

        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 relative z-10">
          Why Vanshavali?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full text-left relative z-10">
          <div className="space-y-6">
            <InfoBlock
              icon={<ShieldCheck size={24} className="text-emerald-400" />}
              title="Privacy First"
              text="Your family history is personal. We ensure your data is secure and accessible only to those you trust."
            />
            <InfoBlock
              icon={<Heart size={24} className="text-rose-400" />}
              title="For Future Generations"
              text="Give your children and grandchildren the gift of knowing their roots. Build a legacy that lasts forever."
            />
          </div>

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 flex items-center justify-center">
            <blockquote className="text-xl md:text-2xl font-light text-slate-200 italic text-center">
              "Those who know their roots can build a stronger future."
            </blockquote>
          </div>
        </div>
      </div>

      {/* Footer Decoration */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-emerald-800 to-transparent opacity-50" />
    </div>
  );
};

const FeatureCard = ({ icon, title, description, delay }) => (
  <div
    className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-500 group animate__animated animate__fadeInUp fill-mode-both"
    style={{ animationDelay: `${delay}s` }}
  >
    <div className="mb-6 bg-slate-900/50 w-14 h-14 rounded-xl flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform duration-500">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-emerald-300 transition-colors">
      {title}
    </h3>
    <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
      {description}
    </p>
  </div>
);

const InfoBlock = ({ icon, title, text }) => (
  <div className="flex gap-4 items-start">
    <div className="mt-1 p-2 bg-white/5 rounded-lg border border-white/10">
      {icon}
    </div>
    <div>
      <h4 className="text-lg font-semibold text-white mb-2">{title}</h4>
      <p className="text-slate-400 leading-relaxed">{text}</p>
    </div>
  </div>
);

export default page;

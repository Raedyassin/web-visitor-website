export default function FloatingIcon({ icon: Icon, delay, position }: any) {
  return (
    <div
      className={`absolute ${position} animate-float`}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: "3s",
      }}
    >
      <div className="bg-cyan-500/10 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-3 shadow-lg shadow-cyan-500/20">
        <Icon className="w-6 h-6 text-cyan-400" />
      </div>
    </div>
  );
}

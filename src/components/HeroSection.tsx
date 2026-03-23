import Icon from "@/components/ui/icon";

interface HeroSectionProps {
  onScrollTo: (id: string) => void;
}

export default function HeroSection({ onScrollTo }: HeroSectionProps) {
  return (
    <section
      id="intro"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{
          backgroundImage:
            "url(https://cdn.poehali.dev/projects/4c1c4ad2-13f3-4418-84ce-494754210100/files/158c61c9-de91-49bf-af1d-abef9595b7ae.jpg)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f1a]/60 via-transparent to-[#0b0f1a]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 border border-[#c9a84c]/30 rounded-full px-4 py-2 mb-8 text-xs tracking-widest text-[#c9a84c] uppercase">
          <Icon name="FlaskConical" size={12} />
          Молекулярная биология
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-tight mb-6 text-[#f0ece2]">
          Амплификация
          <br />
          <span className="text-[#c9a84c]">ДНК</span>
        </h1>

        <p className="text-[#8a8070] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 font-body">
          Ключевой метод генной инженерии, позволяющий многократно
          воспроизводить специфические фрагменты ДНК для научных исследований,
          диагностики и биотехнологий.
        </p>

        <button
          onClick={() => onScrollTo("history")}
          className="inline-flex items-center gap-2 bg-[#c9a84c] text-[#0b0f1a] px-8 py-3 text-sm tracking-widest uppercase font-semibold hover:bg-[#e0be6a] transition-colors duration-200"
        >
          Читать далее
          <Icon name="ArrowDown" size={16} />
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#c9a84c]" />
      </div>
    </section>
  );
}

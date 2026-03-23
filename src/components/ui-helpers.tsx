import Icon from "@/components/ui/icon";

export function SectionHeader({
  number,
  title,
  subtitle,
}: {
  number: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="border-b border-[#1e2a3a] pb-8">
      <div className="text-[#c9a84c]/40 font-mono text-xs tracking-widest mb-3">
        {number}
      </div>
      <h2 className="font-display text-4xl md:text-5xl text-[#f0ece2] mb-3">
        {title}
      </h2>
      <p className="text-[#6a6458] tracking-wider text-sm uppercase">
        {subtitle}
      </p>
    </div>
  );
}

export function TimelineItem({
  year,
  title,
  text,
}: {
  year: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-6">
      <div className="flex-shrink-0">
        <div className="w-16 h-16 border border-[#c9a84c]/30 flex items-center justify-center">
          <span className="font-mono text-xs text-[#c9a84c]">{year}</span>
        </div>
      </div>
      <div>
        <h4 className="font-semibold text-[#e8e4d9] mb-2">{title}</h4>
        <p className="text-[#6a6458] text-sm leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

export function MethodCard({
  icon,
  title,
  abbr,
  text,
  tags,
}: {
  icon: string;
  title: string;
  abbr: string;
  text: string;
  tags: string[];
}) {
  return (
    <div className="bg-[#0b0f1a] border border-[#1e2a3a] p-6 hover:border-[#c9a84c]/30 transition-all duration-300 group">
      <div className="w-10 h-10 flex items-center justify-center bg-[#c9a84c]/10 text-[#c9a84c] mb-4 group-hover:bg-[#c9a84c]/20 transition-colors">
        <Icon name={icon} size={18} />
      </div>
      <h3 className="font-display text-xl text-[#f0ece2] mb-1">{title}</h3>
      <div className="text-xs text-[#5a5448] mb-4 tracking-wide">{abbr}</div>
      <p className="text-[#6a6458] text-sm leading-relaxed mb-4">{text}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="text-xs border border-[#c9a84c]/20 text-[#c9a84c]/60 px-2 py-1"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export function ApplicationBlock({
  icon,
  color,
  title,
  items,
}: {
  icon: string;
  color: string;
  title: string;
  items: string[];
}) {
  return (
    <div className="p-8 border border-[#1e2a3a] hover:border-opacity-50 transition-colors">
      <div className="flex items-center gap-3 mb-6">
        <div
          className="w-10 h-10 flex items-center justify-center"
          style={{ backgroundColor: `${color}18`, color }}
        >
          <Icon name={icon} size={18} />
        </div>
        <h3 className="font-display text-xl text-[#f0ece2]">{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm text-[#7a7268]">
            <div
              className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
              style={{ backgroundColor: color, opacity: 0.6 }}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Protocol({
  title,
  steps,
}: {
  title: string;
  steps: { n: number; title: string; text: string }[];
}) {
  return (
    <div>
      <h3 className="font-display text-2xl text-[#f0ece2] mb-8 pb-4 border-b border-[#1e2a3a]">
        {title}
      </h3>
      <div className="space-y-6">
        {steps.map((step) => (
          <div key={step.n} className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 border border-[#c9a84c]/40 flex items-center justify-center text-[#c9a84c] font-mono text-xs">
              {step.n}
            </div>
            <div>
              <div className="text-[#e8e4d9] text-sm font-semibold mb-1">
                {step.title}
              </div>
              <div className="text-[#6a6458] text-sm leading-relaxed">
                {step.text}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

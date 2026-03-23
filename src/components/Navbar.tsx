import Icon from "@/components/ui/icon";

const sections = [
  { id: "intro", label: "Введение" },
  { id: "history", label: "История" },
  { id: "methods", label: "Методы" },
  { id: "applications", label: "Применение" },
  { id: "equipment", label: "Оборудование" },
  { id: "protocols", label: "Протоколы" },
];

interface NavbarProps {
  activeSection: string;
  menuOpen: boolean;
  onScrollTo: (id: string) => void;
  onToggleMenu: () => void;
}

export default function Navbar({
  activeSection,
  menuOpen,
  onScrollTo,
  onToggleMenu,
}: NavbarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0b0f1a]/90 backdrop-blur-md border-b border-[#c9a84c]/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#c9a84c]/20 border border-[#c9a84c]/40 flex items-center justify-center">
            <Icon name="Dna" size={16} className="text-[#c9a84c]" />
          </div>
          <span className="font-display text-lg tracking-widest uppercase text-[#c9a84c]">
            ДНК Амплификация
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => onScrollTo(s.id)}
              className={`text-xs tracking-widest uppercase transition-colors duration-200 ${
                activeSection === s.id
                  ? "text-[#c9a84c]"
                  : "text-[#8a8070] hover:text-[#e8e4d9]"
              }`}
            >
              {s.label}
            </button>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#c9a84c]"
          onClick={onToggleMenu}
        >
          <Icon name={menuOpen ? "X" : "Menu"} size={22} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0d1220] border-t border-[#c9a84c]/20 px-6 py-4 flex flex-col gap-4">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => onScrollTo(s.id)}
              className="text-left text-sm tracking-widest uppercase text-[#8a8070] hover:text-[#c9a84c] transition-colors"
            >
              {s.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

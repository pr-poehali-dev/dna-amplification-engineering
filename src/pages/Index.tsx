import { useState } from "react";
import Icon from "@/components/ui/icon";

const sections = [
  { id: "intro", label: "Введение" },
  { id: "history", label: "История" },
  { id: "methods", label: "Методы" },
  { id: "applications", label: "Применение" },
  { id: "equipment", label: "Оборудование" },
  { id: "protocols", label: "Протоколы" },
];

export default function Index() {
  const [activeSection, setActiveSection] = useState("intro");
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
      setMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0f1a] text-[#e8e4d9] font-body">
      {/* Navigation */}
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
                onClick={() => scrollTo(s.id)}
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
            onClick={() => setMenuOpen(!menuOpen)}
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
                onClick={() => scrollTo(s.id)}
                className="text-left text-sm tracking-widest uppercase text-[#8a8070] hover:text-[#c9a84c] transition-colors"
              >
                {s.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Hero */}
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
            onClick={() => scrollTo("history")}
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

      {/* Section: История */}
      <section id="history" className="py-24 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            number="01"
            title="История открытия"
            subtitle="От идеи до Нобелевской премии"
          />

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <div className="space-y-8">
              <TimelineItem
                year="1983"
                title="Изобретение ПЦР"
                text="Кэри Маллис разработал метод полимеразной цепной реакции (ПЦР) во время ночной поездки по шоссе в Калифорнии. Идея пришла внезапно — как цепная реакция копирования ДНК in vitro."
              />
              <TimelineItem
                year="1985"
                title="Первая публикация"
                text="Публикация в журнале Science описала метод амплификации специфических последовательностей ДНК с использованием термостабильной полимеразы."
              />
              <TimelineItem
                year="1988"
                title="Taq-полимераза"
                text="Открытие термостабильной ДНК-полимеразы из Thermus aquaticus позволило автоматизировать процесс и сделало ПЦР практичным инструментом."
              />
              <TimelineItem
                year="1993"
                title="Нобелевская премия"
                text="Кэри Маллис удостоен Нобелевской премии по химии за изобретение метода ПЦР — одного из величайших открытий в биологии XX века."
              />
            </div>

            <div className="bg-[#111826] border border-[#c9a84c]/15 p-8">
              <h3 className="font-display text-2xl text-[#c9a84c] mb-4">
                Значение открытия
              </h3>
              <p className="text-[#9a9488] leading-relaxed mb-6">
                ПЦР произвела революцию в молекулярной биологии, открыв
                возможность работы с минимальными количествами ДНК. Метод
                позволил детектировать единичные копии генов, идентифицировать
                патогены и раскрыть тайны древней ДНК.
              </p>
              <div className="border-l-2 border-[#c9a84c] pl-4 text-[#c9a84c]/80 italic font-display text-lg">
                «Если то, что я думаю, правда, это будет потрясающе»
              </div>
              <div className="text-xs text-[#5a5448] mt-2 pl-4">
                — Кэри Маллис, 1983
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Методы */}
      <section id="methods" className="py-24 bg-[#0d1220] scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            number="02"
            title="Методы амплификации"
            subtitle="Современные технологии копирования ДНК"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            <MethodCard
              icon="Thermometer"
              title="ПЦР (PCR)"
              abbr="Полимеразная цепная реакция"
              text="Классический метод амплификации in vitro. Циклы денатурации, отжига праймеров и элонгации многократно удваивают целевой фрагмент ДНК."
              tags={["Термоциклинг", "Праймеры", "Taq-полимераза"]}
            />
            <MethodCard
              icon="Activity"
              title="RT-PCR"
              abbr="Обратная транскрипция"
              text="Амплификация РНК-матриц через синтез кДНК с помощью обратной транскриптазы. Используется для анализа экспрессии генов."
              tags={["мРНК", "кДНК", "RT-фермент"]}
            />
            <MethodCard
              icon="TrendingUp"
              title="qPCR"
              abbr="Количественная ПЦР"
              text="Real-time мониторинг амплификации с флуоресцентной детекцией. Позволяет точно определить начальное количество копий ДНК."
              tags={["Флуоресценция", "SYBR Green", "TaqMan"]}
            />
            <MethodCard
              icon="Zap"
              title="LAMP"
              abbr="Изотермальная амплификация"
              text="Амплификация при постоянной температуре (~65°C). Не требует термоциклера, подходит для полевой диагностики."
              tags={["Изотермальная", "Петлевая", "Быстрая"]}
            />
            <MethodCard
              icon="Layers"
              title="MDA"
              abbr="Множественное смещение"
              text="Амплификация всего генома с высокой точностью. Использует phi29-полимеразу для равномерного покрытия всей геномной ДНК."
              tags={["Геном", "phi29", "WGA"]}
            />
            <MethodCard
              icon="GitBranch"
              title="RCA"
              abbr="Амплификация на катящемся кольце"
              text="Непрерывная амплификация кольцевых ДНК-матриц. Применяется для детекции вирусов и точечных мутаций."
              tags={["Кольцевая", "Изотермальная", "Вирусы"]}
            />
          </div>
        </div>
      </section>

      {/* Section: Применение */}
      <section id="applications" className="py-24 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            number="03"
            title="Применение"
            subtitle="В науке и медицинской практике"
          />

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <ApplicationBlock
              icon="Stethoscope"
              color="#4a9eff"
              title="Клиническая диагностика"
              items={[
                "Выявление инфекционных заболеваний (COVID-19, ВИЧ, гепатиты)",
                "Диагностика онкологических маркеров",
                "Пренатальная генетическая диагностика",
                "Типирование HLA для трансплантации",
              ]}
            />
            <ApplicationBlock
              icon="Search"
              color="#c9a84c"
              title="Судебная генетика"
              items={[
                "ДНК-идентификация личности",
                "Анализ следов на месте преступления",
                "Установление отцовства и родства",
                "Идентификация останков",
              ]}
            />
            <ApplicationBlock
              icon="Microscope"
              color="#7dc9a0"
              title="Научные исследования"
              items={[
                "Клонирование и секвенирование генов",
                "Функциональный анализ генома",
                "Исследование древней ДНК",
                "CRISPR-редактирование геномов",
              ]}
            />
            <ApplicationBlock
              icon="FlaskConical"
              color="#c97dcb"
              title="Биотехнология"
              items={[
                "Производство рекомбинантных белков",
                "Создание ГМО-организмов",
                "Разработка генных вакцин",
                "Мониторинг ГМО в продуктах питания",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Section: Оборудование */}
      <section id="equipment" className="py-24 bg-[#0d1220] scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            number="04"
            title="Оборудование и реагенты"
            subtitle="Всё необходимое для проведения амплификации"
          />

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-xs tracking-widest uppercase text-[#c9a84c] mb-6">
                Основное оборудование
              </h3>
              <div className="space-y-4">
                {[
                  {
                    name: "Термоциклер",
                    desc: "Программируемый прибор для создания циклов нагрева/охлаждения. Точность поддержания температуры ±0.1°C.",
                    icon: "Cpu",
                  },
                  {
                    name: "Real-time PCR система",
                    desc: "Термоциклер с оптической системой для регистрации флуоресценции в реальном времени. Детектирование по каналам FAM, HEX, ROX.",
                    icon: "Radio",
                  },
                  {
                    name: "Электрофорезная камера",
                    desc: "Горизонтальный гель-электрофорез для визуализации продуктов ПЦР в агарозном геле.",
                    icon: "AlignJustify",
                  },
                  {
                    name: "Ламинарный бокс",
                    desc: "Рабочая зона с ламинарным потоком воздуха и UV-стерилизацией для предотвращения контаминации.",
                    icon: "Wind",
                  },
                  {
                    name: "Центрифуга / микроцентрифуга",
                    desc: "Для осаждения реагентов и разделения компонентов реакционной смеси. Скорость до 15 000 об/мин.",
                    icon: "RefreshCw",
                  },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="flex gap-4 p-4 border border-[#1e2a3a] hover:border-[#c9a84c]/30 transition-colors duration-200"
                  >
                    <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-[#c9a84c]/10 text-[#c9a84c]">
                      <Icon name={item.icon} size={18} />
                    </div>
                    <div>
                      <div className="font-semibold text-[#e8e4d9] text-sm mb-1">
                        {item.name}
                      </div>
                      <div className="text-[#6a6458] text-sm leading-relaxed">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs tracking-widest uppercase text-[#c9a84c] mb-6">
                Ключевые реагенты
              </h3>
              <div className="space-y-3">
                {[
                  { name: "Taq-полимераза", note: "5 U/мкл" },
                  { name: "dNTP смесь", note: "10 мМ каждый" },
                  { name: "Буфер для ПЦР", note: "10× концентрат" },
                  { name: "MgCl₂", note: "25 мМ" },
                  { name: "Праймеры (F/R)", note: "10 мкМ" },
                  { name: "Матричная ДНК", note: "1–100 нг/мкл" },
                  { name: "Флуоресцентные красители", note: "SYBR, FAM" },
                  { name: "Интеркалирующий краситель", note: "EtBr / GelRed" },
                ].map((r) => (
                  <div
                    key={r.name}
                    className="flex items-center justify-between py-3 border-b border-[#1e2a3a]"
                  >
                    <span className="text-sm text-[#c8c0b0]">{r.name}</span>
                    <span className="text-xs text-[#5a5448] font-mono">
                      {r.note}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Протоколы */}
      <section id="protocols" className="py-24 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            number="05"
            title="Лабораторные протоколы"
            subtitle="Пошаговые инструкции для стандартных процедур"
          />

          <div className="mt-16 grid md:grid-cols-2 gap-10">
            <Protocol
              title="Стандартный протокол ПЦР"
              steps={[
                {
                  n: 1,
                  title: "Подготовка реакционной смеси",
                  text: "Приготовить мастер-микс: 1× буфер, 1.5 мМ MgCl₂, 0.2 мМ dNTP, 0.5 мкМ каждого праймера, 1 U Taq-полимеразы. Объём реакции 25–50 мкл.",
                },
                {
                  n: 2,
                  title: "Начальная денатурация",
                  text: "95°C — 3–5 минут. Полная денатурация двуцепочечной ДНК и активация hot-start полимеразы.",
                },
                {
                  n: 3,
                  title: "Циклирование (30–40 циклов)",
                  text: "Денатурация: 95°C / 30 сек → Отжиг праймеров: Tm-5°C / 30 сек → Элонгация: 72°C / 1 мин/кб",
                },
                {
                  n: 4,
                  title: "Финальная элонгация",
                  text: "72°C — 5–10 минут. Завершение синтеза всех частично удлинённых фрагментов.",
                },
                {
                  n: 5,
                  title: "Контроль качества",
                  text: "Электрофорез в 1.5–2% агарозном геле. Визуализация полос в УФ-свете. Анализ специфичности и эффективности амплификации.",
                },
              ]}
            />

            <Protocol
              title="Протокол RT-PCR (одностадийный)"
              steps={[
                {
                  n: 1,
                  title: "Выделение РНК",
                  text: "Гомогенизация образца в TRIzol. Фазовое разделение хлороформом. Осаждение изопропанолом. Отмывка 75% этанолом. Растворение в воде без РНКаз.",
                },
                {
                  n: 2,
                  title: "Проверка качества РНК",
                  text: "Измерение соотношения A260/A280 на нанофотометре (норма 1.8–2.1). Контроль целостности рРНК на геле.",
                },
                {
                  n: 3,
                  title: "Обратная транскрипция",
                  text: "42–50°C / 30–60 мин с обратной транскриптазой, случайными гексамерами или oligo(dT)-праймерами.",
                },
                {
                  n: 4,
                  title: "Инактивация RT",
                  text: "95°C / 5 минут для денатурации обратной транскриптазы и первоначальной денатурации кДНК.",
                },
                {
                  n: 5,
                  title: "Амплификация кДНК",
                  text: "Стандартное ПЦР-циклирование с ген-специфичными праймерами. 30–35 циклов. Визуализация продуктов гель-электрофорезом.",
                },
              ]}
            />
          </div>

          <div className="mt-12 bg-[#111826] border border-[#c9a84c]/20 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="Lightbulb" size={18} className="text-[#c9a84c]" />
              <h3 className="font-display text-xl text-[#c9a84c]">
                Критические факторы успеха
              </h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6 text-sm text-[#8a8070] leading-relaxed">
              <div>
                <div className="text-[#e8e4d9] font-semibold mb-2">
                  Температура отжига
                </div>
                Рассчитывается по формуле Tm = 4(G+C) + 2(A+T). Неверный выбор
                приводит к неспецифической амплификации или отсутствию продукта.
              </div>
              <div>
                <div className="text-[#e8e4d9] font-semibold mb-2">
                  Концентрация MgCl₂
                </div>
                Оптимальная концентрация 1.5–2.5 мМ. Избыток магния снижает
                специфичность, недостаток — ингибирует полимеразу.
              </div>
              <div>
                <div className="text-[#e8e4d9] font-semibold mb-2">
                  Предотвращение контаминации
                </div>
                Строгое разделение зон для преаналитики, реакции и анализа.
                Обязательное включение отрицательных контролей в каждый запуск.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#080c14] border-t border-[#1e2a3a]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Icon name="Dna" size={18} className="text-[#c9a84c]" />
            <span className="font-display text-[#c9a84c] tracking-widest text-sm uppercase">
              ДНК Амплификация
            </span>
          </div>
          <div className="text-[#3a3428] text-xs tracking-wider uppercase">
            Генная инженерия · Молекулярная биология
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionHeader({
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

function TimelineItem({
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

function MethodCard({
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

function ApplicationBlock({
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

function Protocol({
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
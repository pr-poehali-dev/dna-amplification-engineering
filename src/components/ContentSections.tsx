import Icon from "@/components/ui/icon";
import {
  SectionHeader,
  TimelineItem,
  MethodCard,
  ApplicationBlock,
  Protocol,
} from "@/components/ui-helpers";

export default function ContentSections() {
  return (
    <>
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
    </>
  );
}

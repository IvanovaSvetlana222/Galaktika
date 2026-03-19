import { SpaceBackground } from './components/SpaceBackground';

export default function App() {
  const scrollToPrograms = () => {
    document.getElementById('programs-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleRegister = () => {
    alert('🚀 Запись на курс! Мы свяжемся с вами.');
  };

  return (
    <div className="min-h-screen bg-[#0a0e27] text-[#f0f4fa] overflow-x-hidden">
      <SpaceBackground />
      
      <div className="relative z-[5] max-w-[1280px] mx-auto px-5 pt-7 pb-20">
        {/* Header */}
        <header className="text-center mb-10">
          <div className="text-2xl text-[#f0e0ff] text-center mb-6"
               style={{
                 textShadow: '0 0 12px #b87cf7, 0 0 25px #40e0d0'
               }}>
            В центре внимания – Ваш успех!
          </div>
          <h1 className="text-[clamp(1.8rem,7vw,3.5rem)] font-black leading-tight mb-6 uppercase tracking-[2px]"
              style={{
                filter: 'drop-shadow(0 0 20px #40e0d0)'
              }}>
            <span className="inline-block mr-1" style={{ filter: 'drop-shadow(0 0 10px #40e0d0)' }}>
              🌌
            </span>
            <span className="inline bg-gradient-to-r from-white via-[#e6d0ff] via-[#b87cf7] via-[#40e0d0] to-[#7ff0e0] bg-clip-text text-transparent">
              ГАЛАКТИКА РУССКОГО ЯЗЫКА:
            </span>
            <br />
            <span className="inline bg-gradient-to-r from-white via-[#e6d0ff] via-[#b87cf7] via-[#40e0d0] to-[#7ff0e0] bg-clip-text text-transparent">
              ПРИТЯЖЕНИЕ ЗНАНИЙ!
            </span>
          </h1>
          <p className="text-2xl max-w-[900px] mx-auto text-[#e6d0ff]">
            Мечтаете спокойно, без стресса, дрожи в коленях написать контрольную работу (ВПР) или сдать экзамен по русскому языку (ОГЭ, ЕГЭ), чтобы поступить в престижный вуз? Значит, этот курс для Вас!
          </p>
        </header>

        {/* Gagarin Quote */}
        <div className="text-2xl text-white bg-[rgba(45,20,70,0.7)] rounded-[80px] px-10 py-6 my-11 border border-[#b87cf7] text-center backdrop-blur-[3px]"
             style={{
               boxShadow: '0 0 35px #b87cf7'
             }}>
          Как сказал когда-то первый космонавт Земли Ю.А. Гагарин, отправляясь в свой первый космический полёт: «Поехали!»
        </div>

        {/* Programs Button */}
        <div className="text-center">
          <button 
            onClick={scrollToPrograms}
            className="bg-[rgba(25,15,35,0.9)] border-2 border-[#b87cf7] rounded-[60px] px-12 py-3 text-2xl font-semibold text-white tracking-[2px] backdrop-blur-[5px] transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:bg-[rgba(45,25,65,0.95)] hover:border-[#40e0d0] my-8 inline-block leading-tight animate-[btnPulse_3s_infinite_alternate]"
            style={{
              boxShadow: '0 0 30px rgba(184, 124, 247, 0.5), 0 0 15px #40e0d0'
            }}>
            <span className="text-4xl mr-2.5 inline-block relative top-[2px]" style={{ filter: 'drop-shadow(0 0 8px #b87cf7)' }}>
              ✨
            </span>
            Программы курса
            <span className="text-4xl ml-2.5 inline-block relative top-[2px]" style={{ filter: 'drop-shadow(0 0 8px #b87cf7)' }}>
              ✨
            </span>
          </button>
        </div>

        {/* Route Steps */}
        <h2 className="text-5xl mt-10 mb-6 text-[#b87cf7]" style={{ textShadow: '0 0 15px #b87cf7' }}>
          🚀 Маршрут полёта <small className="text-3xl text-[#d4a5ff]">→ К высоким баллам</small>
        </h2>

        <div className="flex flex-wrap justify-around gap-4 my-8">
          <div className="flex-1 min-w-[150px] text-center bg-[rgba(64,224,208,0.1)] rounded-[30px] px-4 py-6 border border-[#40e0d0]">
            <div className="text-5xl font-bold text-[#b87cf7] leading-none" style={{ textShadow: '0 0 20px #b87cf7' }}>1</div>
            <div className="text-xl font-bold text-[#40e0d0] mt-2">ВПР</div>
            <div className="text-lg leading-snug">уверенность и разборы</div>
          </div>
          <div className="flex-1 min-w-[150px] text-center bg-[rgba(64,224,208,0.1)] rounded-[30px] px-4 py-6 border border-[#40e0d0]">
            <div className="text-5xl font-bold text-[#b87cf7] leading-none" style={{ textShadow: '0 0 20px #b87cf7' }}>2</div>
            <div className="text-xl font-bold text-[#b87cf7] mt-2">ОГЭ</div>
            <div className="text-lg leading-snug">теория + практика</div>
          </div>
          <div className="flex-1 min-w-[150px] text-center bg-[rgba(64,224,208,0.1)] rounded-[30px] px-4 py-6 border border-[#40e0d0]">
            <div className="text-5xl font-bold text-[#b87cf7] leading-none" style={{ textShadow: '0 0 20px #b87cf7' }}>3</div>
            <div className="text-xl font-bold text-[#40e0d0] mt-2">ЕГЭ</div>
            <div className="text-lg leading-snug">тесты, сочинение - мониторинги</div>
          </div>
        </div>

        {/* Format Card */}
        <div className="bg-[rgba(25,15,35,0.85)] border border-[rgba(64,224,208,0.45)] rounded-[40px] px-8 py-9 my-12 text-center backdrop-blur-[2px] transition-all duration-200 hover:-translate-y-1.5 hover:border-[#7ff0e0]"
             style={{
               boxShadow: '0 20px 40px rgba(64, 224, 208, 0.2)'
             }}>
          <h2 className="text-4xl text-[#b87cf7] mb-2">🚀 Формат</h2>
          <p className="text-2xl mb-2">Маленькие группы, максимум 5 учеников</p>
          <p className="text-lg">Каждый получает внимание, обратную связь и поддержку на каждом этапе подготовки.</p>
        </div>

        {/* Target Audience */}
        <h2 className="text-5xl mt-10 mb-6 text-[#40e0d0]" style={{ textShadow: '0 0 15px #40e0d0' }}>
          👩‍🚀 Маршруты по орбитам знаний
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-9 my-12">
          <div className="bg-[rgba(25,15,35,0.85)] border border-[rgba(64,224,208,0.45)] rounded-[40px] px-8 py-9 text-center backdrop-blur-[2px] transition-all duration-200 hover:-translate-y-1.5 hover:border-[#7ff0e0]"
               style={{ boxShadow: '0 20px 40px rgba(64, 224, 208, 0.2)' }}>
            <div className="text-6xl mb-2">🌍</div>
            <h3 className="text-3xl text-[#40e0d0] mt-0 mb-2">Первый полёт</h3>
            <p className="text-xl leading-relaxed">Учащиеся 5–8 классов<br />(подготовка к ВПР)</p>
          </div>
          <div className="bg-[rgba(25,15,35,0.85)] border border-[rgba(64,224,208,0.45)] rounded-[40px] px-8 py-9 text-center backdrop-blur-[2px] transition-all duration-200 hover:-translate-y-1.5 hover:border-[#7ff0e0]"
               style={{ boxShadow: '0 20px 40px rgba(64, 224, 208, 0.2)' }}>
            <div className="text-6xl mb-2">🛸</div>
            <h3 className="text-3xl text-[#b87cf7] mt-0 mb-2">Разбор полётов</h3>
            <p className="text-xl leading-relaxed">Выпускники основной школы — учащиеся 8–9 классов (подготовка к ОГЭ)</p>
          </div>
          <div className="bg-[rgba(25,15,35,0.85)] border border-[rgba(64,224,208,0.45)] rounded-[40px] px-8 py-9 text-center backdrop-blur-[2px] transition-all duration-200 hover:-translate-y-1.5 hover:border-[#7ff0e0]"
               style={{ boxShadow: '0 20px 40px rgba(64, 224, 208, 0.2)' }}>
            <div className="text-6xl mb-2">✨</div>
            <h3 className="text-3xl text-[#40e0d0] mt-0 mb-2">В открытый Космос</h3>
            <p className="text-xl leading-relaxed">Выпускники средней школы — учащиеся 10–11 классов (подготовка к ЕГЭ)</p>
          </div>
        </div>

        {/* Programs Section */}
        <h2 id="programs-section" className="text-5xl mt-10 mb-6 text-[#b87cf7]" style={{ textShadow: '0 0 15px #b87cf7' }}>
          🪐 Программы курса
        </h2>
        <p className="text-xl mb-8">Маршруты по орбитам знаний. Каждая программа — как продуманный полёт: с чётким маршрутом, практикой, поддержкой и выходом на уверенный результат.</p>

        {/* VPR Program */}
        <div className="flex items-center gap-4 mt-8 mb-4">
          <span className="text-5xl">🛰️</span>
          <h3 className="text-4xl text-[#40e0d0] m-0">Первая космическая станция: ВПР</h3>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-9 mt-4 items-stretch">
          <div className="bg-[rgba(25,15,35,0.85)] border border-[rgba(64,224,208,0.45)] rounded-[40px] px-8 py-9 backdrop-blur-[2px] flex flex-col h-full max-w-[800px] mx-auto"
               style={{ boxShadow: '0 20px 40px rgba(64, 224, 208, 0.2)' }}>
            <div className="flex-1">
              <h4 className="text-2xl text-[#b87cf7] mt-0 text-center mb-3">🔬 Все виды лингвистического анализа</h4>
              <ul className="list-none p-0 m-0">
                {[
                  { emoji: '🔊', text: 'фонетический разбор' },
                  { emoji: '🧩', text: 'морфемный разбор' },
                  { emoji: '📦', text: 'словообразовательный разбор' },
                  { emoji: '📖', text: 'лексический разбор' },
                  { emoji: '🏷️', text: 'морфологический разбор' },
                  { emoji: '✏️', text: 'орфографический разбор' },
                  { emoji: '🔗', text: 'синтаксический разбор' },
                  { emoji: '🔖', text: 'пунктуационный разбор' }
                ].map((item, i) => (
                  <li key={i} className="bg-[rgba(64,224,208,0.1)] border border-[rgba(64,224,208,0.3)] rounded-[30px] backdrop-blur-[2px] transition-all duration-200 text-xl px-5 py-3 my-2 flex items-start gap-2.5 hover:bg-[rgba(64,224,208,0.15)] hover:border-[#40e0d0] hover:translate-x-1.5"
                      style={{ boxShadow: '0 0 15px rgba(64, 224, 208, 0.2)' }}>
                    <span className="flex-shrink-0 w-[30px] text-center text-2xl">{item.emoji}</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-[rgba(25,15,35,0.85)] border border-[rgba(64,224,208,0.45)] rounded-[40px] px-8 py-9 backdrop-blur-[2px] flex flex-col h-full max-w-[800px] mx-auto"
               style={{ boxShadow: '0 20px 40px rgba(64, 224, 208, 0.2)' }}>
            <div className="flex-1">
              <h4 className="text-2xl text-[#b87cf7] mt-0 text-center mb-3">📋 Работа по демоверсиям ВПР</h4>
              <ul className="list-none p-0 m-0">
                {[
                  { emoji: '5️⃣', text: <><strong>класс</strong> — адаптация и первые шаги</> },
                  { emoji: '6️⃣', text: <><strong>класс</strong> — закрепление навыков</> },
                  { emoji: '7️⃣', text: <><strong>класс</strong> — углубление знаний</> },
                  { emoji: '8️⃣', text: <><strong>класс</strong> — подготовка к экзамену</> },
                  { emoji: '🔟', text: <><strong>класс</strong> — повторение и систематизация</> }
                ].map((item, i) => (
                  <li key={i} className="bg-[rgba(64,224,208,0.1)] border border-[rgba(64,224,208,0.3)] rounded-[30px] backdrop-blur-[2px] transition-all duration-200 text-xl px-5 py-3 my-2 flex items-start gap-2.5 hover:bg-[rgba(64,224,208,0.15)] hover:border-[#40e0d0] hover:translate-x-1.5"
                      style={{ boxShadow: '0 0 15px rgba(64, 224, 208, 0.2)' }}>
                    <span className="flex-shrink-0 w-[30px] text-center text-2xl">{item.emoji}</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-[1260px] w-full">
          <div className="text-2xl bg-[rgba(64,224,208,0.2)] px-4 py-4 rounded-[60px] text-center mt-4 mb-8 border border-[#40e0d0] w-full"
               style={{ boxShadow: '0 0 20px rgba(64,224,208,0.3)' }}>
            <strong>Уверенность при написании ВПР!</strong>
          </div>
        </div>

        {/* OGE Program */}
        <div className="flex items-center gap-4 mt-12 mb-4">
          <span className="text-5xl">🌌</span>
          <h3 className="text-4xl text-[#b87cf7] m-0">Космодром: разбор полётов ОГЭ</h3>
        </div>

        <div className="bg-[rgba(25,15,35,0.85)] border border-[rgba(64,224,208,0.45)] rounded-[40px] px-8 py-9 backdrop-blur-[2px] flex flex-col h-full max-w-[1260px] mb-4"
             style={{ boxShadow: '0 20px 40px rgba(64, 224, 208, 0.2)' }}>
          <div className="flex-1">
            <ul className="list-none p-0 m-2">
              {[
                { emoji: '🌌', text: '«Звёздный путь»: к изложению на «отлично»' },
                { emoji: '✨', text: '«ОРФО созвездие»: «космические ловушки» орфографии' },
                { emoji: '🛸', text: '«Пункт 5.0»: синтаксис и пунктуация с космическими технологиями версии 5.0' },
                { emoji: '🪐', text: '«Лексические спутники»: о лексике и фразеологии просто' },
                { emoji: '🚀', text: '«Нормы поведения в лингвокосмосе»: грамматические нормы «великого и могучего»' },
                { emoji: '🛰️', text: '«Космическая станция №13»: текстоведение и «загадки» сочинения-рассуждения (задание 13)' }
              ].map((item, i) => (
                <li key={i} className="bg-[rgba(64,224,208,0.1)] border border-[rgba(64,224,208,0.3)] rounded-[30px] backdrop-blur-[2px] transition-all duration-200 text-xl px-5 py-3 my-2 flex items-start gap-2.5 hover:bg-[rgba(64,224,208,0.15)] hover:border-[#40e0d0] hover:translate-x-1.5"
                    style={{ boxShadow: '0 0 15px rgba(64, 224, 208, 0.2)' }}>
                  <span className="flex-shrink-0 w-[30px] text-center text-2xl">{item.emoji}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="max-w-[1260px] w-full">
          <div className="text-2xl bg-[rgba(64,224,208,0.2)] px-4 py-4 rounded-[60px] text-center mt-0 mb-8 border border-[#40e0d0] w-full"
               style={{ boxShadow: '0 0 20px rgba(64,224,208,0.3)' }}>
            <strong>Теория + практика = «ОТЛИЧНО» на ОГЭ</strong>
          </div>
        </div>

        {/* EGE Program */}
        <div className="flex items-center gap-4 mt-12 mb-4">
          <span className="text-5xl">✨</span>
          <h3 className="text-4xl text-[#40e0d0] m-0">Вселенная ЕГЭ, или На пути в открытый Космос</h3>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-9 mt-4 items-stretch">
          <div className="bg-[rgba(25,15,35,0.85)] border border-[rgba(64,224,208,0.45)] rounded-[40px] px-8 py-9 backdrop-blur-[2px] flex flex-col h-full"
               style={{ boxShadow: '0 20px 40px rgba(64, 224, 208, 0.2)' }}>
            <div className="flex-1 flex flex-col items-center">
              <h4 className="text-2xl text-[#b87cf7] mt-0 mb-2 text-center w-full">🌟 Звездопад, или Как получить 26 «звёзд» в коллекцию знаний</h4>
              <ul className="list-none p-0 w-full text-left">
                {[
                  { emoji: '🌠', text: '№№ 1, 26: «гравитация текста» — логико-смысловые отношения между предложениями в тексте' },
                  { emoji: '🪐', text: '№ 3: «мироздание» смысла, стилей и типов речи' },
                  { emoji: '☄️', text: '№№ 4–8: «космические нормы» — орфоэпические, грамматические, лексические' },
                  { emoji: '✨', text: '№№ 9–15: «Вселенная» орфографии' },
                  { emoji: '💫', text: '№№ 16–21: «Космос» пунктуации' },
                  { emoji: '🛸', text: '№ 22: «красноречивый Космос», или выразительные средства языка' },
                  { emoji: '👾', text: '№№ 23, 24: "Вселенский Разум": информационно-смысловая переработка прочитанного текста, виды информации в тексте' },
                  { emoji: '🌙', text: '№№ 2, 25: «загадки» лексического анализа слова' }
                ].map((item, i) => (
                  <li key={i} className="bg-[rgba(64,224,208,0.1)] border border-[rgba(64,224,208,0.3)] rounded-[30px] backdrop-blur-[2px] transition-all duration-200 text-xl px-5 py-3 my-2 flex items-start gap-2.5 hover:bg-[rgba(64,224,208,0.15)] hover:border-[#40e0d0] hover:translate-x-1.5"
                      style={{ boxShadow: '0 0 15px rgba(64, 224, 208, 0.2)' }}>
                    <span className="flex-shrink-0 w-[30px] text-center text-2xl">{item.emoji}</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-[rgba(25,15,35,0.85)] border border-[rgba(64,224,208,0.45)] rounded-[40px] px-8 py-9 backdrop-blur-[2px] flex flex-col h-full"
               style={{ boxShadow: '0 20px 40px rgba(64, 224, 208, 0.2)' }}>
            <div className="flex-1 flex flex-col items-center">
              <h4 className="text-2xl text-[#b87cf7] mt-0 mb-2 text-center w-full">📝 «Гравитация текста», или «Тайны» экзаменационного сочинения</h4>
              <ul className="list-none p-0 w-full text-left">
                {[
                  { emoji: '🚀', text: '«Космос автора» — авторская позиция как ответ на проблемный вопрос в задании 27' },
                  { emoji: '🛰️', text: '«Небеспорядочные связи во Вселенной текста» — как найти и прокомментировать смысловую связь' },
                  { emoji: '🪐', text: '«Спутники»-иллюстрации — как найти и прокомментировать примеры-иллюстрации в задании 27' },
                  { emoji: '👩‍🚀', text: '«Мой космос» — как обосновать собственное мнение по авторской позиции' },
                  { emoji: '📡', text: '«Нормы поведения в лингвокосмосе» — как соблюсти нормы языка в сочинении: орфография + пунктуация + грамматика + речь + логика + этика + фактическая точность' },
                  { emoji: '✍️', text: 'Практические «полёты»: написание сочинений по экзаменационным критериям' },
                  { emoji: '🏆', text: '«Высший пилотаж»: проверка сочинения по экзаменационным критериям' }
                ].map((item, i) => (
                  <li key={i} className="bg-[rgba(64,224,208,0.1)] border border-[rgba(64,224,208,0.3)] rounded-[30px] backdrop-blur-[2px] transition-all duration-200 text-xl px-5 py-3 my-2 flex items-start gap-2.5 hover:bg-[rgba(64,224,208,0.15)] hover:border-[#40e0d0] hover:translate-x-1.5"
                      style={{ boxShadow: '0 0 15px rgba(64, 224, 208, 0.2)' }}>
                    <span className="flex-shrink-0 w-[30px] text-center text-2xl">{item.emoji}</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="text-2xl bg-[rgba(64,224,208,0.2)] px-4 py-4 rounded-[60px] text-center mt-8 border border-[#40e0d0]"
             style={{ boxShadow: '0 0 20px rgba(64,224,208,0.3)' }}>
          «Орбиталь»: мониторинги знаний каждые два месяца.<br />Первый выход без стресса в открытый Космос Жизни!
        </div>

        {/* Why Special */}
        <h2 className="text-5xl mt-10 mb-6 text-[#40e0d0]" style={{ textShadow: '0 0 15px #40e0d0' }}>
          ✨ Почему этот курс особенный?
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-9 mb-12">
          {[
            { emoji: '🎯', num: '01', text: 'Акцент на практику', color: '#40e0d0' },
            { emoji: '📚', num: '02', text: 'Разбор тестов из открытого банка заданий (ОБЗ) ФИПИ', color: '#b87cf7' },
            { emoji: '🎮', num: '03', text: 'Теория и практика в интерактивном формате', color: '#40e0d0' }
          ].map((item, i) => (
            <div key={i} className="bg-[rgba(25,15,35,0.85)] border border-[rgba(64,224,208,0.45)] rounded-[40px] px-8 py-9 text-center backdrop-blur-[2px] transition-all duration-200 hover:-translate-y-1.5 hover:border-[#7ff0e0]"
                 style={{ boxShadow: '0 20px 40px rgba(64, 224, 208, 0.2)' }}>
              <span className="text-6xl">{item.emoji}</span>
              <h3 className="text-3xl mt-2" style={{ color: item.color }}>{item.num}</h3>
              <p className="text-xl leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Requirements */}
        <h2 className="text-5xl mt-10 mb-6 text-[#b87cf7]" style={{ textShadow: '0 0 15px #b87cf7' }}>
          🖥️ Готовность к старту
        </h2>
        <div className="bg-[rgba(25,15,35,0.85)] border border-[rgba(64,224,208,0.45)] rounded-[40px] px-8 py-9 my-8 backdrop-blur-[2px]"
             style={{ boxShadow: '0 20px 40px rgba(64, 224, 208, 0.2)' }}>
          <ul className="list-none pl-0">
            <li className="my-3 text-xl leading-relaxed">• Стационарный компьютер или ноутбук с наушниками и микрофоном</li>
            <li className="my-3 text-xl leading-relaxed">• Стабильный интернет</li>
          </ul>
        </div>

        {/* Schedule */}
        <h2 className="text-5xl mt-10 mb-6 text-[#40e0d0]" style={{ textShadow: '0 0 15px #40e0d0' }}>
          📅 Полётный график
        </h2>
        <div className="flex flex-col gap-4 my-8">
          {[
            { emoji: '🚀', text: 'Понедельник, 17:30 (МСК) — группа подготовки к ВПР' },
            { emoji: '🛰️', text: 'Четверг, 18:00 (МСК) — группа подготовки к ОГЭ' },
            { emoji: '🌕', text: 'Пятница, 17:30 (МСК) — группа подготовки к ЕГЭ' }
          ].map((item, i) => (
            <div key={i} className="bg-[rgba(64,224,208,0.2)] rounded-[50px] px-8 py-5 border-[1.5px] border-[#b87cf7] font-bold flex flex-wrap justify-between items-center text-xl"
                 style={{ boxShadow: '0 0 28px #b87cf7' }}>
              <span>{item.emoji} {item.text}</span>
            </div>
          ))}
        </div>

        {/* Pricing */}
        <h2 className="text-5xl mt-10 mb-6 text-[#b87cf7]" style={{ textShadow: '0 0 15px #b87cf7' }}>
          💰 Тарифы
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-9 my-8">
          <div className="bg-[rgba(25,15,35,0.85)] border border-[rgba(64,224,208,0.45)] rounded-[40px] px-8 py-9 text-center backdrop-blur-[2px] transition-all duration-200 hover:-translate-y-1.5 hover:border-[#7ff0e0]"
               style={{ boxShadow: '0 20px 40px rgba(64, 224, 208, 0.2)' }}>
            <h3 className="text-4xl text-[#40e0d0]">Полный курс (абонемент)</h3>
            <p className="text-5xl font-bold text-[#b87cf7] my-2">50 000 ₽</p>
            <p className="text-xl leading-relaxed">36 занятий с последовательной подготовкой и отработкой тем.</p>
          </div>
          <div className="bg-[rgba(25,15,35,0.85)] border border-[rgba(64,224,208,0.45)] rounded-[40px] px-8 py-9 text-center backdrop-blur-[2px] transition-all duration-200 hover:-translate-y-1.5 hover:border-[#7ff0e0]"
               style={{ boxShadow: '0 20px 40px rgba(64, 224, 208, 0.2)' }}>
            <h3 className="text-4xl text-[#b87cf7]">Оплата за каждое занятие</h3>
            <p className="text-5xl font-bold text-[#40e0d0] my-2">1 500 ₽</p>
            <p className="text-xl leading-relaxed">Стоимость 1 урока в удобном формате обучения.</p>
          </div>
        </div>

        {/* CTA Section */}
        <section className="text-center bg-[rgba(64,224,208,0.2)] rounded-[90px] px-8 py-12 border-2 border-[#b87cf7] my-12 backdrop-blur-[3px]">
          <h2 className="text-4xl text-white mb-6" style={{ textShadow: '0 0 20px #b87cf7' }}>
            ✨ Летим уверенно к высоким результатам!
          </h2>
          <p className="text-3xl my-6">Группы маленькие — максимум 5 учеников, чтобы каждый получил внимание. Места ограничены!</p>
          <p className="text-2xl my-8">Запишитесь сейчас! Мы ждём Вас на борту нашего космического корабля знаний!</p>
          
          <div className="flex flex-wrap justify-center gap-8 my-8">
            <span className="bg-[rgba(184,124,247,0.3)] px-6 py-3 rounded-[50px]">📝 Подготовка к ВПР, ОГЭ и ЕГЭ</span>
            <span className="bg-[rgba(64,224,208,0.3)] px-6 py-3 rounded-[50px]">✨ Современный, спокойный и понятный формат</span>
            <span className="bg-[rgba(184,124,247,0.3)] px-6 py-3 rounded-[50px]">👥 Индивидуальное внимание в мини-группах</span>
          </div>

          <button 
            onClick={handleRegister}
            className="bg-gradient-to-r from-[#40e0d0] to-[#b87cf7] border-none rounded-[70px] px-16 py-6 text-4xl font-bold text-white uppercase tracking-[4px] border-2 border-[rgba(255,255,255,0.3)] cursor-pointer mt-10 inline-block w-fit transition-all duration-250 hover:scale-110 hover:-translate-y-1.5 hover:bg-gradient-to-r hover:from-[#7ff0e0] hover:to-[#d4a5ff]"
            style={{
              boxShadow: '0 15px 45px #40e0d0, 0 0 40px #b87cf7'
            }}>
            ЗАПИСАТЬСЯ НА КУРС
          </button>
        </section>

        {/* Footer */}
        <footer className="text-center mt-20 border-t border-dashed border-[#b87cf7] pt-10 text-lg text-[#e6d0ff]">
          <p>🌌 Галактика русского языка — притяжение знаний. Ждём вас на борту! <br /> © репетитор по русскому языку</p>
        </footer>
      </div>

      <style>{`
        @keyframes btnPulse {
          0% { box-shadow: 0 0 20px #b87cf7, 0 0 10px #40e0d0; }
          100% { box-shadow: 0 0 40px #40e0d0, 0 0 25px #b87cf7; }
        }
      `}</style>
    </div>
  );
}

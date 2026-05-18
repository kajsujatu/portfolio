export default function AboutPage() {
  return (
    <section className="w-full min-h-screen bg-[#f5f5f5] py-20 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-1 gap-12 text-left">
        <div>

          <p className="text-gray-600 text-lg leading-relaxed mb-6" >
            Cześć!</p>
            
            
            <p className="text-gray-600 text-lg leading-relaxed mb-6"> Mam 12 lat doświadczenia w projektowaniu materiałów drukowanych i digitalowych (e-commerce, kampanie outdoorowe, skład publikacji).
            W 2013 roku ukończyłem studia magisterskie na kierunku Grafika na Wydziale Sztuk Pięknych UMK w Toruniu, uzyskując tytuł magistra sztuki. W swoich projektach stawiam na czytelność i estetykę.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Tworzę materiały do druku i internetu — od brandingów,
            plakatów i social media, po responsywne strony internetowe i
            aplikacje oparte o React. W swoich projektach stawiam na
            przejrzystość, nowoczesny wygląd oraz intuicyjny UX.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Lubię łączyć design z technologią, projektując rozwiązania,
            które nie tylko dobrze wyglądają, ale również działają szybko i
            wygodnie na każdym urządzeniu.
          </p>

        </div>

        {/* Right Column */}
        <div className="grid grid-cols-2 gap-5">
          <div className="bg-white p-6 rounded-3xl shadow-sm hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-3xl font-bold text-gray-800 mb-2">12 lat</h3>
            <p className="text-gray-600">
              doświadczenia w grafice i projektowaniu
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-sm hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-3xl font-bold text-gray-800 mb-2">React</h3>
            <p className="text-gray-600">
              nowoczesne strony i interfejsy użytkownika
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-sm hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-3xl font-bold text-gray-800 mb-2">Adobe</h3>
            <p className="text-gray-600">
              Photoshop, Illustrator, InDesign i DTP
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-sm hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-3xl font-bold text-gray-800 mb-2">UX/UI</h3>
            <p className="text-gray-600">
              estetyczne i funkcjonalne projekty webowe
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

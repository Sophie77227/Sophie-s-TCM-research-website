export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#F7F4EE] px-8">

      <div className="text-center">

        <p className="text-sm tracking-[0.4em] text-gray-500 mb-8">
          PERSONAL ARCHIVE
        </p>

        <h1 className="font-serif text-7xl mb-5">
          Zihan Xu
        </h1>

        <img
          src="/me.jpg"
          alt="Zihan Xu"
          className="w-16 h-16 object-cover rounded-full mx-auto mb-8"
        />

        <p className="text-lg text-gray-600 tracking-widest">
          FOOD · HEALTH · TRADITION · SCIENCE
        </p>

        <p className="mt-8 max-w-xl text-gray-500 leading-relaxed">
          When traditional Chinese wisdom says: "Wait, science actually explains this??"
        </p>

      </div>

    </section>
  );
}


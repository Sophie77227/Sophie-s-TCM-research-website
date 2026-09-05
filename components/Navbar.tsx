
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-8 py-5 flex justify-between items-center">

        <h1 className="font-serif text-xl tracking-widest">
          ZIHAN XU
        </h1>

        <div className="flex gap-8 text-sm text-gray-600">
          <a href="#origin">Origin</a>
          <a href="#research">Research</a>
          <a href="#journey">TCM Notes</a>
          <a href="#notes">Notes</a>
          <a href="#contact">Contact</a>
        </div>

      </div>
    </nav>
  );
}


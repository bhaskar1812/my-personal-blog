import darkmode from "../assets/darkmode.svg";

export function Header() {
  return (
    <header className="max-w-5xl mx-auto py-10 px-4">
      <nav className="flex items-center justify-center mb-10">
        {/* <h1 className="text-2xl font-bold">Bhaskar Bollampalli</h1> */}
        <div className="flex-1"></div>
        <div className="flex items-center gap-6 text-gray-300 px-6 py-2 rounded-full border border-gray-600">
          {["Home", "About", "Articles", "Projects", "Expertise"].map(
            (item) => (
              <a key={item} href="#" className="hover:text-amber-400 font-medium">
                {item}
              </a>
            )
          )}
        </div>
        <button className="flex ml-auto p-2 rounded-full border border-gray-600 hover:bg-neutral-800">
          <img src={darkmode} alt="Toggle Dark Mode" className="h-6 w-6" />
        </button>
      </nav>
    </header>
  );
}

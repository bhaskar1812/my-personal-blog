export function Header() {
  return (
    <header className="max-w-5xl mx-auto py-10 px-4">
      <nav className="flex items-center justify-between mb-10">
        <h1 className="text-2xl font-bold">Bhaskar Bollampalli</h1>
        <div className="flex gap-6 text-gray-300">
          {["Home", "About", "Articles", "Projects", "Expertise"].map(
            (item) => (
              <a key={item} href="#" className="hover:text-white">
                {item}
              </a>
            )
          )}
        </div>
      </nav>
    </header>
  );
}

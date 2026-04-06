export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-[#09090B]/80 backdrop-blur-md">
      <div className="w-full flex justify-center px-6 py-4">
        <div className="w-full max-w-4xl flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">🔫</span>
            <span className="text-white font-bold tracking-wider">BLACK RUSSIA</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Геймплей
            </a>
            <a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Банды
            </a>
            <a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Гонки
            </a>
            <a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Сообщество
            </a>
            <a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Новости
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Войти
            </a>
            <a
              href="#"
              className="text-sm text-white bg-red-700 hover:bg-red-600 px-3.5 py-1.5 rounded-md border border-red-600 transition-colors font-medium"
            >
              Играть
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
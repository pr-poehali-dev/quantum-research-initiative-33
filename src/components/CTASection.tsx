export function CTASection() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "#09090B" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-white tracking-tight">
            Твоя история начинается здесь.
          </h2>
          <div className="flex items-center gap-3">
            <button className="px-5 py-2.5 border border-zinc-700 text-white font-medium rounded-lg hover:bg-zinc-800 transition-colors text-sm">
              Сообщество
            </button>
            <button className="px-5 py-2.5 bg-red-700 hover:bg-red-600 text-white font-bold rounded-lg transition-colors text-sm">
              Присоединиться
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
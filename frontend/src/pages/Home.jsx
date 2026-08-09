import React from 'react'

const DemoMap = () => {
  const key = import.meta.env.VITE_MAPBOX_KEY || null
  return (
    <div className="w-full h-80 bg-slate-100 rounded-lg flex items-center justify-center">
      {key ? (
        <div className="text-sm text-slate-600">Mapbox key found (placeholder) — Map will render here.</div>
      ) : (
        <div className="text-sm text-slate-600">MAPPLACEHOLDER — قرار دادن MAPBOX_KEY در .env برای نمایش نقشه</div>
      )}
    </div>
  )
}

export default function Home(){
  return (
    <main className="p-6 max-w-5xl mx-auto">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-semibold">زمین‌نما — ZaminNama</h1>
        <a href="https://zamin-nama-ai.lovable.app/" target="_blank" rel="noreferrer" className="text-sm text-gold">دیدن دمو آنلاین</a>
      </header>

      <section className="mb-6">
        <h2 className="text-xl font-medium mb-3">قهرمان (Hero)</h2>
        <div className="bg-gradient-to-r from-black via-slate-800 to-black text-white p-6 rounded-2xl">
          <p className="mb-4">«آینده سرمایه‌گذاری زمین را ببینید»</p>
          <div className="flex gap-3">
            <button className="bg-gold text-black px-4 py-2 rounded">مشاهده زمین‌های سه‌بعدی</button>
            <button className="bg-white text-black px-4 py-2 rounded">تحلیل هوشمند سرمایه‌گذاری</button>
          </div>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-medium mb-3">نقشه هوشمند (نمونه)</h2>
        <DemoMap />
      </section>

      <section>
        <h2 className="text-xl font-medium mb-3">داده‌های نمونه</h2>
        <p className="text-sm text-slate-600">30 رکورد زمین در مسیر /data/seeds/lands-30.json قرار دارد.</p>
      </section>
    </main>
  )
}

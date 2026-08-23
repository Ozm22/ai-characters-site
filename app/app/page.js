import Link from 'next/link';

const characters = {
  males: [
    { id: 'm1', name: 'أحمد', role: 'صديق مقرب ومستشار واقعي', image: '👨' },
    { id: 'm2', name: 'خالد', role: 'خبير ذكي ومتهور', image: '🧑‍💻' },
  ],
  females: [
    { id: 'f1', name: 'سارة', role: 'مستشارة جريئة وواقعية', image: '👩' },
    { id: 'f2', name: 'نورة', role: 'مساعدة شخصية مرحة جداً', image: '👱‍♀️' },
  ]
};

export default function Home() {
  return (
    <main className="p-6 max-w-2xl mx-auto pb-20">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-400">شخصيات الذكاء الاصطناعي 🤖</h1>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">قسم الذكور 👨</h2>
        <div className="grid grid-cols-1 gap-4">
          {characters.males.map(char => (
            <Link key={char.id} href={`/chat/${char.id}?name=${char.name}&role=${char.role}`}>
              <div className="bg-gray-800 p-4 rounded-xl border border-gray-700 hover:border-blue-500 transition cursor-pointer flex items-center gap-4 shadow-lg">
                <span className="text-4xl">{char.image}</span>
                <div>
                  <h3 className="text-xl font-bold">{char.name}</h3>
                  <p className="text-gray-400 text-sm">{char.role}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">قسم الإناث 👩</h2>
        <div className="grid grid-cols-1 gap-4">
          {characters.females.map(char => (
            <Link key={char.id} href={`/chat/${char.id}?name=${char.name}&role=${char.role}`}>
              <div className="bg-gray-800 p-4 rounded-xl border border-gray-700 hover:border-pink-500 transition cursor-pointer flex items-center gap-4 shadow-lg">
                <span className="text-4xl">{char.image}</span>
                <div>
                  <h3 className="text-xl font-bold">{char.name}</h3>
                  <p className="text-gray-400 text-sm">{char.role}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

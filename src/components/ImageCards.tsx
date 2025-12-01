export function ImageCards() {
    const cards = [
    { label: "I like travelling", img: "https://via.placeholder.com/300" },
    { label: "My workspace", img: "https://via.placeholder.com/300" },
    { label: "I play badminton", img: "https://via.placeholder.com/300" },
    { label: "I love frontend", img: "https://via.placeholder.com/300" },
    { label: "Tech enthusiast", img: "https://via.placeholder.com/300" },
    ];
    
    
    return (
    <section className="max-w-5xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-6">
    {cards.map((card, idx) => (
    <div
    key={idx}
    className="rounded-2xl overflow-hidden bg-neutral-800 shadow-md hover:scale-105 transition transform"
    >
    <img src={card.img} alt={card.label} className="h-40 w-full object-cover" />
    <p className="p-3 text-center text-gray-200 font-medium">{card.label}</p>
    </div>
    ))}
    </section>
    );
    }
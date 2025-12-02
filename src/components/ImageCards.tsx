import badmintonImg from '../assets/badminton.jpg';
import travelImg from '../assets/traveling.jpg';
import workspaceImg from '../assets/workspace.jpg';
import frontendImg from '../assets/frontend.jpg';
import bookread from '../assets/bookread.jpg';

export function ImageCards() {
  const cards = [
    { label: "I like travelling", img: travelImg },
    { label: "My workspace", img: workspaceImg },
    { label: "I play badminton", img: badmintonImg },
    { label: "I love frontend", img: frontendImg },
    { label: "Tech enthusiast", img: bookread },
  ];

  return (
    <section className="max-w-5xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-6">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className="rounded-2xl overflow-hidden bg-neutral-800 shadow-md hover:scale-105 transition transform"
        >
          <img
            src={card.img}
            alt={card.label}
            className="h-40 w-full object-cover"
          />
          <p className="p-3 text-center text-gray-200 font-medium">
            {card.label}
          </p>
        </div>
      ))}
    </section>
  );
}

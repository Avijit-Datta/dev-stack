import { Technology } from "../types";

interface TechnologyCardProps {
  technology: Technology;
  isAdded: boolean;
  onAdd: (tech: Technology) => void;
}

function TechnologyCard({ technology, isAdded, onAdd }: TechnologyCardProps) {
  return (
    <div
      className={`bg-surface rounded-lg p-5 flex flex-col border border-neutral-800 border-l-4 border-l-[#28BDB4] ring-2 transition-all duration-300 ease-in-out ${
        isAdded
          ? "ring-[#28BDB4] shadow-[0_0_15px_rgba(40,189,180,0.4)]"
          : "ring-transparent"
      }`}
    >
      <div className="flex items-start justify-between">
        <img
          src={technology.icon}
          alt={technology.name}
          className="w-10 h-10 object-contain"
        />
        <span className="bg-neutral-900 text-textSecondary text-xs px-3 py-1 rounded-full">
          {technology.badge}
        </span>
      </div>

      <h3 className="text-white font-semibold text-lg mt-4">{technology.name}</h3>
      <p className="text-textSecondary text-sm mt-2 flex-1">{technology.description}</p>

      <div className="flex items-center gap-3 mt-4 text-xs flex-wrap">
        <span className="border border-neutral-700 text-white px-2.5 py-1 rounded-full">
          {technology.category}
        </span>
        <span className="text-textSecondary">{technology.difficulty}</span>
        <span className="text-white">⭐ {technology.rating}</span>
      </div>

      <button
        disabled={isAdded}
        onClick={() => onAdd(technology)}
        className={`mt-5 py-2.5 rounded-md text-sm font-semibold transition-all duration-300 ${
          isAdded
            ? "bg-neutral-900 text-[#28BDB4] cursor-not-allowed"
            : "bg-brand-gradient text-black hover:opacity-90"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}

export default TechnologyCard;

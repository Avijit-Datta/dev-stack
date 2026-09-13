import { Technology } from "../types";

interface YourStackProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

function YourStack({ stack, onRemove, onRemoveAll }: YourStackProps) {
  return (
    <aside className="bg-surface border border-neutral-800 rounded-lg p-5 h-fit sticky top-24">
      <h3 className="text-white font-semibold text-lg">Your Stack</h3>
      <p className="text-textSecondary text-xs mt-1">
        {stack.length} Technology Selected
      </p>

      {stack.length === 0 ? (
        <div className="border border-dashed border-neutral-700 rounded-md text-center py-8 mt-6">
          <p className="text-white text-sm">No technologies selected yet.</p>
          <p className="text-textSecondary text-xs mt-1">Your stack is empty.</p>
        </div>
      ) : (
        <>
          <ul className="flex flex-col gap-3 mt-5">
            {stack.map((tech) => (
              <li
                key={tech.id}
                className="stack-item flex items-center gap-3 bg-neutral-900 rounded-md px-3 py-2.5"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-7 h-7 object-contain"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm truncate">{tech.name}</p>
                  <p className="text-textSecondary text-xs truncate">{tech.category}</p>
                </div>
                <button
                  onClick={() => onRemove(tech.id)}
                  className="text-textSecondary hover:text-white w-6 h-6 flex items-center justify-center rounded-full hover:bg-neutral-800 transition-colors duration-200"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={onRemoveAll}
            className="w-full mt-5 py-2.5 rounded-md border border-red-500/40 text-red-400 text-sm font-semibold hover:bg-red-500/10 transition-colors duration-200"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
}

export default YourStack;

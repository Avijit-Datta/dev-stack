import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Loading from "./components/Loading";
import TechnologyCard from "./components/TechnologyCard";
import YourStack from "./components/YourStack";
import Footer from "./components/Footer";
import techData from "./data/technologies.json";
import { Technology } from "./types";

function App() {
  const [techList, setTechList] = useState<Technology[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [myStack, setMyStack] = useState<Technology[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setTechList(techData);
      setIsLoading(false);
    }, 600);
  }, []);

  const handleAddToStack = (tech: Technology) => {
    const alreadyAdded = myStack.find((item) => item.id === tech.id);

    if (alreadyAdded) {
      toast.warning(tech.name + " is already in your stack!");
      return;
    }

    setMyStack([...myStack, tech]);
    toast.success(tech.name + " added to your stack!");
  };

  const handleRemoveFromStack = (id: string) => {
    const tech = myStack.find((item) => item.id === id);
    setMyStack(myStack.filter((item) => item.id !== id));
    if (tech) {
      toast.info(tech.name + " removed from your stack!");
    }
  };

  const handleRemoveAll = () => {
    if (myStack.length === 0) return;
    setMyStack([]);
    toast.info("All technologies removed from your stack!");
  };

  return (
    <div id="top">
      <Navbar />
      <Hero />

      <main id="technologies" className="max-w-[1400px] mx-auto px-5 py-16 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold">
          Explore <span className="gradient-text">Technologies</span>
        </h2>
        <p className="text-textSecondary text-sm mt-2">
          Pick the technologies you want and add them to your stack.
        </p>

        {isLoading ? (
          <Loading />
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1fr_300px] mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {techList.map((tech) => (
                <TechnologyCard
                  key={tech.id}
                  technology={tech}
                  isAdded={myStack.some((item) => item.id === tech.id)}
                  onAdd={handleAddToStack}
                />
              ))}
            </div>

            <YourStack
              stack={myStack}
              onRemove={handleRemoveFromStack}
              onRemoveAll={handleRemoveAll}
            />
          </div>
        )}
      </main>

      <Footer />

      <ToastContainer position="bottom-right" theme="dark" autoClose={2500} />
    </div>
  );
}

export default App;

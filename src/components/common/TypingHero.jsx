import { useEffect, useState } from "react";

const TypingHero = () => {
  const text = "Build Better Habits, Build Better Life.";
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplay(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-4xl font-bold text-center dark:text-white">
      {display}
    </h1>
  );
};

export default TypingHero;
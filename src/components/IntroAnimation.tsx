import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const greetings = [
  { text: "Hello", language: "English" },
  { text: "नमस्ते", language: "Hindi" },
  { text: "Bonjour", language: "French" },
  { text: "Hola", language: "Spanish" },
  { text: "こんにちは", language: "Japanese" },
  { text: "안녕하세요", language: "Korean" },
  { text: "Ciao", language: "Italian" },
  { text: "Olá", language: "Portuguese" },
];

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < greetings.length - 1) {
      const timer = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, 400);
      return () => clearTimeout(timer);
    } else {
      const completeTimer = setTimeout(() => {
        setIsComplete(true);
        setTimeout(onComplete, 800);
      }, 600);
      return () => clearTimeout(completeTimer);
    }
  }, [currentIndex, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      animate={{ opacity: isComplete ? 0 : 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-2"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground">
              {greetings[currentIndex].text}
            </h1>
            <p className="text-muted-foreground text-sm md:text-base">
              {greetings[currentIndex].language}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default IntroAnimation;

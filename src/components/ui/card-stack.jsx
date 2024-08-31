"use client";;
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

let interval;

export const CardStack = ({
  items,
  offset,
  scaleFactor
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };

  return (
    (<div className="relative h-60 w-12 md:h-60 md:w-[60rem]">
      {cards.map((card, index) => {
        return (
          (<motion.div
            key={card.id}
            className="absolute dark:bg-black bg-white h-60 w-12 md:h-60 md:w-[60rem] rounded-3xl px-8 py-12 shadow-xl border border-neutral-200 dark:border-white/[0.1]  shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}>
            
            <div>
              <p className="bg-gradient-to-r from-[#6B32EE] to-[#E50879] bg-clip-text text-transparent text-[2rem] font-extrabold">
                {card.name}
              </p>
              <p className="text-neutral-400 font-normal dark:text-neutral-200">
                {card.category}
              </p>
            </div>
            <div className="font-normal text-neutral-700 dark:text-neutral-200">
              {card.content}
            </div>
          </motion.div>)
        );
      })}
    </div>)
  );
};

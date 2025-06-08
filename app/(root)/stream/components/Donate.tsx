"use client";

import React from "react";
import { CircleDollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import Confetti from "react-confetti";

const Donate = () => {
  const [selectedTip, setSelectedTip] = React.useState<string | null>(null);

  const handleTipClick = (amount: string) => {
    setSelectedTip(amount);
    setTimeout(() => setSelectedTip(null), 5000);
  };

  const tipAmounts = ["$10", "$20", "$30", "$50", "$100", "$200"];

  return (
    <div className="relative bg-gray-900/60 rounded-lg p-4 h-full flex flex-col">
      {selectedTip && (
        <div className="pointer-events-none">
          <Confetti
            width={450}
            height={450}
            numberOfPieces={200}
            gravity={0.2}
            colors={["#9333ea", "#6366f1", "#3b82f6", "#0ea5e9", "#06b6d4"]}
            initialVelocityX={1}
            initialVelocityY={1}
          />
        </div>
      )}
      {/* Header */}
      <div className="flex flex-col">
        <div className="flex flex-row items-center gap-2">
          <h1 className="text-lg font-bold">Tips</h1>
          <CircleDollarSign className="w-6 h-6" />
        </div>
        <p className="text-xs text-gray-400">
          Support the creator by tipping them.
        </p>
      </div>

      {/* Selection */}
      <div className="flex flex-row gap-4 mt-4 ml-8">
        {tipAmounts.map((amount) => (
          <Button
            key={amount}
            onClick={() => handleTipClick(amount)}
            className={`w-12 h-12 cursor-pointer font-bold rounded-full bg-gradient-to-r from-purple-500/60 to-blue-500/60 hover:from-purple-600/60 hover:to-blue-600/60 transition-all duration-300 ${
              selectedTip === amount ? "animate-spin" : ""
            }`}
          >
            {amount}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Donate;

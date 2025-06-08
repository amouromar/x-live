"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Check, X } from "lucide-react";
import { useCopyToClipboard } from "./hooks/useCopyToClipboard";
import { useCountdown } from "./hooks/useCountdown";

const GoLive = () => {
  const [isLive, setIsLive] = useState(false);
  const [showLink, setShowLink] = useState(false);
  const livestreamLink = "https://xlive.com/stream/12345";
  const { copied, copyToClipboard } = useCopyToClipboard();
  const { seconds, isActive, start, reset } = useCountdown(15);

  const handleToggleLive = () => {
    if (isLive) {
      setIsLive(false);
      setShowLink(false);
      reset();
    } else {
      setIsLive(true);
      setShowLink(true);
      start();
    }
  };

  useEffect(() => {
    if (!isActive) {
      setShowLink(false);
    }
  }, [isActive]);

  return (
    <div className="bg-gray-900/60 rounded-lg p-4 h-full flex flex-col gap-8 relative">
      <Button
        onClick={handleToggleLive}
        className={`
          w-full
          relative
          text-white
          shadow-lg
          hover:shadow-xl
          transition-all duration-300
          transform
          hover:scale-101
          active:scale-95
          px-6
          py-3
          rounded-lg
          font-semibold
          text-lg
          overflow-hidden
          cursor-pointer
        `}
      >
        <span className={`absolute inset-0 ${isLive ? 'bg-gradient-to-r from-red-500 to-red-600' : 'bg-gradient-to-r from-blue-500 to-purple-600'} animate-gradient`} />
        <span className="relative z-10">{isLive ? 'End Live' : 'Go Live'}</span>
      </Button>

      {showLink && (
        <div
          className={`
            absolute
            bottom-16
            left-0
            right-0
            bg-white/10
            backdrop-blur-sm
            rounded-t-lg
            p-4
            transform
            transition-transform
            duration-300
            ${showLink ? "translate-y-0" : "translate-y-full"}
          `}
        >
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1 text-white truncate">{livestreamLink}</div>
            <div className="flex items-center gap-2">
              <span className="text-white text-sm">{seconds}s</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => copyToClipboard(livestreamLink)}
              >
                {copied ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  setShowLink(false);
                  reset();
                }}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GoLive;

// Add global styles for the gradient animation
const globalStyles = `
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  .animate-gradient {
    background-size: 200% 200%;
    animation: gradient 15s ease infinite;
  }
`;

// Inject the styles into the document
if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.textContent = globalStyles;
  document.head.appendChild(style);
}

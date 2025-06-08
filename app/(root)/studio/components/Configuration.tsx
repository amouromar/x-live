"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Cog } from "lucide-react";

const Configuration = () => {
  const [selectedAudioQuality, setSelectedAudioQuality] = React.useState<
    string | null
  >(null);
  const [selectedVideoQuality, setSelectedVideoQuality] = React.useState<
    string | null
  >(null);

  const audioQualities = ["96kHz", "128kHz", "192kHz", "256kHz"];
  const videoQualities = ["720p", "1080p", "1440p", "4K"];

  return (
    <div className="bg-gray-900/60 rounded-lg p-8 h-full flex flex-col gap-8">
      <div className="flex items-center gap-4">
        <Cog className="w-6 h-6" />
        <h2 className="text-lg font-bold">Configuration</h2>
      </div>

      {/* Audio Quality */}
      <div className="flex flex-col gap-4">
        <h2 className="text-sm font-semibold">Audio Quality</h2>
        <div className="flex flex-nowrap gap-2">
          {audioQualities.map((quality) => (
            <Button
              key={quality}
              className={`w-24 cursor-pointer font-light ${
                selectedAudioQuality === quality
                  ? "bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                  : ""
              }`}
              onClick={() => setSelectedAudioQuality(quality)}
            >
              {selectedAudioQuality === quality ? "✓ " + quality : quality}
            </Button>
          ))}
        </div>
      </div>

      {/* Video Quality */}
      <div className="flex flex-col gap-4">
        <h2 className="text-sm font-semibold">Video Quality</h2>
        <div className="flex flex-wrap gap-2">
          {videoQualities.map((quality) => (
            <Button
              key={quality}
              className={`w-24 cursor-pointer font-light ${
                selectedVideoQuality === quality
                  ? "bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                  : ""
              }`}
              onClick={() => setSelectedVideoQuality(quality)}
            >
              {selectedVideoQuality === quality ? "✓ " + quality : quality}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Configuration;

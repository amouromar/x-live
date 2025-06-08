import React from "react";
import DeviceSelection from "./components/DeviceSelection";
import FeedPreview from "./components/FeedPreview";
import Configuration from "./components/Configuration";
import GoLive from "./components/GoLive";
import { Ellipsis } from "lucide-react";

const Studio = () => {
  return (
    <div className="flex flex-col gap-4 p-6 h-screen">
      {/* Header */}
      <header className="flex flex-col gap-0">
        <h1 className="text-2xl font-bold">X-Live Studio</h1>
        <div className="flex items-center gap-2">
          <h1 className="text-sm font-semibold text-gray-400">Amour Omar</h1>
          <span className="text-xs text-gray-600">@amour</span>
          <Ellipsis className="w-6 h-6 cursor-pointer text-gray-500" />
        </div>
      </header>

      {/* Main Content */}
      <div className="flex gap-4 h-full">
        {/* Feed Preview */}
        <section className="flex-3">
          <FeedPreview />
        </section>
        {/* Controls */}
        <section className="flex-1">
          <div className="flex flex-col h-full gap-2">
            {/* Device Selection */}
            <div className="flex-1">
              <DeviceSelection />
            </div>
            {/* Configuration */}
            <div className="flex-1">
              <Configuration />
            </div>
            {/* Go Live */}
            <div className="flex-1">
              <GoLive />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Studio;

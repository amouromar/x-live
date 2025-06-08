import React from "react";
import LiveFeed from "./components/LiveFeed";
import Description from "./components/Description";
import Chat from "./components/Chat";
import Donate from "./components/Donate";
import { CircleUser } from "lucide-react";

const Home = () => {
  return (
    <div className="flex flex-col gap-4 p-6 h-screen">
      {/* Header */}
      <header className="flex flex-row justify-between items-center gap-0">
        <div>
          <h1 className="text-4xl font-bold">X-Live</h1>
        </div>
        <div className="flex items-center gap-2">
          <CircleUser className="w-12 h-12 cursor-pointer text-gray-500" />
          <div className="flex flex-col">
            <span className="font-semibold">Amour Omar</span>
            <span className="text-xs text-gray-600">@amour</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex gap-4 h-full">
        {/* Feed Preview */}
        <section className="flex-3">
          <div className="flex flex-col h-full gap-2">
            <div className="flex-3">
              <LiveFeed />
            </div>
            <div className="flex-1">
              <Description />
            </div>
          </div>
        </section>
        {/* Controls */}
        <section className="flex-1">
          <div className="flex flex-col h-full gap-2">
            {/* Donate */}
            <div className="flex-1">
              <Donate />
            </div>
            {/* Chat */}
            <div className="flex-6">
              <Chat />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;

import { Video } from "lucide-react";
import React from "react";

const LiveFeed = () => {
  return (
    <div className="flex items-center justify-center bg-gray-900/60 rounded-lg p-8 h-full">
      <Video className="w-24 h-24 text-gray-400" />
    </div>
  );
};

export default LiveFeed;

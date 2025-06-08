import React from "react";
import { Video } from "lucide-react";

const FeedPreview = () => {
  return (
    <div className="flex items-center justify-center bg-gray-900/60 rounded-lg p-8 h-full">
      <Video className="w-24 h-24 text-gray-400" />
    </div>
  );
};

export default FeedPreview;

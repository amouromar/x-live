import React from "react";
import Image from "next/image";
import Socials from "./Socials";
import { Button } from "@/components/ui/button";
import { Eye, Clock } from "lucide-react";

const Description = () => {
  return (
    <div className="bg-gray-900/60 rounded-lg p-4 h-full flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Avatar */}
          <Image width={60} height={60} src="/Avatar.svg" alt="" />
          <div className="flex flex-col gap-1">
            <span className="font-semibold">Amour Omar</span>
            <span className="text-xs text-gray-400">@amour</span>
          </div>

          {/* Follow and Subscribe */}
          <div className="bg-gray-900/60 h-full flex flex-row gap-2 items-center rounded-full">
            <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 cursor-pointer rounded-full">
              Follow
            </Button>
            <Button className="p-2 border-2 border-gray-700 bg-gray-700/20 cursor-pointer rounded-sm">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-2">
          <div className="flex flex-row gap-2">
            {/* Views */}
            <div className="flex flex-row gap-2 bg-red-400/80 p-4 rounded-full">
              <p className="flex gap-1 items-center text-sm text-white">
                <span>
                  <Eye className="w-5 h-5" />
                </span>
                12.4K
              </p>
            </div>
            {/* Duration */}
            <div className="flex flex-row gap-2 bg-gray-900/60 p-4 rounded-full">
              <p className="flex gap-1 items-center text-sm text-white">
                <span>
                  <Clock className="w-4 h-4" />
                </span>
                02:33:00
              </p>
            </div>
          </div>

          {/* Socials */}
          <Socials />
        </div>
      </div>

      {/* Description Section */}
      <div className="flex flex-row gap-4 items-center px-2">
        {/* Description */}
        <div className="flex-6">
          <div className="flex items-center gap-2 max-w-96 max-h-24">
            <p className="text-sm">
              Come join and watch me blow my brains out trying to complete Elden
              Ring...
            </p>
          </div>
        </div>

        {/* Categories */}
        <div className="ml-auto">
          <div className="flex flex-nowrap gap-1">
            <Button
              className={`w-fit cursor-pointer text-xs font-light bg-transparent p-0 underline`}
            >
              gaming
            </Button>
            <Button
              className={`w-fit cursor-pointer text-xs font-light bg-transparent p-0 underline`}
            >
              live
            </Button>
            <Button
              className={`w-fit cursor-pointer text-xs font-light bg-transparent p-0 underline`}
            >
              EldenRing
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;

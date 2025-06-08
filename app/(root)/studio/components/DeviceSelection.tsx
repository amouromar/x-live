"use client";

import { Button } from "@/components/ui/button";
import { MicIcon, MonitorSmartphoneIcon, VideoIcon } from "lucide-react";
import React from "react";

const DeviceSelection = () => {
  const [selectedMic, setSelectedMic] = React.useState<string | null>(null);
  const [selectedCamera, setSelectedCamera] = React.useState<string | null>(
    null,
  );

  return (
    <div className="bg-gray-900/60 rounded-lg p-8 h-full flex flex-col gap-8">
      <div className="flex items-center gap-4">
        <MonitorSmartphoneIcon className="w-6 h-6" />
        <h2 className="text-lg font-bold">Devices</h2>
      </div>
      {/* Microphones */}
      <div className="flex flex-col gap-4">
        <h2 className="text-sm font-semibold">Microphones</h2>
        <div className="flex items-center gap-4">
          <MicIcon className="w-6 h-6" />
          <label htmlFor="device1" className="font-light">
            Built-in Microphone
          </label>
          <Button
            className={`w-24 ml-auto cursor-pointer font-normal ${
              selectedMic === "device1"
                ? "bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                : ""
            }`}
            onClick={() => setSelectedMic("device1")}
          >
            {selectedMic === "device1" ? "Selected" : "Select"}
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <MicIcon className="w-6 h-6" />
          <label htmlFor="device2" className="font-light">
            [Custom Microphone]
          </label>
          <Button
            className={`w-24 ml-auto cursor-pointer font-normal ${
              selectedMic === "device2"
                ? "bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                : ""
            }`}
            onClick={() => setSelectedMic("device2")}
          >
            {selectedMic === "device2" ? "Selected" : "Select"}
          </Button>
        </div>
      </div>

      {/* Camera */}
      <div className="flex flex-col gap-4">
        <h2 className="text-sm font-semibold">Camera</h2>
        <div className="flex items-center gap-4">
          <VideoIcon className="w-6 h-6" />
          <label htmlFor="device1" className="font-light">
            Built-in Camera
          </label>
          <Button
            className={`w-24 ml-auto cursor-pointer font-normal ${
              selectedCamera === "device1"
                ? "bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                : ""
            }`}
            onClick={() => setSelectedCamera("device1")}
          >
            {selectedCamera === "device1" ? "Selected" : "Select"}
          </Button>
        </div>
        <div className="flex items-center gap-4 ">
          <VideoIcon className="w-6 h-6" />
          <label htmlFor="device2" className="font-light">
            [Custom Camera]
          </label>
          <Button
            className={`w-24 ml-auto cursor-pointer font-normal ${
              selectedCamera === "device2"
                ? "bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                : ""
            }`}
            onClick={() => setSelectedCamera("device2")}
          >
            {selectedCamera === "device2" ? "Selected" : "Select"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeviceSelection;

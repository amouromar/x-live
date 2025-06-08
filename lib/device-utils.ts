export async function getAvailableDevices() {
  try {
    const devices = await navigator.mediaDevices.enumerateDevices();

    const cameras = devices
      .filter((device) => device.kind === "videoinput")
      .map((device) => ({
        id: device.deviceId,
        name: device.label || `Camera ${device.deviceId}`,
      }));

    const microphones = devices
      .filter((device) => device.kind === "audioinput")
      .map((device) => ({
        id: device.deviceId,
        name: device.label || `Microphone ${device.deviceId}`,
      }));

    return {
      cameras,
      microphones,
    };
  } catch (error) {
    console.error("Error getting devices:", error);
    return {
      cameras: [],
      microphones: [],
    };
  }
}

export async function getScreenCaptureSources() {
  try {
    const sources = await navigator.mediaDevices.getDisplayMedia({
      video: true,
      audio: false,
    });

    return sources.getVideoTracks();
  } catch (error) {
    console.error("Error getting screen capture sources:", error);
    return [];
  }
}

export async function getSelectedDeviceStream(
  deviceId: string,
  type: "video" | "audio",
) {
  try {
    const constraints = {
      video: type === "video" ? { deviceId: { exact: deviceId } } : false,
      audio: type === "audio" ? { deviceId: { exact: deviceId } } : false,
    };

    return await navigator.mediaDevices.getUserMedia(constraints);
  } catch (error) {
    console.error("Error getting device stream:", error);
    return null;
  }
}

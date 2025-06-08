import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen max-w-7xl mx-auto bg-black text-white">
      {/* Hero Section */}
      <div className="py-20 relative">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="flex flex-col items-center text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            X-Live
          </h2>
          <p className="text-md md:text-lg text-gray-300 mb-8 px-8 w-md md:max-w-2xl whitespace-pre-line">
            <span className="font-semibold">
              Broadcast with one-click streaming.
            </span>
            <br />
            <span className="text-gray-600">
              No software downloads, no complicated setups. Just you and your
              audience.
            </span>
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <Link href="/studio">
              <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                Go Live
              </Button>
            </Link>
            <Link href="/home">
              <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                Home
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="py-8">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/hero-image.png"
            alt="X-Live"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

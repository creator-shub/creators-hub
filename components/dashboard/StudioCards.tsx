import Link from "next/link";
import {
  Video,
  Image,
 FileText,
  ImagePlus,
  Mic2,
  Search,
} from "lucide-react";

const studios = [
  {
    title: "Video Studio",
    description: "Text to Video, Image to Video, Storyboard & Camera Builder",
    icon: Video,
    href: "/dashboard/video-studio",
    color: "hover:border-red-500",
  },
  {
    title: "Image Studio",
    description: "AI Images, Editing, Upscale & FLUX Prompts",
    icon: Image,
    href: "/dashboard/image-studio",
    color: "hover:border-blue-500",
  },
  {
    title: "Script Studio",
    description: "YouTube, Documentary & Shorts Scripts",
    icon: FileText,
    href: "/dashboard/script-studio",
    color: "hover:border-green-500",
  },
  {
    title: "Thumbnail Studio",
    description: "Thumbnail Ideas & Prompt Generator",
    icon: ImagePlus,
    href: "/dashboard/thumbnail-studio",
    color: "hover:border-pink-500",
  },
  {
    title: "Voice Studio",
    description: "Voiceovers & AI Voice Prompts",
    icon: Mic2,
    href: "/dashboard/voice-studio",
    color: "hover:border-yellow-500",
  },
  {
    title: "SEO Studio",
    description: "Titles, Descriptions, Keywords & Tags",
    icon: Search,
    href: "/dashboard/seo-studio",
    color: "hover:border-purple-500",
  },
];

export default function StudioCards() {
  return (
    <section className="mt-12">
      <h2 className="text-3xl font-bold mb-8">
        Popular Studios
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {studios.map((studio) => {
          const Icon = studio.icon;

          return (
            <Link
              key={studio.title}
              href={studio.href}
              className={`bg-zinc-900 border border-zinc-800 rounded-3xl p-7 transition duration-300 ${studio.color}`}
            >
              <div className="w-14 h-14 rounded-2xl bg-zinc-800 flex items-center justify-center">
                <Icon className="w-7 h-7 text-red-500" />
              </div>

              <h3 className="text-2xl font-bold mt-6">
                {studio.title}
              </h3>

              <p className="text-gray-400 mt-4 leading-7">
                {studio.description}
              </p>
            </Link>
          );
        })}

      </div>
    </section>
  );
}
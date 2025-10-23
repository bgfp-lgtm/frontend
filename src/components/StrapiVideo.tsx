import { getStrapiMedia } from "@/lib/utils";

interface StrapiVideoProps {
  /** The Strapi media path for the video file */
  src: string;
  /** Optional Strapi media path for a poster (thumbnail) image */
  poster?: string;
  className?: string;
  height?: number;
  width?: number;
  /** Sets the video to automatically play */
  autoPlay?: boolean;
  /** Mutes the video (often required for autoplay) */
  muted?: boolean;
  /** Loops the video */
  loop?: boolean;
  /** Shows the default video playback controls */
  controls?: boolean;
  /** Ensures video plays inline on iOS instead of defaulting to fullscreen */
  playsInline?: boolean;
}

export function StrapiVideo({ src }: Readonly<StrapiVideoProps>) {
  if (!src) return null;

  const videoUrl = getStrapiMedia(src);

  // If the URL is still null after getStrapiMedia, don't render.
  if (!videoUrl) return null;

  return (
    <video src={videoUrl} autoPlay loop muted={true} className="w-full h-full">
      {/* Fallback text for older browsers */}
      Your browser does not support the video tag.
    </video>
  );
}

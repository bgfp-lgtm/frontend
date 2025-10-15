"use client";

import React, { useEffect } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

type VideoModalProps = {
  videoUrl: string | null;
  title?: string;
  open: boolean;
  onClose: () => void;
};

export default function VideoModal({
  videoUrl,
  title,
  open,
  onClose,
}: VideoModalProps) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) {
      document.addEventListener("keydown", onKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open || !videoUrl) return null;

  const getEmbedUrl = (url: string): string | null => {
    let embedUrl: string | null = null;

    if (url.includes("youtube.com") || url.includes("youtu.be")) {
      const videoIdMatch =
        url.match(
          /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
        ) || url.match(/embed\/([^?]+)/);
      const videoId = videoIdMatch ? videoIdMatch[1] : null;
      if (videoId) {
        const params = new URLSearchParams({
          autoplay: "1",
          modestbranding: "1",
          rel: "0",
          playsinline: "1",
          enablejsapi: "1",
          mute: "0",
        });
        embedUrl = `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
      }
    } else if (url.includes("vimeo.com")) {
      const videoIdMatch = url.match(/(?:video\/|vimeo\.com\/)(\d+)/);
      const videoId = videoIdMatch ? videoIdMatch[1] : null;
      const hashMatch = url.match(/[?&]h=([^&]+)/);
      const hash = hashMatch ? hashMatch[1] : null;

      if (videoId) {
        let vimeoUrl = `https://player.vimeo.com/video/${videoId}?autoplay=1`;
        if (hash) {
          vimeoUrl += `&h=${hash}`;
        }
        embedUrl = vimeoUrl;
      }
    }

    return embedUrl;
  };

  const embedUrl = getEmbedUrl(videoUrl);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label={title || "Video modal"}
    >
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <div className="relative z-10 w-full max-w-5xl px-4">
        <div className="rounded-xl overflow-hidden shadow-2xl bg-black">
          <div className="w-full aspect-video">
            {embedUrl ? (
              <iframe
                className="w-full h-full"
                src={embedUrl}
                title={title || "Video"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            ) : (
              <video
                className="w-full h-full"
                src={videoUrl}
                title={title || "Video"}
                controls
                autoPlay
              />
            )}
          </div>
        </div>
        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute -right-2 -top-2 md:-right-3 md:-top-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-900 shadow ring-1 ring-black/10 hover:bg-gray-100"
        >
          ×
        </button>
        <a
          href={videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute right-10 -top-2 md:right-12 md:-top-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-900 shadow ring-1 ring-black/10 hover:bg-gray-100"
          aria-label="Open video in new tab"
        >
          <FaExternalLinkAlt />
        </a>
      </div>
    </div>
  );
}

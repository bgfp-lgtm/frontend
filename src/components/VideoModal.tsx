"use client";

import React, { useEffect } from "react";

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

  const isYoutubeVideo = videoUrl.includes("youtube.com/embed");

  const buildIframeSrc = (url: string) => {
    const videoIdMatch = url.match(/embed\/([^?]+)/);
    const videoId = videoIdMatch ? videoIdMatch[1] : null;
    if (!videoId) return url;

    const baseSrc = `https://www.youtube.com/embed/${videoId}`;
    const params = new URLSearchParams({
      autoplay: "1",
      modestbranding: "1",
      rel: "0",
      playsinline: "1",
      enablejsapi: "1",
      mute: "0",
    });
    return `${baseSrc}?${params.toString()}`;
  };

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
            {isYoutubeVideo ? (
              <iframe
                className="w-full h-full"
                src={buildIframeSrc(videoUrl)}
                title={title || "YouTube video"}
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
      </div>
    </div>
  );
}

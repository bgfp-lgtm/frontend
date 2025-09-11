import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { posts } from "../posts";

type Props = { params: Promise<{ slug: string }> };

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return notFound();

  return (
    <div className="w-full px-4 md:px-20 py-16">
      <div className="max-w-3xl mx-auto">
        <div className="relative w-full aspect-[16/9] mb-6 rounded-xl overflow-hidden">
          <Image src={post.image} alt={post.title} fill className="object-cover" />
        </div>
        <p className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
        <h1 className="text-3xl md:text-5xl font-bold mt-2">{post.title}</h1>
        <p className="text-gray-600 mt-4">{post.excerpt}</p>
        <div className="prose prose-neutral max-w-none mt-8">
          <p>{post.content}</p>
        </div>
      </div>
    </div>
  );
}



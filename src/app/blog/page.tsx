import React from "react";
import Link from "next/link";
import Image from "next/image";
import { posts } from "./posts";

export default function BlogPage() {
  return (
    <div className="w-full px-4 md:px-20 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold">Blog</h1>
          <p className="text-gray-600 mt-3">Insights, behind-the-scenes, and production notes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="relative w-full aspect-[16/9]">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900">{post.title}</h2>
                <p className="text-sm text-gray-500 mt-1">{new Date(post.date).toLocaleDateString()}</p>
                <p className="text-gray-700 mt-3 line-clamp-3">{post.excerpt}</p>
                <span className="mt-4 inline-flex items-center text-red-600 font-medium">Read more →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}



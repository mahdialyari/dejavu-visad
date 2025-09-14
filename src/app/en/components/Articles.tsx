"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaRegClock, FaRegCommentDots, FaRegCalendarAlt } from "react-icons/fa";

// تعریف نوع مقاله
interface Article {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  readingTime: number;
  commentsCount: number;
  createdAt: string;
}

// Fake Data (later from API)
const fakeArticles: Article[] = [
  {
    id: 1,
    title: "Complete Guide to Student Immigration",
    excerpt: "Everything you need to know about studying abroad and immigration procedures for international students.",
    image: "/images/Art/3.jpg",
    readingTime: 5,
    commentsCount: 8,
    createdAt: "2025-08-15T10:00:00Z",
  },
  {
    id: 2,
    title: "Work Visa Requirements 2024",
    excerpt: "Latest updates on work visa requirements and employment opportunities in different countries.",
    image: "/images/Art/2.jpg",
    readingTime: 4,
    commentsCount: 12,
    createdAt: "2025-08-14T09:30:00Z",
  },
  {
    id: 3,
    title: "Telegram Security Features",
    excerpt: "Discover the security features that make Telegram one of the most secure messaging platforms available.",
    image: "/images/Art/1.jpg",
    readingTime: 6,
    commentsCount: 5,
    createdAt: "2025-08-12T11:00:00Z",
  }
];

export default function Articles() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    setArticles(fakeArticles);
  }, []);

  return (
    <section
      className="relative w-full py-20"
      style={{ backgroundColor: "rgb(241,245,251)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-4">
          Blog
        </h2>
        <p className="text-center text-gray-700 mb-12">
          Stay updated with the latest topics and discussions in various fields by reading our articles.
        </p>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link
              href={`/en/articles/${article.id}`}
              key={article.id}
              className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
            >
              {/* Full-cover image */}
              <Image
                src={article.image}
                alt={article.title}
                width={400}
                height={300}
                className="w-full h-80 object-cover group-hover:scale-105 transition"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

              {/* Bottom text on card */}
              <div className="absolute bottom-0 p-4 text-white">
                <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                <p className="text-sm text-gray-200 mb-3">{article.excerpt}</p>

                <div className="flex items-center text-xs text-gray-300 gap-4">
                  <span className="flex items-center gap-1">
                    <FaRegClock /> {article.readingTime} min read
                  </span>
                  <span className="flex items-center gap-1">
                    <FaRegCommentDots /> {article.commentsCount} comments
                  </span>
                  <span className="flex items-center gap-1">
                    <FaRegCalendarAlt />{" "}
                    {new Date(article.createdAt).toLocaleDateString("en-US")}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
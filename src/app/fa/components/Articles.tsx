"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; // اضافه کردن import برای Image
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

// Fake Data (بعداً از API میاد)
const fakeArticles: Article[] = [
  {
    id: 1,
    title: "عنوان مقاله نمونه اول",
    excerpt:
      "یکی از پرطرفدارترین شبکه‌های اجتماعی در سراسر دنیا تلگرام است. این اپلیکیشن به دلیل سرعت بالا، سادگی و امنیت...",
    image: "/images/Art/3.jpg",
    readingTime: 5,
    commentsCount: 3,
    createdAt: "2025-08-15T10:00:00Z",
  },
  {
    id: 2,
    title: "عنوان مقاله نمونه دوم",
    excerpt:
      "این مقاله درباره مهاجرت تحصیلی و بررسی شرایط ادامه‌ی تحصیل در کشورهای مختلف است...",
    image: "/images/Art/2.jpg",
    readingTime: 4,
    commentsCount: 5,
    createdAt: "2025-08-14T09:30:00Z",
  },
  {
    id: 3,
    title: "عنوان مقاله نمونه سوم",
    excerpt:
      "در این مقاله به بررسی راه‌های مهاجرت کاری و شرایط دریافت ویزای کاری پرداخته‌ایم...",
    image: "/images/Art/1.jpg",
    readingTime: 6,
    commentsCount: 2,
    createdAt: "2025-08-12T11:00:00Z",
  },
];

export default function Articles() {
  const [articles, setArticles] = useState<Article[]>([]); // رفع خطا: تعیین نوع Article[]

  useEffect(() => {
    setArticles(fakeArticles);
  }, []);

  return (
    <section
      className="relative w-full py-20"
      style={{ backgroundColor: "rgb(241,245,251)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* عنوان سکشن */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-4">
          بلاگ
        </h2>
        <p className="text-center text-gray-700 mb-12">
          با مطالعه این مقالات از جدیدترین موضوعات و مباحث حوزه‌های مختلف مطلع شوید.
        </p>

        {/* کارت‌های بلاگ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link
              href={`/fa/articles/${article.id}`}
              key={article.id}
              className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
            >
              {/* عکس فول‌کاور */}
              <Image // تغییر از img به Image
                src={article.image}
                alt={article.title}
                width={400} // اضافه کردن width
                height={320} // اضافه کردن height
                className="w-full h-80 object-cover group-hover:scale-105 transition"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

              {/* متن پایین روی کارت */}
              <div className="absolute bottom-0 p-4 text-white">
                <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                <p className="text-sm text-gray-200 mb-3">{article.excerpt}</p>

                <div className="flex items-center text-xs text-gray-300 gap-4">
                  <span className="flex items-center gap-1">
                    <FaRegClock /> {article.readingTime} دقیقه
                  </span>
                  <span className="flex items-center gap-1">
                    <FaRegCommentDots /> {article.commentsCount} نظر
                  </span>
                  <span className="flex items-center gap-1">
                    <FaRegCalendarAlt />{" "}
                    {new Date(article.createdAt).toLocaleDateString("fa-IR")}
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
"use client";
import React, { useState } from "react";
import Image from "next/image"; // اضافه کردن import برای Image

// تعریف نوع پست
interface Post {
  id: number;
  title: string;
  content: string;
  image: string;
}

const BlogPage: React.FC = () => {
  // چند کارت اولیه که نشون داده میشن
  const [visible, setVisible] = useState(8); // اول 8 تا کارت نشون داده میشه
  const [openModal, setOpenModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null); // رفع خطا: تعیین نوع Post

  // نمونه لیست مقاله‌ها (بعدا از CMS میاد)
  const posts = Array.from({ length: 20 }).map((_, i) => ({
    id: i + 1,
    title: `عنوان مقاله ${i + 1}`,
    content:
      "این متن تستی مقاله است. بعدا محتوای واقعی از CMS مثل Strapi یا Sanity بارگذاری می‌شود. اینجا خلاصه بلاگ رو می‌بینی...",
    image: `/images/blog-${(i % 4) + 1}.jpg`,
  }));

  return (
    <main className="w-full flex flex-col items-center">
      {/* 🔹 Hero Section */}
      <section
        className="relative w-full max-w-[1440px] mx-auto overflow-hidden"
        style={{
          height: "301px",
          borderBottomLeftRadius: "40px",
          borderBottomRightRadius: "40px",
          background: `
            radial-gradient(circle at top left, rgba(255,255,255,0.15), transparent 40%),
            radial-gradient(circle at top right, rgba(255,255,255,0.15), transparent 40%),
            linear-gradient(180deg, #072C7D 0%, #548CFF 100%)
          `,
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none mix-blend-soft-light"
          style={{
            backgroundImage: "url('/images/bg/noise.png')",
            backgroundRepeat: "repeat",
            opacity: 0.12,
          }}
        ></div>
        <div
          className="absolute text-center"
          style={{
            width: "165px",
            height: "100px",
            top: "140px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <h1
            style={{
              fontFamily: "IRANSansX",
              fontWeight: 900,
              fontSize: "40px",
              lineHeight: "40px",
              color: "rgba(255,255,255,1)",
              marginBottom: "16px",
            }}
          >
            پایگاه دانش
          </h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
              width: "165px",
              height: "24px",
            }}
          >
            <span style={{ color: "rgba(255,255,255,0.6)" }}>صفحه اصلی</span>
            <span style={{ color: "white" }}>/</span>
            <span style={{ color: "white" }}>پایگاه دانش</span>
          </div>
        </div>
      </section>

      {/* 🔹 Blog Cards Section */}
      <section className="w-full max-w-[1335px] mx-auto px-6 mt-12 mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-[24px] gap-y-[40px]">
          {posts.slice(0, visible).map((post) => (
            <div
              key={post.id}
              onClick={() => {
                setSelectedPost(post);
                setOpenModal(true);
              }}
              className="relative rounded-[24px] overflow-hidden w-[290px] h-[430px] shadow-lg mx-auto cursor-pointer"
            >
              <Image // تغییر از img به Image
                src={post.image}
                alt={post.title}
                width={290} // اضافه کردن width
                height={430} // اضافه کردن height
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 p-4 text-white">
                <h3 className="font-bold text-base mb-1">{post.title}</h3>
                <p className="text-sm opacity-90 line-clamp-2">
                  {post.content}
                </p>
                <div className="flex items-center gap-3 mt-2 text-xs opacity-80">
                  <span>⏰ ۵ دقیقه</span>
                  <span>👁 ۱۲۳</span>
                  <span>📅 ۱ روز پیش</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* دکمه مشاهده بیشتر */}
        {visible < posts.length && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setVisible((prev) => prev + 4)}
              className="px-5 py-2 rounded-[10px] font-bold text-white text-sm"
              style={{
                background: "linear-gradient(90deg, #072C7D 0%, #548CFF 100%)",
              }}
            >
              مشاهده بیشتر
            </button>
          </div>
        )}
      </section>

      {/* 🔹 Modal نمایش مقاله */}
      {openModal && selectedPost && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="bg-white w-full max-w-2xl rounded-lg relative p-6 max-h-[90vh] overflow-y-auto">
            {/* دکمه بستن */}
            <button
              className="absolute top-4 right-4 text-gray-700 font-bold text-xl"
              onClick={() => setOpenModal(false)}
            >
              ✕
            </button>
            {/* محتوا */}
            <h2 className="text-2xl font-bold mb-4">{selectedPost.title}</h2>
            <Image // تغییر از img به Image
              src={selectedPost.image}
              alt={selectedPost.title}
              width={800} // اضافه کردن width
              height={400} // اضافه کردن height
              className="rounded-md mb-4"
            />
            <p className="text-gray-700 leading-relaxed">
              {selectedPost.content.repeat(15)} {/* متن نمونه بلند */}
            </p>
          </div>
        </div>
      )}
    </main>
  );
};

export default BlogPage;
"use client";
import React, { useState } from "react";
import Image from "next/image"; // Import Image from next/image

// تعریف interface برای نوع داده پست
interface BlogPost {
  id: number;
  title: string;
  content: string;
  image: string;
}

const BlogPage: React.FC = () => {
  const [visible, setVisible] = useState(8);
  const [openModal, setOpenModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // Sample blog posts (later will come from CMS)
  const posts = Array.from({ length: 20 }).map((_, i) => ({
    id: i + 1,
    title: `Article Title ${i + 1}`,
    content:
      "This is a sample blog text. Later real content will be loaded from CMS such as Strapi or Sanity. Here you can see the blog summary...",
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
              fontWeight: 900,
              fontSize: "40px",
              lineHeight: "40px",
              color: "rgba(255,255,255,1)",
              marginBottom: "16px",
            }}
          >
            Knowledge Base
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
            <span style={{ color: "rgba(255,255,255,0.6)" }}>Home</span>
            <span style={{ color: "white" }}>/</span>
            <span style={{ color: "white" }}>Knowledge Base</span>
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
              {/* جایگزینی img با Image - خط 93 */}
              <div className="relative w-full h-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 p-4 text-white">
                <h3 className="font-bold text-base mb-1">{post.title}</h3>
                <p className="text-sm opacity-90 line-clamp-2">
                  {post.content}
                </p>
                <div className="flex items-center gap-3 mt-2 text-xs opacity-80">
                  <span>⏰ 5 min read</span>
                  <span>👁 123 views</span>
                  <span>📅 1 day ago</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visible < posts.length && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setVisible((prev) => prev + 4)}
              className="px-5 py-2 rounded-[10px] font-bold text-white text-sm"
              style={{
                background: "linear-gradient(90deg, #072C7D 0%, #548CFF 100%)",
              }}
            >
              Load More
            </button>
          </div>
        )}
      </section>

      {/* 🔹 Modal */}
      {openModal && selectedPost && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="bg-white w-full max-w-2xl rounded-lg relative p-6 max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-700 font-bold text-xl"
              onClick={() => setOpenModal(false)}
            >
              ✕
            </button>
            {/* Content */}
            <h2 className="text-2xl font-bold mb-4">{selectedPost.title}</h2>
            {/* جایگزینی img با Image - خط 143 */}
            <Image
              src={selectedPost.image}
              alt={selectedPost.title}
              width={600}
              height={400}
              className="rounded-md mb-4"
            />
            <p className="text-gray-700 leading-relaxed">
              {selectedPost.content.repeat(15)} {/* long sample text */}
            </p>
          </div>
        </div>
      )}
    </main>
  );
};

export default BlogPage;
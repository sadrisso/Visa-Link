"use client";

import Image from "next/image";

type Blog = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
};

const blogs: Blog[] = [
  {
    id: 1,
    title: "Visa Application Tips",
    excerpt:
      "Learn the best practices for a smooth visa application process...",
    image: "https://i.ibb.co/1mVV7Pp/blog1.jpg",
  },
  {
    id: 2,
    title: "Documents You Need",
    excerpt: "A checklist of essential documents for your visa journey...",
    image: "https://i.ibb.co/bRsrtfF/blog2.jpg",
  },
  {
    id: 3,
    title: "Avoid Common Mistakes",
    excerpt:
      "Stay aware of the top mistakes applicants make and how to avoid them...",
    image: "https://i.ibb.co/tc8wnB4/blog3.jpg",
  },
];

const Blog = () => {
  return (
    <section className="py-12 px-6 lg:px-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">Our Blogs</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative w-full h-48">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {blog.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{blog.excerpt}</p>
              <button className="text-blue-600 font-medium hover:underline">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;

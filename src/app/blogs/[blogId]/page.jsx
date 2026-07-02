import React from 'react';
import Link from 'next/link';
const blogs = [
  {
    id: 1,
    title: "The Importance of Extracurricular Activities in School Life",
    slug: "importance-of-extracurricular-activities",
    description: "Discover how sports, arts, and clubs help students build leadership skills, confidence, and teamwork outside the classroom.",
    author: "Mst. Rokeya Khanam",
    date: "June 20, 2026",
    category: "Education",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754" 
  },
  {
    id: 2,
    title: "How to Prepare for Your Upcoming Final Examinations",
    slug: "how-to-prepare-for-exams",
    description: "A complete guide for students containing effective study techniques, time management tips, and stress relief advice.",
    author: "Mr. Tanvir Rahman",
    date: "June 18, 2026",
    category: "Study Tips",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173" 
  },
  {
    id: 3,
    title: "Introducing Digital Classrooms: The Future of Learning",
    slug: "introducing-digital-classrooms",
    description: "An overview of how our school is integrating multimedia projectors and modern technologies to make everyday lessons exciting.",
    author: "Dr. Ahsan Habib",
    date: "June 15, 2026",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3" 
  },
  {
    id: 4,
    title: "Tips for Parents: Supporting Your Child's Mental Health",
    slug: "tips-for-parents-mental-health",
    description: "Simple yet powerful habits and communication strategies parents can practice to ensure their child's mental well-being.",
    author: "Sarah Ahmed (Counselor)",
    date: "June 10, 2026",
    category: "Parenting",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e" 
  }
];

const BlogDetails = async({params}) => {
    const { blogId }=await params;
    const blog=blogs.find(blog=>blog.id===parseInt(blogId));
    console.log(blog);

    return (
        <div>
            {blog&&           
            <div className="hero bg-base-200 min-h-screen">
              <div className="hero-content flex-col lg:flex-row-reverse">
             <img src={blog.image} className="max-w-sm rounded-lg shadow-2xl"/>
      <div>
      <h1 className="text-5xl font-bold">{blog.title}</h1>
      <p className="py-6">{blog.description}<br/>
      AUTHOR:{blog.author} <br/>
      DATE: {blog.date}</p>
    <Link href="/blogs"><button className="btn btn-primary">Go Back</button></Link>
      </div>
   </div></div>
            }
        </div>
    );
};

export default BlogDetails;
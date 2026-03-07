import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { BLOG_POSTS } from "../constants";
import { Calendar, User, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function BlogList({ isAr }: { isAr: boolean }) {
  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {isAr ? "مدونة ريف" : "Reef Blog"}
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {isAr 
              ? "ابقَ على اطلاع بأحدث الاتجاهات والابتكارات في عالم الهندسة والتصميم."
              : "Stay updated with the latest trends and innovations in the world of engineering and design."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col"
            >
              <Link to={`/blog/${post.id}`} className="aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </Link>
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
                  <span className="bg-emerald-50 text-emerald-600 px-2 py-1 rounded font-bold uppercase tracking-wider">
                    {isAr ? post.categoryAr : post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors">
                  <Link to={`/blog/${post.id}`}>
                    {isAr ? post.titleAr : post.title}
                  </Link>
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                  {isAr ? post.excerptAr : post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                    <User size={14} className="text-emerald-600" />
                    <span>{isAr ? post.authorAr : post.author}</span>
                  </div>
                  <Link 
                    to={`/blog/${post.id}`} 
                    className="text-emerald-600 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all"
                  >
                    {isAr ? "اقرأ المزيد" : "Read More"}
                    {isAr ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

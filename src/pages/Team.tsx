import { motion } from "framer-motion";
import { TEAM } from "../constants";
import { Mail, Linkedin, Twitter } from "lucide-react";

export default function Team({ isAr }: { isAr: boolean }) {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-slate-900 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
            alt="" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6"
          >
            {isAr ? "فريقنا الهندسي" : "Our Engineering Team"}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            {isAr 
              ? "نخبة من المهندسين والمستشارين الملتزمين بالتميز والابتكار في كل مشروع."
              : "A group of elite engineers and consultants committed to excellence and innovation in every project."}
          </motion.p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {TEAM.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative mb-6 overflow-hidden rounded-2xl aspect-[4/5]">
                  <img 
                    src={member.image} 
                    alt={isAr ? member.nameAr : member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                    <div className="flex gap-4">
                      <a href="#" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary-600 transition-colors">
                        <Linkedin size={20} />
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary-600 transition-colors">
                        <Twitter size={20} />
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary-600 transition-colors">
                        <Mail size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">
                    {isAr ? member.nameAr : member.name}
                  </h3>
                  <p className="text-primary-700 font-bold mb-4">
                    {isAr ? member.roleAr : member.role}
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    {isAr ? member.bioAr : member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            {isAr ? "هل ترغب في الانضمام إلى فريقنا؟" : "Want to join our team?"}
          </h2>
          <p className="text-lg text-slate-600 mb-10">
            {isAr 
              ? "نحن دائماً نبحث عن المواهب الهندسية المتميزة للانضمام إلى رحلتنا في التميز."
              : "We are always looking for exceptional engineering talent to join our journey of excellence."}
          </p>
          <a 
            href="/contact" 
            className="inline-flex px-10 py-4 bg-primary-700 text-white rounded-lg font-bold hover:bg-primary-800 transition-all shadow-lg shadow-primary-700/20"
          >
            {isAr ? "تواصل معنا" : "Contact Us"}
          </a>
        </div>
      </section>
    </div>
  );
}

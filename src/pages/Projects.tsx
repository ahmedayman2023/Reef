import { motion } from "motion/react";
import { PROJECTS } from "../constants";

export default function ProjectsPage({ isAr }: { isAr: boolean }) {
  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {isAr ? "مشاريعنا المتميزة" : "Our Featured Projects"}
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {isAr 
              ? "استعرض مجموعة مختارة من أعمالنا التي تعكس التزامنا بالجودة والابتكار في كل تفصيلة هندسية."
              : "Explore a selection of our work that reflects our commitment to quality and innovation in every engineering detail."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <span className="text-emerald-600 text-xs font-bold uppercase tracking-widest mb-2 block">
                  {isAr ? project.categoryAr : project.category}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {isAr ? project.titleAr : project.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {isAr ? project.descriptionAr : project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

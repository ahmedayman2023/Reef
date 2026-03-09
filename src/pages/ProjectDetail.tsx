import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { PROJECTS } from "../constants";
import { 
  MapPin, 
  Calendar, 
  Maximize2, 
  Activity, 
  ArrowRight, 
  ArrowLeft, 
  ChevronRight, 
  ChevronLeft,
  CheckCircle2,
  ShieldCheck
} from "lucide-react";
import { useEffect } from "react";

export default function ProjectDetail({ isAr }: { isAr: boolean }) {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find((p) => p.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            {isAr ? "المشروع غير موجود" : "Project Not Found"}
          </h1>
          <Link to="/projects" className="text-primary-700 font-bold hover:underline">
            {isAr ? "العودة للمشاريع" : "Back to Projects"}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-3 py-1 bg-primary-700 text-white text-xs font-bold uppercase tracking-widest rounded-full">
                {isAr ? project.categoryAr : project.category}
              </span>
              <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest rounded-full border border-white/30">
                {isAr ? project.statusAr : project.status}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {isAr ? project.titleAr : project.title}
            </h1>
            <div className="flex flex-wrap gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-primary-400" />
                <span>{isAr ? project.locationAr : project.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-primary-400" />
                <span>{project.year}</span>
              </div>
              <div className="flex items-center gap-2">
                <Maximize2 size={18} className="text-primary-400" />
                <span>{project.area}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Left Column: Description & Results */}
            <div className="lg:col-span-2 space-y-16">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  {isAr ? "نظرة عامة على المشروع" : "Project Overview"}
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {isAr ? project.descriptionAr : project.description}
                </p>
              </div>

              {project.gallery && (
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-8">
                    {isAr ? "معرض الصور" : "Project Gallery"}
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    {project.gallery.map((img, i) => (
                      <div key={i} className={`overflow-hidden rounded-2xl ${i === 0 ? 'col-span-2 aspect-video' : 'aspect-square'}`}>
                        <img 
                          src={img} 
                          alt={`${project.title} ${i}`} 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {project.results && (
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-8">
                    {isAr ? "النتائج والنجاحات" : "Results & Achievements"}
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {project.resultsAr && isAr ? (
                      project.resultsAr.map((result, i) => (
                        <div key={i} className="flex items-start gap-4 p-6 bg-primary-50 rounded-2xl border border-primary-100">
                          <CheckCircle2 className="text-primary-700 shrink-0 mt-1" size={24} />
                          <span className="text-slate-800 font-medium">{result}</span>
                        </div>
                      ))
                    ) : (
                      project.results?.map((result, i) => (
                        <div key={i} className="flex items-start gap-4 p-6 bg-primary-50 rounded-2xl border border-primary-100">
                          <CheckCircle2 className="text-primary-700 shrink-0 mt-1" size={24} />
                          <span className="text-slate-800 font-medium">{result}</span>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Supervisor & Sidebar */}
            <div className="lg:col-span-1 space-y-12">
              {/* Supervisor Profile */}
              {project.supervisor && (
                <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-sm">
                  <div className="flex items-center gap-4 mb-6">
                    <img 
                      src={project.supervisor.image} 
                      alt={project.supervisor.name} 
                      className="w-20 h-20 rounded-2xl object-cover shadow-md"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="text-xl font-bold text-slate-900">
                        {isAr ? project.supervisor.nameAr : project.supervisor.name}
                      </h4>
                      <p className="text-primary-700 font-medium text-sm">
                        {isAr ? project.supervisor.roleAr : project.supervisor.role}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <p className="text-slate-600 text-sm leading-relaxed italic">
                      "{isAr ? project.supervisor.bioAr : project.supervisor.bio}"
                    </p>
                    
                    <div>
                      <h5 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <ShieldCheck size={18} className="text-primary-700" />
                        {isAr ? "التحديات التي تم حلها" : "Challenges Solved"}
                      </h5>
                      <ul className="space-y-3">
                        {(isAr ? project.supervisor.challengesSolvedAr : project.supervisor.challengesSolved)?.map((challenge, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-1.5 shrink-0"></div>
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Project Stats Sidebar */}
              <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-xl">
                <h4 className="text-xl font-bold mb-6">{isAr ? "تفاصيل إضافية" : "Project Details"}</h4>
                <div className="space-y-6">
                  <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="text-white/50 text-sm">{isAr ? "الموقع" : "Location"}</span>
                    <span className="font-medium">{isAr ? project.locationAr : project.location}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="text-white/50 text-sm">{isAr ? "السنة" : "Year"}</span>
                    <span className="font-medium">{project.year}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="text-white/50 text-sm">{isAr ? "المساحة" : "Area"}</span>
                    <span className="font-medium">{project.area}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/50 text-sm">{isAr ? "الحالة" : "Status"}</span>
                    <span className="text-primary-400 font-bold">{isAr ? project.statusAr : project.status}</span>
                  </div>
                </div>
                
                <Link 
                  to="/contact" 
                  className="mt-8 w-full py-4 bg-primary-700 hover:bg-primary-800 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary-700/20"
                >
                  {isAr ? "استفسر عن مشروع مماثل" : "Inquire About Similar Project"}
                  {isAr ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link 
            to="/projects" 
            className="flex items-center gap-2 text-slate-600 font-bold hover:text-primary-700 transition-colors"
          >
            {isAr ? <ArrowRight size={20} /> : <ArrowLeft size={20} />}
            {isAr ? "العودة للمشاريع" : "Back to Projects"}
          </Link>
          
          <div className="flex gap-4">
            {PROJECTS.find(p => p.id === project.id - 1) && (
              <Link to={`/projects/${project.id - 1}`} className="p-3 rounded-full border border-slate-200 hover:bg-slate-50 transition-all">
                {isAr ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
              </Link>
            )}
            {PROJECTS.find(p => p.id === project.id + 1) && (
              <Link to={`/projects/${project.id + 1}`} className="p-3 rounded-full border border-slate-200 hover:bg-slate-50 transition-all">
                {isAr ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

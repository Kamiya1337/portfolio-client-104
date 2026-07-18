import { ArrowRight, FileCheck2, GraduationCap, Contact, School } from 'lucide-react';
import { motion } from 'framer-motion';
 
const headlineWords = ['French', 'Language', '&', 'Culture', 'Learning', 'Portfolio'];
 
export default function Hero({ student, setActiveTab }) {
  return (
    <section className="px-5 pb-20 pt-12 sm:px-8 md:pt-16 xl:px-16 xl:pb-28">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-10">
          <div className="lg:col-span-7 xl:col-span-8">
            <motion.p className="editorial-label" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>Academic Year {student.academicYear}</motion.p>
            <h1 className="mt-6 max-w-5xl font-display text-[clamp(3.5rem,8.8vw,8.8rem)] font-medium leading-[0.88] tracking-[-0.025em] text-charcoal">
              {headlineWords.map((word, index) => (
                <motion.span
                  key={word}
                  className="mr-[0.18em] inline-block"
                  initial={{ opacity: 0, y: 38, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ delay: index * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>
            <div className="mt-10 max-w-4xl space-y-3" aria-hidden="true">
              <div className="h-px w-full bg-border-light" />
              <div className="h-px w-2/3 bg-border-light opacity-70" />
              <div className="h-px w-1/3 bg-border-light opacity-40" />
            </div>
            <motion.div
              className="glass-panel mt-12 max-w-3xl overflow-hidden rounded-[2rem] p-8 sm:p-10"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.65 }}
            >
              <p className="font-display text-3xl font-medium leading-snug sm:text-4xl">Portfolio môn Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} type="button" onClick={() => setActiveTab('projects')} className="button-light">Mục bài tập <ArrowRight size={16} /></motion.button>
                <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} type="button" onClick={() => setActiveTab('evidence')} className="button-dark-outline">Minh chứng <FileCheck2 size={16} /></motion.button>
              </div>
            </motion.div>
          </div>
 
          <motion.aside
            className="glass-panel relative h-fit overflow-hidden rounded-[2.75rem] p-5 lg:col-span-5 lg:self-start xl:col-span-4"
            initial={{ opacity: 0, x: 36, rotate: 1.5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8, rotate: -0.6 }}
          >
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-tertiary-blue/70 blur-3xl" aria-hidden="true" />
            <img
              className="relative aspect-[4/5] w-full rounded-[2.1rem] object-cover object-center shadow-glow"
              src="/avatar-dinh-thai-son.jpg"
              alt={`${student.name} portfolio hero avatar`}
              aria-label={`${student.name} portfolio hero media`}
            />
            
            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="flex min-h-[6rem] flex-col justify-between rounded-2xl border border-white/60 bg-white/50 p-4 shadow-sm backdrop-blur-md">
                <GraduationCap size={18} className="text-charcoal" />
                <div className="mt-3">
                  <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-muted-dark">Owner</p>
                  <p className="mt-1 text-[11px] font-bold leading-tight text-charcoal">{student.name}</p>
                </div>
              </div>
              
              <div className="flex min-h-[6rem] flex-col justify-between rounded-2xl border border-white/60 bg-white/50 p-4 shadow-sm backdrop-blur-md">
                <Contact size={18} className="text-charcoal" />
                <div className="mt-3">
                  <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-muted-dark">Student ID</p>
                  <p className="mt-1 text-[11px] font-bold leading-tight text-charcoal">{student.id}</p>
                </div>
              </div>
 
              <div className="flex min-h-[6rem] flex-col justify-between rounded-2xl border border-white/60 bg-white/50 p-4 shadow-sm backdrop-blur-md">
                <School size={18} className="text-charcoal" />
                <div className="mt-3">
                  <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-muted-dark">School</p>
                  <p className="mt-1 text-[11px] font-bold leading-tight text-charcoal">{student.shortUniversity}</p>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

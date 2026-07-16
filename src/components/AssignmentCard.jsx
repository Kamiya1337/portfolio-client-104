import { ArrowRight, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
 
const isAvailable = (value) => Boolean(value && value !== 'Sẽ cập nhật sau' && value !== 'Không yêu cầu');
 
export default function AssignmentCard({ project, onSelect }) {
  return (
    <motion.article className="glass-card group relative flex h-full min-h-[24rem] flex-col overflow-hidden rounded-[2rem] p-6" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }} whileHover={{ y: -8, scale: 1.01 }}>
      <span className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-primary-mint/70 blur-3xl transition duration-500 group-hover:scale-125" aria-hidden="true" />
      <div className="flex items-center justify-between gap-3">
        <span className="dark-label-box">Assignment {String(project.id).padStart(2, '0')}</span>
        <span className="text-xs text-muted-dark">{project.chapter}</span>
      </div>
      <h2 className="relative mt-8 font-display text-3xl font-medium leading-9 tracking-[-0.02em]">{project.title}</h2>
      <p className="mt-4 text-sm leading-7 text-muted-dark">{project.shortDesc}</p>
      <div className="mt-6 flex flex-wrap gap-2">{project.skills?.slice(0, 3).map((skill) => <span key={skill} className="rounded-full border border-white/60 bg-white/35 px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-[0.08em] text-muted-dark backdrop-blur-xl">{skill}</span>)}</div>
      <div className="mt-auto pt-7">
        {isAvailable(project.report) ? <a href={project.report} target="_blank" rel="noreferrer" className="card-resource-link"><FileText size={13} /> Report</a> : <span className="card-resource-link opacity-50">Report pending</span>}
      </div>
      <button type="button" onClick={() => onSelect(project)} className="mt-4 flex min-h-12 items-center justify-between rounded-full bg-charcoal px-5 text-[11px] font-extrabold uppercase tracking-[0.12em] text-white transition duration-200 hover:-translate-y-0.5 hover:bg-primary active:scale-[0.98]">View Case Study <ArrowRight size={16} /></button>
    </motion.article>
  );
}

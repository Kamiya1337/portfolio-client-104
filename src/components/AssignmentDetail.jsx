import { createPortal } from 'react-dom';
import { ArrowLeft, ExternalLink, FileText, X } from 'lucide-react';

export default function AssignmentDetail({ project, onBack, previewData, onPreview, onClosePreview }) {
  return (
    <div className="min-h-screen px-5 py-10 sm:px-8 xl:px-16 xl:py-16">
      {previewData.isOpen && createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-charcoal/55 p-3 backdrop-blur-md sm:p-6" role="dialog" aria-modal="true" aria-label="Xem trước minh chứng">
          <div className="glass-panel flex h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-[2rem]">
            <div className="flex items-center justify-between border-b border-border-light px-5 py-4"><div><p className="editorial-label">Preview</p><h3 className="mt-1 font-display text-2xl font-medium">{previewData.type === 'pdf' ? 'Báo cáo PDF' : 'Ảnh minh chứng'}</h3></div><div className="flex items-center gap-2"><a href={previewData.url} target="_blank" rel="noreferrer" className="button-secondary">Mở thẻ mới</a><button type="button" aria-label="Đóng xem trước" onClick={onClosePreview} className="icon-button-dark"><X size={18} /></button></div></div>
            <div className="flex min-h-0 flex-1 items-center justify-center overflow-auto bg-white/45 p-4">{previewData.type === 'pdf' ? <iframe src={previewData.url} title="PDF Preview" className="h-full w-full rounded-2xl border-0 bg-white" /> : <img src={previewData.url} alt="Minh chứng" className="max-h-full max-w-full rounded-2xl object-contain" />}</div>
          </div>
        </div>,
        document.body
      )}
 
      <button type="button" onClick={onBack} className="button-secondary"><ArrowLeft size={17} /> Quay lại danh sách</button>
      <article className="glass-panel mx-auto mt-8 max-w-[1280px] overflow-hidden rounded-[2.5rem]">
        <header className="grid gap-8 border-b border-border-light p-7 lg:grid-cols-12 lg:p-12">
          <div className="lg:col-span-3"><p className="editorial-label">Assignment {String(project.id).padStart(2, '0')}</p><p className="mt-2 text-sm text-muted-dark">{project.chapter}</p></div>
          <div className="lg:col-span-8"><h1 className="font-display text-[clamp(2.5rem,5vw,5rem)] font-medium leading-[0.98] tracking-[-0.02em]">{project.title}</h1><p className="mt-6 max-w-3xl text-base leading-8 text-muted-dark">{project.shortDesc}</p></div>
        </header>
        <div className="grid gap-px bg-border-light lg:grid-cols-2"><section className="bg-white/35 p-7 lg:p-10"><p className="editorial-label">Mục tiêu nhiệm vụ</p><p className="mt-5 text-base leading-8">{project.target}</p></section><section className="bg-white/35 p-7 lg:p-10"><p className="editorial-label">Kỹ năng áp dụng</p><p className="mt-5 text-base italic leading-8">{project.skills?.join(', ')}</p></section></div>
        <section className="border-t border-border-light p-7 lg:p-12"><p className="editorial-label">Quá trình thực hiện</p><p className="mt-6 max-w-4xl text-base leading-8">{project.process}</p></section>
        <section className="border-t border-border-light p-7 lg:p-12">
          <p className="editorial-label">Sản phẩm & Minh chứng</p>
          <div className="mt-6">
            <div className="glass-panel flex flex-col justify-between gap-6 rounded-[2rem] p-6 sm:flex-row sm:items-center">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-mint/70 text-primary">
                  <FileText size={22} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-medium text-charcoal">Báo cáo bài tập hoàn thiện</h3>
                  <p className="mt-1 text-xs text-muted-dark">Định dạng tài liệu học thuật PDF/Word chứa nội dung chi tiết bài làm.</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                {(!project.report || project.report === 'Sẽ cập nhật sau') ? (
                  <span className="status-muted">Sẽ cập nhật sau</span>
                ) : project.report === 'Không yêu cầu' ? (
                  <span className="status-muted">Không yêu cầu</span>
                ) : (
                  <a 
                    href={project.report} 
                    onClick={(event) => onPreview(event, project.report, 'pdf')} 
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-charcoal px-5 py-2.5 text-[10px] font-extrabold uppercase tracking-[0.1em] text-white transition duration-200 hover:bg-primary"
                  >
                    Xem báo cáo <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}

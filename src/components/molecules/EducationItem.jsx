/**
 * A single entry in the education timeline (degree + university + period).
 *
 * @param {{degree: string, university: string, period: string}} education
 */
export default function EducationItem({ education }) {
  return (
    <div className="relative pl-6 border-l-2 border-slate-700 pb-2 last:pb-0">
      <div className="absolute w-3 h-3 bg-cyan-400 rounded-full -left-[7px] top-1.5 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
      <h4 className="text-white font-medium">{education.degree}</h4>
      <p className="text-cyan-400 text-sm mt-1">{education.university}</p>
      <p className="text-slate-500 text-sm mt-1">{education.period}</p>
    </div>
  );
}

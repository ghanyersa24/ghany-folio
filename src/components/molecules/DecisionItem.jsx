/**
 * A "key decision" Q&A pair inside a case study.
 *
 * @param {{q: string, a: string}} decision
 */
export default function DecisionItem({ decision }) {
  return (
    <div className="border-l-2 border-violet-500/30 pl-4 py-1">
      <p className="text-slate-200 text-sm font-medium mb-1">{decision.q}</p>
      <p className="text-slate-400 text-sm leading-relaxed">{decision.a}</p>
    </div>
  );
}

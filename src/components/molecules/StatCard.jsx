import { Card } from '../atoms';

/**
 * A single hero metric (value + label + English sub-label).
 *
 * @param {{value: string, label: string, sub: string}} stat
 */
export default function StatCard({ stat }) {
  return (
    <Card variant="muted" hover className="p-4 rounded-xl">
      <div className="text-3xl font-extrabold text-white">{stat.value}</div>
      <div className="text-xs text-slate-300 mt-1 font-medium">{stat.label}</div>
      <div className="text-[11px] text-slate-500 font-mono">{stat.sub}</div>
    </Card>
  );
}

import { Code2 } from 'lucide-react';
import { Card, TechTag } from '../atoms';

/**
 * One category in the technical-skills grid.
 *
 * @param {{category: string, items: string[]}} skill
 */
export default function SkillCard({ skill }) {
  return (
    <Card variant="dark" hover className="p-6 shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <Code2 className="w-6 h-6 text-cyan-400" />
        <h3 className="text-lg font-bold text-white">{skill.category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skill.items.map((item) => (
          <TechTag key={item} tone="slate">
            {item}
          </TechTag>
        ))}
      </div>
    </Card>
  );
}

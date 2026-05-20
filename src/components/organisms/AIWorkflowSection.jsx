import { Bot, Lightbulb } from 'lucide-react';
import { Card, Container, Section, SectionHeading } from '../atoms';
import { FeatureCard } from '../molecules';
import { aiWorkflowItems } from '../../data';

/** "AI-Augmented Workflow" — how AI is used as leverage, plus a philosophy note. */
export default function AIWorkflowSection() {
  return (
    <Section id="ai-workflow" bordered className="bg-slate-900/30">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="AI-Augmented Workflow"
          eyebrowIcon={Bot}
          title="AI sebagai Leverage, Bukan Pengganti Judgment"
          description="Menulis kode kini komoditas. Yang tidak tergantikan adalah engineer yang bisa mengarahkan AI dengan konteks bisnis, mereview hasilnya dengan kritis, dan tahu kapan tidak menggunakannya. Begini cara saya bekerja sehari-hari."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {aiWorkflowItems.map((item) => (
            <FeatureCard key={item.title} item={item} />
          ))}
        </div>

        <Card variant="dark" className="bg-slate-950/60 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="hidden sm:flex w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 items-center justify-center flex-shrink-0">
              <Lightbulb className="w-6 h-6 text-violet-300" />
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Filosofi saya soal AI</h3>
              <p className="text-slate-400 leading-relaxed">
                AI bagus untuk <em>menulis kode</em>. Tapi yang membuat produk berhasil bukan
                kode - melainkan <strong className="text-slate-200">keputusan</strong>: kapan
                refactor, kapan tidak; kapan multi-tenant, kapan monolith; fitur mana yang
                dipotong demi rilis. Itu yang saya bawa ke meja, dan itu yang membuat tim &amp;
                klien saya tetap percaya di tengah gempuran AI.
              </p>
            </div>
          </div>
        </Card>
      </Container>
    </Section>
  );
}

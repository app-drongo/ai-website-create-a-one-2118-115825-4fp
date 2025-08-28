import Herohomepage from '@/components/Herohomepage';
import Services from '@/components/Services';
import Abouthomepage from '@/components/Abouthomepage';
import Contacthomepage from '@/components/Contacthomepage';
import Cta from '@/components/Cta';

export default function HomepagePage() {
  return (
    <main className="min-h-screen">
      <section id="section-0" className="scroll-mt-16">
        <Herohomepage />
      </section>
      <section id="section-1" className="scroll-mt-16">
        <Services />
      </section>
      <section id="section-2" className="scroll-mt-16">
        <Abouthomepage />
      </section>
      <section id="section-3" className="scroll-mt-16">
        <Contacthomepage />
      </section>
      <section id="section-4" className="scroll-mt-16">
        <Cta />
      </section>
    </main>
  );
}
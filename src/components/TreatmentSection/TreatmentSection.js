import TreatmentHeader from './TreatmentHeader';
import TreatmentCures from './TreatmentCures';
import TreatmentRecipes from './TreatmentRecipes';
import TreatmentRemedies from './TreatmentRemedies';
import TreatmentSchedule from './TreatmentSchedule';

export default function TreatmentSection() {
  return (
    <section id="treatment-guide" className="mt-12 pt-8 border-t border-gray-200 scroll-mt-20">
      <TreatmentHeader />
      <TreatmentCures />
      <TreatmentRecipes />
      <TreatmentRemedies />
      <TreatmentSchedule />
    </section>
  );
}

// src/app/page.js
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import SequencerDemo from '@/components/SequencerDemo'; // Компонент-заглушка
import ComparisonSection from '@/components/ComparisonSection';
import OffersComparisonSection from '@/components/OffersComparisonSection'; // <-- Добавлен импорт
import TargetAudienceSection from '@/components/TargetAudienceSection';
import SocialProofSection from '@/components/SocialProofSection';
import PricingSection from '@/components/PricingSection';
import FaqSection from '@/components/FaqSection';
import AboutUsSection from '@/components/AboutUsSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <SequencerDemo /> {/* Разместите где считаете нужным, например, после "Как это работает" */}
      <ComparisonSection />
      <OffersComparisonSection />
      <TargetAudienceSection />
      <SocialProofSection />
      <PricingSection />
      <FaqSection />
      <AboutUsSection />
    </>
  );
}
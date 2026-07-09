import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExperienceCard } from "@/components/sections/ExperienceCard";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section className="bg-white pt-32 pb-20 sm:pt-40 sm:pb-28">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Where I've made an impact"
          description="A snapshot of the role, outcomes, and technologies behind my work."
        />

        <div className="mt-14 space-y-8">
          {experience.map((item) => (
            <ExperienceCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}

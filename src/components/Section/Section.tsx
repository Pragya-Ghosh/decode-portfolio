export default function Section({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <section 
      id={id} 
      // Adjusted mobile scroll margin slightly higher because the stacked mobile navbar is taller
      className="mx-auto my-12 w-full max-w-[1200px] scroll-mt-[120px] px-section-x md:my-32 md:scroll-mt-[100px] last-of-type:my-16 last-of-type:md:my-28"
    >
      {children}
    </section>
  );
}
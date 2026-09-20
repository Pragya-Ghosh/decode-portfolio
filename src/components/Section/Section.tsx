export default function Section({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <section 
      id={id} 
      // Added scroll-mt-[100px] to prevent the fixed navbar from overlapping section titles
      className="mx-auto my-20 w-full max-w-6xl scroll-mt-[100px] px-section-x md:my-32 last-of-type:my-24 last-of-type:md:my-28"
    >
      {children}
    </section>
  );
}
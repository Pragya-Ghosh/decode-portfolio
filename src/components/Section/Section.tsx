export default function Section({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <section 
      id={id} 
      className="mx-auto my-12 w-full max-w-[1200px] scroll-mt-[120px] px-2 sm:px-4 md:my-32 md:scroll-mt-[100px] md:px-section-x last-of-type:my-16 last-of-type:md:my-28"
    >
      {children}
    </section>
  );
}
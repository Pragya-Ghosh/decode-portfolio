export default function Section({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <section 
      id={id} 
      className="mx-auto my-20 md:my-32 last-of-type:my-8 last-of-type:md:my-24 w-full max-w-6xl px-section-x"
    >
      {children}
    </section>
  );
}
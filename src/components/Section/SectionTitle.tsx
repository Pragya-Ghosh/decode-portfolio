import React from 'react';

export default function SectionTitle({
  children,
  variant = 'default',
  as: Component = 'h2', 
}: {
  children: React.ReactNode;
  variant?: 'hero' | 'default';
  as?: React.ElementType;
}) {
  const baseClasses = "text-accent-dark font-black tracking-[-1px] flex items-center";
  
  const variantClasses = {
    hero: "text-[clamp(3rem,6vw,4.5rem)] leading-[1.5] mt-[50px] mb-[70px]",
    default: "text-[clamp(1.8rem,3.5vw,2.8rem)] leading-[1.2] mb-[48px] pb-[16px] border-b-2 border-border",
  };

  return (
    <Component 
      className={`${baseClasses} ${variantClasses[variant]}`}
      style={{ wordSpacing: '8px' }}
    >
      {children}
    </Component>
  );
}
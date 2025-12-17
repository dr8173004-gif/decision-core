import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="container">
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
}

export function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-10 md:mb-12">
      {label && (
        <span className="inline-block text-xs font-semibold tracking-wider uppercase text-primary mb-3">
          {label}
        </span>
      )}
      <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
      {description && (
        <p className="text-muted-foreground leading-relaxed max-w-2xl">{description}</p>
      )}
    </div>
  );
}

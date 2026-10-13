import type { ReactNode } from "react";
export function SectionHeading({
  id,
  eyebrow,
  children,
  description,
  className = "",
}: {
  id: string;
  eyebrow: string;
  children: ReactNode;
  description?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`section-heading ${className}`}>
      <div className="section-heading-main">
        <p className="eyebrow">{"// "}{eyebrow}</p>
        <h2 id={id}>{children}</h2>
      </div>
      {description && <div className="section-description">{description}</div>}
    </div>
  );
}

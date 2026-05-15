"use client";

type AnimatedHeroTitleProps = {
  text: string;
  className?: string;
};

/**
 * Staggered word reveal for the hero headline (CSS `hero-word` + delays).
 */
export function AnimatedHeroTitle({ text, className = "" }: AnimatedHeroTitleProps) {
  const words = text.trim().split(/\s+/).filter(Boolean);

  return (
    <h1
      className={`hero-title-glow flex max-w-3xl flex-wrap gap-x-[0.28em] gap-y-1 font-serif text-3xl font-bold leading-[1.08] tracking-tight sm:text-4xl sm:leading-[1.06] lg:text-[2.75rem] lg:leading-[1.05] ${className}`.trim()}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="hero-word inline-block will-change-[opacity,transform]"
          style={{ animationDelay: `${140 + i * 48}ms` }}
        >
          {word}
        </span>
      ))}
    </h1>
  );
}

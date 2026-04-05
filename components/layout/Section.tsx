import { cn } from '@/lib/utils';

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
};

export function Section({ id, children, className, containerClassName }: SectionProps) {
  return (
    <section
      id={id}
      className={cn('py-20 md:py-24 scroll-mt-24', className)}
    >
      <div className={cn('max-w-7xl mx-auto px-6', containerClassName)}>{children}</div>
    </section>
  );
}


type HeaderProgressProps = {
  progress: number;
  scrolled: boolean;
};

export default function HeaderProgress({
  progress,
  scrolled,
}: HeaderProgressProps) {
  return (
    <div
      aria-hidden
      className="absolute right-0 backdrop:blur-2xl  bottom-0 h-0.5 bg-primary transition-[width] duration-150"
      style={{ width: `${progress}%`, opacity: scrolled ? 1 : 0 }}
    />
  );
}

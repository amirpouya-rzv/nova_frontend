// components/layout/Footer/FooterFeatures.tsx
import { features } from "@/constants/footerData";

export default function FooterFeatures() {
  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {features.map((item) => (
        <div
          key={item.title}
          className="flex items-center gap-3 rounded-2xl border border-border bg-card/60 p-4 transition-colors hover:border-primary/40"
        >
          <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <item.icon size={20} />
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-bold text-foreground">{item.title}</p>
            <p className="truncate text-xs text-muted-foreground">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
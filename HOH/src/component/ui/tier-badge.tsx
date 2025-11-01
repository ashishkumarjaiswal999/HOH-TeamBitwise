import { cn } from "@/lib/utils";

interface TierBadgeProps {
  tier: "A" | "B";
  className?: string;
}

export function TierBadge({ tier, className }: TierBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold",
        tier === "A"
          ? "bg-tier-a-light text-tier-a border-2 border-tier-a/30"
          : "bg-tier-b-light text-tier-b border-2 border-tier-b/30",
        className
      )}
    >
      <span className="text-xs">●</span>
      Tier {tier}
    </span>
  );
}

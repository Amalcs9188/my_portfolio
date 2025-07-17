 import { cn } from "@/lib/utils";
 export const GradientText = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => (
    <span
      className={cn(
        "bg-gradient-to-r from-primary via-rose-400 to-rose-300 bg-clip-text text-transparent dark:from-primary dark:via-rose-300 dark:to-red-400",
        className
      )}>
      {children}
    </span>
  );

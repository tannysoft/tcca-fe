import Link from "next/link";

type Variant = "primary" | "white" | "icon" | "icon-white";

const variantMap: Record<
  Variant,
  { src: string; ratio: number; className: string }
> = {
  // full lockup (tcca + "Thailand Content Creator Associaton")
  primary: {
    src: "/img/logo.svg",
    ratio: 367.84 / 126.46,
    className: "",
  },
  // full lockup in white (for dark backgrounds)
  white: {
    src: "/img/logo.svg",
    ratio: 367.84 / 126.46,
    className: "brightness-0 invert",
  },
  // just the "tcca" mark
  icon: {
    src: "/img/logo-no-text.svg",
    ratio: 163.87 / 45.09,
    className: "",
  },
  "icon-white": {
    src: "/img/logo-no-text.svg",
    ratio: 163.87 / 45.09,
    className: "brightness-0 invert",
  },
};

export function Logo({
  variant = "primary",
  className = "",
  height = 56,
  priority = false,
  withLink = true,
}: {
  variant?: Variant;
  className?: string;
  height?: number;
  priority?: boolean;
  withLink?: boolean;
}) {
  const { src, ratio, className: variantClassName } = variantMap[variant];
  const width = Math.round(height * ratio);

  const img = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt="Thailand Content Creator Associaton"
      width={width}
      height={height}
      {...(priority ? { fetchPriority: "high" as const } : {})}
      className={`${variantClassName} ${className}`}
      style={{ height, width: "auto" }}
    />
  );

  if (!withLink) return img;

  return (
    <Link
      href="/"
      aria-label="TCCA — หน้าแรก"
      className="inline-flex items-center transition-opacity hover:opacity-80"
    >
      {img}
    </Link>
  );
}

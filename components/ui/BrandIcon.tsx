import React from "react";

interface BrandIconProps {
  name: string;
  className?: string;
  size?: number;
}

export function BrandIcon({ name, className = "w-6 h-6", size = 24 }: BrandIconProps) {
  const iconKey = name.toLowerCase().replace(/[\s.-]/g, "");

  switch (iconKey) {
    case "github":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          className={className}
          aria-label="GitHub logo"
        >
          <rect width="24" height="24" rx="12" fill="#24292e" />
          <path
            fill="#ffffff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 4C7.58 4 4 7.58 4 12c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0020 12c0-4.42-3.58-8-8-8z"
          />
        </svg>
      );

    case "linkedin":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          className={className}
          aria-label="LinkedIn logo"
        >
          <rect width="24" height="24" rx="4" fill="#0A66C2" />
          <path
            fill="#ffffff"
            d="M7.12 9.3H4.42v9.4h2.7V9.3zm-1.35-4.2c-.86 0-1.43.57-1.43 1.32 0 .73.55 1.32 1.39 1.32h.02c.88 0 1.43-.59 1.43-1.32 0-.75-.55-1.32-1.41-1.32zM19.58 13.06c0-2.96-1.58-4.34-3.69-4.34-1.7 0-2.47.94-2.89 1.6v-1.38h-2.7c.04.77 0 9.36 0 9.36h2.7v-5.23c0-.28.02-.56.1-.76.23-.56.74-1.14 1.6-1.14 1.13 0 1.58.86 1.58 2.12v5.01h2.7v-5.24z"
          />
        </svg>
      );

    case "x":
    case "twitter":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          className={className}
          aria-label="X logo"
        >
          <rect width="24" height="24" rx="4" fill="#000000" stroke="#333333" strokeWidth="1" />
          <path
            fill="#ffffff"
            d="M17.5 4.5h2.3l-5.02 5.74 5.91 7.81h-4.63l-3.62-4.74-4.15 4.74H5.98l5.37-6.14-5.65-7.41h4.75l3.27 4.33zm-.81 12.18h1.27L9.84 5.82H8.48z"
          />
        </svg>
      );

    case "instagram":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          className={className}
          aria-label="Instagram logo"
        >
          <defs>
            <radialGradient id="ig-grad" cx="20%" cy="105%" r="140%">
              <stop offset="0%" stopColor="#fdf497" />
              <stop offset="10%" stopColor="#fdf497" />
              <stop offset="45%" stopColor="#fd5949" />
              <stop offset="60%" stopColor="#d6249f" />
              <stop offset="90%" stopColor="#285AEB" />
            </radialGradient>
          </defs>
          <rect width="24" height="24" rx="6" fill="url(#ig-grad)" />
          <rect
            x="4.5"
            y="4.5"
            width="15"
            height="15"
            rx="4"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.6"
          />
          <circle
            cx="12"
            cy="12"
            r="3.6"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.6"
          />
          <circle cx="16.2" cy="7.8" r="1" fill="#ffffff" />
        </svg>
      );

    case "youtube":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          className={className}
          aria-label="YouTube logo"
        >
          <rect width="24" height="24" rx="5" fill="#FF0000" />
          <path d="M10 8.5l5.5 3.5-5.5 3.5v-7z" fill="#ffffff" />
        </svg>
      );

    case "nextjs":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 180 180"
          fill="none"
          className={className}
          aria-label="Next.js logo"
        >
          <circle cx="90" cy="90" r="86" fill="black" stroke="currentColor" strokeWidth="6" />
          <path
            d="M149.508 157.085L69.878 54H54V125.97h11.758V69.176l72.203 93.308a86.06 86.06 0 0011.547-5.399z"
            fill="url(#paint0_linear_next)"
          />
          <path d="M115 54H126.758V126H115V54Z" fill="url(#paint1_linear_next)" />
          <defs>
            <linearGradient
              id="paint0_linear_next"
              x1="109"
              y1="116.5"
              x2="144.5"
              y2="160.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_next"
              x1="121"
              y1="54"
              x2="120.799"
              y2="106.875"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "react":
      return (
        <svg
          width={size}
          height={size}
          viewBox="-11.5 -10.23174 23 20.46348"
          fill="none"
          className={className}
          aria-label="React logo"
        >
          <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
          <g stroke="#61dafb" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );

    case "typescript":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className={className}
          aria-label="TypeScript logo"
        >
          <rect width="24" height="24" rx="4" fill="#3178c6" />
          <path
            d="M11.75 14.5c-.3.4-.7.7-1.2.9-.5.2-1.1.3-1.8.3-.7 0-1.3-.1-1.8-.4-.5-.3-.9-.7-1.1-1.2-.2-.5-.3-1.1-.3-1.8v-4.6h1.7v4.5c0 .5.1.9.3 1.2.2.3.5.4 1 .4.4 0 .8-.1 1-.4.2-.3.4-.7.4-1.2v-4.5h1.7v4.6c0 .7-.2 1.3-.4 1.8m3.9-5.1h-2.1v-1.7h5.9v1.7h-2.1v6.3h-1.7v-6.3z"
            fill="white"
          />
        </svg>
      );

    case "javascript":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className={className}
          aria-label="JavaScript logo"
        >
          <rect width="24" height="24" rx="4" fill="#f7df1e" />
          <path
            d="M7 16.5c.3.5.7.8 1.3 1 .6.2 1.2.2 1.8 0 .5-.2.8-.5 1-.9.2-.4.3-.9.3-1.5v-4.1h-1.6v4.1c0 .4-.1.7-.2.9-.1.2-.3.3-.6.3-.3 0-.5-.1-.7-.3-.2-.2-.2-.5-.2-.9v-1.1H7v2.6zm6.2-.2c.4.5.9.8 1.5 1 .6.2 1.3.2 2 0 .6-.2 1.1-.5 1.4-1 .3-.5.5-1.1.5-1.8 0-.6-.1-1.1-.4-1.5-.3-.4-.7-.7-1.2-.9l-1-.4c-.4-.2-.7-.3-.9-.5-.2-.2-.3-.4-.3-.7 0-.3.1-.5.3-.7.2-.2.5-.3.9-.3.4 0 .7.1.9.3.2.2.4.5.5.8h1.6c-.1-.7-.4-1.2-.9-1.6-.5-.4-1.2-.6-2-.6-.7 0-1.3.1-1.8.4-.5.3-.9.6-1.1 1.1-.2.5-.4 1-.4 1.6 0 .6.1 1.1.4 1.5.3.4.7.7 1.2.9l1 .4c.4.2.8.4 1 .6.2.2.3.5.3.8 0 .4-.1.7-.4.9-.3.2-.7.3-1.1.3-.5 0-.9-.1-1.2-.4-.3-.3-.5-.7-.6-1.2h-1.7c0 .7.3 1.3.7 1.7z"
            fill="#000000"
          />
        </svg>
      );

    case "tailwind":
    case "tailwindcss":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="#38bdf8"
          className={className}
          aria-label="Tailwind CSS logo"
        >
          <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C9.637,13.382,8.276,12,6.001,12z" />
        </svg>
      );

    case "nodejs":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="#68a063"
          className={className}
          aria-label="Node.js logo"
        >
          <path d="M12 2l9 5.2v10.4L12 23l-9-5.4V7.2L12 2zm0 2.3L4.8 8.5v7l7.2 4.3 7.2-4.3v-7L12 4.3z" />
        </svg>
      );

    case "postgresql":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="#336791"
          className={className}
          aria-label="PostgreSQL logo"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16.93c-3.96-.48-7.05-3.57-7.53-7.53h15.06c-.48 3.96-3.57 7.05-7.53 7.53zM5.47 9.4c.48-3.96 3.57-7.05 7.53-7.53v7.53H5.47zm8.53-7.53c3.96.48 7.05 3.57 7.53 7.53h-7.53V1.87z" />
        </svg>
      );

    case "cloudflare":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="#f38020"
          className={className}
          aria-label="Cloudflare logo"
        >
          <path d="M18.3 12.3c-.3-2.6-2.5-4.6-5.2-4.6-2.1 0-4 1.2-4.8 3-.5-.2-1-.3-1.6-.3-2.3 0-4.2 1.9-4.2 4.2 0 .2 0 .4.1.6H2.5C1.1 15.2 0 16.3 0 17.7c0 1.4 1.1 2.5 2.5 2.5h16.2c2.9 0 5.3-2.4 5.3-5.3 0-2.8-2.2-5.1-5-5.3-.2-.8-.4-1.8-.7-2.3z" />
        </svg>
      );

    case "vercel":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
          aria-label="Vercel logo"
        >
          <path d="M12 2L24 22H0L12 2Z" />
        </svg>
      );

    case "vscode":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="#007acc"
          className={className}
          aria-label="VS Code logo"
        >
          <path d="M17.5 2.5L7 11.2 3.2 8.3 1.5 9.4l4.1 3.6-4.1 3.6 1.7 1.1 3.8-2.9 10.5 8.7 5.5-2.8V5.3l-5.5-2.8zm2.5 5.5v9l-5.2-4.5 5.2-4.5z" />
        </svg>
      );

    case "figma":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className={className}
          aria-label="Figma logo"
        >
          <path d="M8 24c2.2 0 4-1.8 4-4v-4H8c-2.2 0-4 1.8-4 4s1.8 4 4 4z" fill="#0acf83" />
          <path d="M4 12c0-2.2 1.8-4 4-4h4v8H8c-2.2 0-4-1.8-4-4z" fill="#a259ff" />
          <path d="M4 4c0-2.2 1.8-4 4-4h4v8H8C5.8 8 4 6.2 4 4z" fill="#f24e1e" />
          <path d="M12 0h4c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4V0z" fill="#ff7262" />
          <path d="M20 12c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z" fill="#1abcfe" />
        </svg>
      );

    case "git":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="#f05032"
          className={className}
          aria-label="Git logo"
        >
          <path d="M21.7 11.2l-8.9-8.9c-.8-.8-2-.8-2.8 0L8.2 4.1l3.5 3.5c.8-.3 1.8-.1 2.4.5.6.6.8 1.5.5 2.3l3.4 3.4c.8-.3 1.8-.1 2.4.5 1 .9 1 2.5 0 3.5s-2.5 1-3.5 0c-.8-.8-.9-2-.4-2.9l-3.2-3.2v5.7c.3.2.6.5.7.9.6 1 .3 2.3-.7 3s-2.3.3-3-.7c-.7-1-.4-2.3.6-3 .4-.3.8-.4 1.3-.4V9.6c-.5 0-.9-.1-1.3-.4-.9-.7-1.1-2-.5-3L6.4 8.7l-4.1 4.1c-.8.8-.8 2 0 2.8l8.9 8.9c.8.8 2 .8 2.8 0l7.7-7.7c.8-.7.8-2 0-2.8z" />
        </svg>
      );

    case "sqlite":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="#003b57"
          className={className}
          aria-label="SQLite logo"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z" />
        </svg>
      );

    case "html5":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="#f97316"
          className={className}
          aria-label="HTML5 logo"
        >
          <path d="M3 2l1.8 17.9L12 22l7.2-2.1L21 2H3zm14.8 6.2h-7.6l.2 2.1h7.2l-.6 6.3-5 1.5-5-1.5-.3-3.6h2.1l.1 1.9 3.1.9 3.1-.9.3-3.2H6.6l-.6-6h12l-.2 2.6z" />
        </svg>
      );

    default:
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-label={name}
        >
          <circle cx="12" cy="12" r="10" />
          <path d="m10 15 5-3-5-3v6Z" />
        </svg>
      );
  }
}

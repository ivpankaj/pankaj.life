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
          fill="currentColor"
          className={className}
          aria-label="GitHub logo"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
      );

    case "linkedin":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
          aria-label="LinkedIn logo"
        >
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      );

    case "x":
    case "twitter":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
          aria-label="X logo"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );

    case "instagram":
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
          aria-label="Instagram logo"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      );

    case "youtube":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
          aria-label="YouTube logo"
        >
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
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

// Shared Dhadhor AI brand lockup: logo mark + wordmark (+ optional tagline).
export function BrandMark({ size = 40 }) {
  return (
    <svg
      className="brand-logo"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      role="img"
      aria-label="Dhadhor AI"
    >
      <rect width="48" height="48" rx="13" fill="#282e34" />
      <path
        d="M15 12h9c8 0 12 5 12 12s-4 12-12 12h-9z"
        fill="none"
        stroke="#fff"
        strokeWidth="4.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Brand({ onClick, size = 40, tagline = false, light = false, stacked = false }) {
  const Tag = onClick ? 'button' : 'div'
  return (
    <Tag
      type={onClick ? 'button' : undefined}
      className={`brand${light ? ' brand-light-theme' : ''}${stacked ? ' brand-stacked' : ''}`}
      onClick={onClick}
      aria-label="Dhadhor AI home"
    >
      <BrandMark size={size} />
      <span className="brand-text">
        <span className="brand-wordmark">
          Dhadhor<span className="brand-ai"> AI</span>
        </span>
        {tagline && <span className="brand-tagline">Oral assessment, reimagined</span>}
      </span>
    </Tag>
  )
}




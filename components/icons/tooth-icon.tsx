export default function ToothIcon({className}: {className?: string}) {
  return (
    <svg className={className} viewBox="0 0 56 56" fill="none" aria-hidden="true">
      <path
        d="M18 8C14 8 10 12 10 18C10 22 11 25 12 28C13 31 13 36 14 42C14.5 45 16 47 18 47C20 47 21 45 22 42L24 34H32L34 42C35 45 36 47 38 47C40 47 41.5 45 42 42C43 36 43 31 44 28C45 25 46 22 46 18C46 12 42 8 38 8C35 8 32 10 28 10C24 10 21 8 18 8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <line x1="24" y1="34" x2="32" y2="34" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

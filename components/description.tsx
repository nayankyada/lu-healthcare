export default function Description({description}: {description: string}) {
  return (
    <p className="leading-wider text-sm font-medium tracking-wider text-white/70">
      {description}
    </p>
  );
}
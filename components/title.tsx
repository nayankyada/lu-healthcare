export default function Title({title}: {title: string}) {
  return (
    <p className="leading-wider text-2xl font-semibold tracking-wider text-white/90">
      {title}
    </p>
  );
}
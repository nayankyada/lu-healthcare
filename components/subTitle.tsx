export default function SubTitle({subTitle}: {subTitle: string}) {
  return (
    <p className="leading-wider text-lg font-medium tracking-wider text-white/90">
      {subTitle}
    </p>
  );
}
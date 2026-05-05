import {HomepageQueryResult} from "@/sanity.types";
import Card from "./card";

export default function Homepage({data}: {data: NonNullable<HomepageQueryResult>}) {
  return (
    <section>
      <h1 className="font-dark-blue py-8 text-center text-4xl">{data.headline}</h1>
      <Card data={data} />
    </section>
  );
}

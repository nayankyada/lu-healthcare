import Card from "./card";
import { HomepageQueryResult } from "@/sanity.types";

export default function Homepage({data}: {data: NonNullable<HomepageQueryResult>}) {
  return (
    <div> 
      <Card data={data} />
    </div>
  );
}   
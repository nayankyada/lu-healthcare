import {HomepageQueryResult} from "@/sanity.types";
import DoctorProfile from "./doctorProfile";
import Specialization from "./specialization";

export default function LuHealthCard({data}: {data: NonNullable<HomepageQueryResult>}) {
  return (
    <div className="bg-dark-blue grid w-full gap-4 rounded-2xl p-4 md:p-8 lg:grid-cols-3">
      <Specialization
        title={data.specialization.title}
        description={data.specialization.description}
        listItems={data.specialization.listItems}
      />
      <DoctorProfile
        image={data.doctorProfile.image}
        alt={data.doctorProfile.image.asset?.altText || data.doctorProfile.name}
        name={data.doctorProfile.name}
        profession={data.doctorProfile.profession}
        description={data.doctorProfile.description}
      />
    </div>
  );
}

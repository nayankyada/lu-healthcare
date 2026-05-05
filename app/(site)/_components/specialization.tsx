import Description from "@/components/description";
import Title from "@/components/title";
import SpecializationItem, { SpecializationItemProps } from "./specializationItem";

export default function Specialization({
  title,
  description,
  listItems,
}: {
  title: string;
  description: string;
  listItems: SpecializationItemProps[];
}) {
  return (
    <div className="bg-dark-sapphire order-2 flex flex-col gap-6 rounded-2xl p-4 md:p-8 lg:order-1 lg:col-span-2">
      <Title title={title} />
      <Description description={description} />
      <div>
        <div className="flex flex-col gap-6">
          {listItems.map(
            (
              item: SpecializationItemProps,
              index,
            ) => (
              <SpecializationItem
                key={index}
                image={item.image}
                title={item.title}
                description={item.description}
              />
            ),
          )}
        </div>
      </div>
    </div>
  );
}

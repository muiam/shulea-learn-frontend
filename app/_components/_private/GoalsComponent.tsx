import { Button } from "@nextui-org/react";
import { Pencil, Trash } from "lucide-react";
import { lessonGoalsQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
export default async function GoalsComponent({
  lessonId,
}: {
  lessonId: string;
}) {
  const goals = await client.fetch(lessonGoalsQuery(lessonId));
  return (
    <div>
      <h2 className="text-slate-500 font-bold">
        By the end of the lesson , the learner should be able to :
      </h2>
      <div className="flex flex-col gap-3">
        {goals.map((goal: any, index: number) => (
          <div className="flex gap-3" key={index}>
            <div key={index} className="flex flex-col gap-3">
              <div className="flex gap-3">
                <h2>{index + 1}</h2>
                <p> {goal.goal}</p>
              </div>
              <div className="flex gap-3">
                <Button className="flex justify-end" variant="light">
                  <Pencil />
                </Button>
                <Button className="flex justify-end" variant="light">
                  <Trash />
                </Button>
              </div>
            </div>
          </div>
        ))}
        {goals.length === 0 && (
          <p className="text-center text-slate-500">No goals found</p>
        )}
      </div>
    </div>
  );
}

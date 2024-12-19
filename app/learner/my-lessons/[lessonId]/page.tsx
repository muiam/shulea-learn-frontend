import AuthLayout from "../../AuthLayout";
import CreateGoalModal from "../../../(modals)/CreateGoalModal";
import GoalsComponent from "@/app/_components/_private/GoalsComponent";
import CreateScheduleModal from "@/app/(modals)/CreateScheduleModal";
import ScheduleComponent from "@/app/_components/_private/ScheduleComponent";

export default async function SingleLessonPage({
  params,
}: {
  params: Promise<{ lessonId: string }>;
}) {
  const { lessonId } = await params;

  return (
    <AuthLayout>
      <div className="flex flex-col gap-5">
        <div className="flex gap-5 h-[100px] bg-[yellow]">
          lesson details here
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          <div className="w-full md:w-1/2 p-3 flex flex-col gap-3 text-slate-500">
            <CreateGoalModal lessonId={lessonId} />
            <GoalsComponent lessonId={lessonId} />
          </div>
          <div className="w-full md:w-1/2 p-3 flex flex-col gap-3">
            <div className="flex justify-end">
              <CreateScheduleModal lessonId={lessonId} />
            </div>
            <ScheduleComponent lessonId={lessonId} />
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}

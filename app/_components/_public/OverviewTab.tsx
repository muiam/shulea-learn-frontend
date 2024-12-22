interface OverviewTabProps {
  lesson: any; // Replace with proper type
}

export default function OverviewTab() {
  return (
    <div className="space-y-4 text-slate-500">
      <h2 className="text-xl font-semibold">
        By the end of this lesson , the learner should be able to :
      </h2>
      <ul className="flex flex-col gap-3">
        <li className="flex items-start gap-3">
          <span className="text-primary">•</span>
          <span>Understand the basics of React</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary">•</span>
          <span>Understand the basics of React</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary">•</span>
          <span>Understand the basics of React</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary">•</span>
          <span>Understand the basics of React</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary">•</span>
          <span>Understand the basics of React</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary">•</span>
          <span>Understand the basics of React</span>
        </li>
      </ul>
    </div>
  );
}

import { Task } from "@/common/constants/task"

type CheckBtnProps = {
  task: Task;
  markTaskDone: (id: number) => void;
  doneButtonClass: string;
}

const CheckBtn = ({ task, markTaskDone, doneButtonClass }: CheckBtnProps) => {
  return(
    <button
        className={`btn btn-sm btn-ghost btn-square ${doneButtonClass}`}
        onClick={() => {
          markTaskDone(task.id)}
        } 
      >
    {task.status === "completed" ? (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ): (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12.75l6 6 9-13.5"
        />
      </svg>
    )}
    </button>
  );
};

export default CheckBtn;
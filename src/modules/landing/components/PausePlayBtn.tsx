import { Task } from "@/common/constants/task";

type PausePlayBtnProps = {
  task: Task;
  runningTaskId: number | null;
  toggleTask: (id: number) => void;
};

const PausePlayBtn = ({ task, runningTaskId, toggleTask }: PausePlayBtnProps) => {
  return (
    <button
        className="btn btn-sm btn-ghost btn-square"
        onClick={() => toggleTask(task.id)}
      >
      {runningTaskId === task.id ? (
        // pause icon
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
        </svg>
      ) : (
        // play icon
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
        </svg>
      )}
    </button>
  );
};

export default PausePlayBtn;
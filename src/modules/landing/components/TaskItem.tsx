import { statusClass, Task } from "@/common/constants/task";
import { formatTime } from "@/common/utils/formatTime";

interface TaskItemProps {
  task: Task;
  editingTaskId: number | null;
  setEditingTaskId: (id: number | null) => void;
  editingTitle: string;
  setEditingTitle: (title: string) => void;
  runningTaskId: number | null;
  toggleTask: (id: number) => void;
  updateTask: (id: number, updates: Partial<Task>) => void;
  removeTask: (id: number) => void;
  markTaskDone: (id: number) => void;
}

export const TaskItem = ({
  task,
  editingTaskId,
  setEditingTaskId,
  editingTitle,
  setEditingTitle,
  runningTaskId,
  toggleTask,
  updateTask,
  removeTask,
  markTaskDone
}: TaskItemProps) => {
  
  const doneButtonClass = task.status === "completed"
    ? "text-gray-400"
    : "text-green-500";

  return (
  <li key={task.id}>
    <div className="card w-96 bg-base-100 card-xs shadow-md p-3 my-1">
      <div className="card-body">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-1">
            <h5 className={statusClass[task.status]}>{task.status}</h5>
            {editingTaskId === task.id ? (
              <input
                type="text"
                value={editingTitle}
                onChange={(e) => setEditingTitle(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    updateTask(task.id, { title: editingTitle });
                    setEditingTaskId(null);
                  }
                }}
                onBlur={() => setEditingTaskId(null)}
                className="input input-sm w-full"
                autoFocus
              />
            ) : (
              <h1 
                className={`card-title text-lg break-all ${
                task.status === "completed" ? "line-through text-gray-400" : ""
                }`}>
                {task.title}
              </h1>
            )}
            <h1 className="text-xl text-gray-500">{formatTime(task.time)}</h1>
          </div>

          <div className="flex gap-2">
            {task.status !== "completed" && (
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
            )}
            <button
                className={`btn btn-sm btn-ghost btn-square ${doneButtonClass}`}
                onClick={() => markTaskDone(task.id)}
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
          
            <button
              className="btn btn-sm btn-ghost btn-square"
              onClick={() => {
                setEditingTaskId(task.id);
                setEditingTitle(task.title);
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
              </svg>
            </button>

            <button
              className="btn btn-sm btn-ghost btn-square"
              onClick={() => removeTask(task.id)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </li>
  );
};
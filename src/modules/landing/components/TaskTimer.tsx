import { useLogic } from "../useLogic";
import { TaskList } from "./TaskList";

export const TaskTimer = () => {
  const {
    title, setTitle,
    runningTaskId, setRunningTaskId,
    editingTaskId, setEditingTaskId,
    editingTitle, setEditingTitle,
    handleAddTask, toggleTask, markTaskDone, handleClearTask,
    tasks, removeTask, updateTask,
  } = useLogic();

  return (
    <>
    <div>
      <div className="flex justify-center items-center mt-10 gap-1">
        <div>
          <input value={title} onChange={(e) => setTitle(e.target.value)} className="input input-md w-80" type="text" onKeyDown={(e) => {
              if (e.key === "Enter") handleAddTask();
            }} placeholder="Enter task name..."/>
        </div>
        <div className="flex flex-row">
          <button className="btn btn-neutral btn-md" onClick={handleAddTask}>+ Add</button>
          {tasks.length > 1 && (
            <button className="btn btn-ghost btn-md" onClick={handleClearTask}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
            </button>
          )}
        </div>
      </div>
      
      <div className="flex justify-center mt-10">
        <TaskList 
          tasks={tasks}
          editingTaskId={editingTaskId}
          setEditingTaskId={setEditingTaskId}
          editingTitle={editingTitle}
          setEditingTitle={setEditingTitle}
          runningTaskId={runningTaskId}
          toggleTask={toggleTask}
          updateTask={updateTask}
          removeTask={removeTask}
          markTaskDone={markTaskDone}
        />
      </div>
    </div>
    </>
  );
};
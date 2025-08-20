import { useLogic } from "../useLogic";
import { TaskList } from "./TaskList";

export const TaskTimer = () => {
  const {
    title, setTitle,
    runningTaskId, setRunningTaskId,
    editingTaskId, setEditingTaskId,
    editingTitle, setEditingTitle,
    handleAddTask, toggleTask, markTaskDone,
    tasks, removeTask, updateTask
  } = useLogic();

  return (
    <>
    <div>
      <div className="flex justify-center items-center mt-10 gap-4">
        <div>
          <input value={title} onChange={(e) => setTitle(e.target.value)} className="input input-md w-96" type="text" onKeyDown={(e) => {
              if (e.key === "Enter") handleAddTask();
            }} placeholder="Enter task name..."/>
        </div>
        <div>
          <button className="btn btn-neutral btn-md" onClick={handleAddTask}>+ Add</button>
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
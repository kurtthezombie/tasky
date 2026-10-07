import { useLogic } from "../useLogic";
import { TaskList } from "./TaskList";

export const TaskTimer = () => {
  const {
    title, setTitle,
    runningTaskId,
    editingTaskId, setEditingTaskId,
    editingTitle, setEditingTitle,
    handleAddTask, toggleTask, markTaskDone, handleClearTask,
    tasks, removeTask, updateTask,
  } = useLogic();

  return (
    <>
    <section className="workspace" aria-labelledby="tasks-heading">
      <div className="workspace-heading">
        <div>
          <p className="eyebrow">YOUR WORKSPACE</p>
          <h1 id="tasks-heading">One task at a time.</h1>
          <p className="workspace-description">Write it down. Start the timer. Find your focus.</p>
        </div>
      </div>
      <form className="task-composer" onSubmit={(event) => { event.preventDefault(); handleAddTask(); }}>
          <label className="sr-only" htmlFor="task-title">Task name</label>
          <input id="task-title" value={title} onChange={(e) => setTitle(e.target.value)} className="input task-input" type="text" placeholder="What are you working on?" autoComplete="off" />
          <button className="btn add-task" type="submit" disabled={!title.trim()}>+ Add task</button>
      </form>
      <div className="list-heading">
        <h2>Your tasks <span className="task-count">{tasks.length}</span></h2>
        <div className="list-tools">
          {tasks.length > 0 && <span className="completion-count">{tasks.filter(task => task.status === "completed").length} completed</span>}
          {tasks.length > 1 && (
            <button className="btn btn-ghost btn-sm clear-tasks" onClick={handleClearTask}>
              Clear all
            </button>
          )}
        </div>
      </div>
      
      <div>
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
    </section>
    </>
  );
};

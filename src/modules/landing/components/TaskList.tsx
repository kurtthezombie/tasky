import { Task } from "@/common/constants/task";
import { TaskItem } from "./TaskItem";

interface TaskListProps {
  tasks: Task[];
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

export const TaskList = ({
  tasks,
  editingTaskId,
  setEditingTaskId,
  editingTitle,
  setEditingTitle,
  runningTaskId,
  toggleTask,
  updateTask,
  removeTask,
  markTaskDone,
}: TaskListProps) => {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <span className="empty-mark" aria-hidden="true">✓</span>
        <h3>A fresh start.</h3>
        <p>Add your first task above, then press play when you’re ready.</p>
      </div>
    );
  }

  return (
    <ul className="task-list">
      {[...tasks]
        .sort((a, b) => {
          if (a.status === "completed" && b.status !== "completed") return 1;
          if (a.status !== "completed" && b.status === "completed") return -1;
          return 0; // keep relative order for tasks with same status
        })
        .map((task) => (
          <TaskItem
            key={task.id}
            task={task}
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
        ))}
    </ul>
  );
}

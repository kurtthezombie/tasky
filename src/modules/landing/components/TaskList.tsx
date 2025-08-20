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
      <p className="text-gray-500 text-lg">
        No tasks yet - add one to get started
      </p>
    );
  }

  return (
    <ul className="space-y-3 max-h-[70vh] overflow-y-auto pr-2">
      {tasks
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
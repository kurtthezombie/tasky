import { useState, useEffect } from "react";
import { useTasks } from "@/common/hooks/useTasks";

export const useLogic = () => {
  const { tasks, addTask, removeTask, updateTask } = useTasks();

  const [title, setTitle] = useState("");
  const [runningTaskId, setRunningTaskId] = useState<number | null>(null);
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
  const [editingTitle, setEditingTitle] = useState("");

  const handleAddTask = () => {
    if (!title.trim()) return;
    addTask(title);
    setTitle("");
  };

  const toggleTask = (taskId: number) => {
    if (runningTaskId === taskId) {
      updateTask(taskId, { status: "pending" });
      setRunningTaskId(null);
    } else {
      if (runningTaskId !== null) {
        updateTask(runningTaskId, { status: "pending" });
      }
      updateTask(taskId, { status: "in-progress" });
      setRunningTaskId(taskId);
      }
  };

  useEffect(() => {
    if (runningTaskId === null) return;

    const interval = setInterval(() => {
      const task = tasks.find(t => t.id === runningTaskId);
      if (task) {
        updateTask(runningTaskId, { time: task.time + 1 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [runningTaskId, tasks, updateTask]);

  return {
    title, setTitle,
    runningTaskId, setRunningTaskId,
    editingTaskId, setEditingTaskId,
    editingTitle, setEditingTitle,

    handleAddTask, toggleTask,

    tasks, addTask, removeTask, updateTask 
  };
};
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

    let lastTick = Date.now();

    const interval = setInterval(() => {
      const now = Date.now();
      const diff = Math.floor((now - lastTick) / 1000);

      if (diff > 0) {
        const task = tasks.find(t => t.id === runningTaskId);
        if (task) {
          updateTask(runningTaskId, { time: task.time + diff });
        }
        lastTick = now;
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
import { useState, useEffect } from "react";
import { useTasks } from "@/common/hooks/useTasks";
import { toast } from "react-toastify";

export const useLogic = () => {
  const { tasks, addTask, removeTask, updateTask, clearTask } = useTasks();

  const [title, setTitle] = useState("");
  const [runningTaskId, setRunningTaskId] = useState<number | null>(null);
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
  const [editingTitle, setEditingTitle] = useState("");

  const handleAddTask = () => {
    const trimmed = title.trim();
    if(!trimmed) return;

    const isDuplicate = tasks.some(
      (task) => task.title.trim().toLowerCase() === trimmed.toLowerCase()
    );

    if (isDuplicate){
      toast.error("Task title must be unique!");
      return;
    }

    addTask(trimmed);
    toast.success("Task added successfully!");
    setTitle("");
  };

  const handleClearTask = () => {
    clearTask();
  }

  const toggleTask = (taskId: number) => {
    if (runningTaskId === taskId) {
      updateTask(taskId, { status: "pending" });
      setRunningTaskId(null);
      toast("Task paused");
    } else {
      if (runningTaskId !== null) {
        updateTask(runningTaskId, { status: "pending" });
        toast.info("Previous task paused");
      }
      updateTask(taskId, { status: "in-progress" });
      setRunningTaskId(taskId);
      toast("Task started");
    }
  };

  const markTaskDone = (taskId: number) => {
    const task = tasks.find(t => t.id === taskId);
    if (!task) return;

    updateTask(taskId, { status: task.status === "completed" 
      ? "pending"
      : "completed"
    });

    // updateTask(taskId, { status: "completed" });
    // if (runningTaskId === taskId) {
    //   setRunningTaskId(null);
    // }
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

    handleAddTask, toggleTask, markTaskDone, handleClearTask,

    tasks, addTask, removeTask, updateTask
  };
};
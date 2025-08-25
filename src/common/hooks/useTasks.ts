import { useState } from 'react';
import { Task } from '../constants/task';
import { toast } from 'react-toastify';
import { useLocalStorage } from './useLocalStorage';

export function useTasks() {
    const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", []);

    const addTask = (title: string) => {
      const t = title.trim();
      if (!t) return;

      setTasks(prev => [
        { id: Date.now(), title: t, time: 0, status: "pending" },
        ...prev,
      ]);
    };

    const removeTask = (id: number) => {
      setTasks(prev => prev.filter(task => task.id !== id));
      toast.error(`Task removed`);
    };

    const updateTask = (id: number, updates: Partial<Task>) => {
      setTasks(prev =>
        prev.map(task => (task.id === id ? { ...task, ...updates } : task ))
      );
    };

    const clearTask = () => {
      setTasks([]);
      toast.info("All tasks cleared");
    };

    return {
      tasks,
      addTask,
      removeTask,
      updateTask,
      clearTask,  
    };
}
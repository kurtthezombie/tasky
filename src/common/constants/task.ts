export type TaskStatus = "pending" | "running" | "completed" | "failed";

export interface Task {
 id: number,
 title: string,
 time: number,
 status: TaskStatus,     
}

export const statusClass: Record<TaskStatus, string> = {
  pending: "badge badge-sm badge-soft badge-warning",
  running: "badge badge-sm badge-soft badge-info",
  completed: "badge badge-sm badge-soft badge-success",
  failed: "badge badge-sm badge-soft badge-error",
}
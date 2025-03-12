export interface Task {
  id: string;
  content: string;
  date?: string;
  comments?: number;
  attachments?: number;
  assignee?: string;
  labels?: string[];
}

export interface Column {
  id: string;
  title: string;
  tasks: Task[];
}

export interface KanbanData {
  columns: {
    [key: string]: Column;
  };
  columnOrder: string[];
}

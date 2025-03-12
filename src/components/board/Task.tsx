import React from 'react';
import { Task as TaskType } from '../../types';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface TaskProps {
  task: TaskType;
  columnId: string;
}

const getLabelColor = (label: string) => {
  switch (label) {
    case 'Marketing':
      return 'bg-purple-100 text-purple-700';
    case 'Dev':
      return 'bg-gray-100 text-gray-700';
    case 'Templates':
      return 'bg-green-100 text-green-700';
    case 'Mobile':
      return 'bg-pink-100 text-pink-700';
    default:
      return 'bg-blue-100 text-blue-700';
  }
};

const getDateClass = (date?: string) => {
  if (!date) return 'text-gray-500';
  if (date === 'Today') return 'text-red-500';
  if (date === 'Tomorrow') return 'text-orange-500';
  return 'text-gray-500';
};

export const Task: React.FC<TaskProps> = ({ task, columnId }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = useSortable({
    id: task.id,
    data: {
      type: 'task',
      task,
      columnId
    }
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="bg-white p-4 rounded-md shadow-sm border border-gray-200 cursor-pointer"
    >
      <div className="flex justify-between">
        <h3 className="font-medium mb-2">{task.content}</h3>
        {task.assignee && (
          <div className="w-6 h-6 bg-gray-300 rounded-full overflow-hidden flex items-center justify-center text-xs text-white">
            {task.assignee.charAt(task.assignee.length - 5)}
          </div>
        )}
      </div>
      
      <div className="flex items-center text-sm text-gray-500 mt-2">
        {task.date && (
          <div className={`flex items-center mr-3 ${getDateClass(task.date)}`}>
            <span className="mr-1">◯</span> {task.date}
          </div>
        )}
        
        {task.comments && (
          <div className="flex items-center mr-3">
            <span className="mr-1">◯</span> {task.comments}
          </div>
        )}
        
        {task.attachments && (
          <div className="flex items-center mr-3">
            <span className="mr-1">◯</span> {task.attachments}
          </div>
        )}
      </div>
      
      {task.labels && task.labels.length > 0 && (
        <div className="mt-2 space-x-2">
          {task.labels.map((label, i) => (
            <span 
              key={i} 
              className={`text-xs px-2 py-1 rounded ${getLabelColor(label)}`}
            >
              {label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
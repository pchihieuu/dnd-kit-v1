import React from 'react';
import { Task } from './Task';
import { Column as ColumnType } from '../../types';
import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';

interface ColumnProps {
  column: ColumnType;
}

export const Column: React.FC<ColumnProps> = ({ column }) => {
  const { setNodeRef } = useDroppable({
    id: column.id,
    data: {
      type: 'column',
      column
    }
  });

  return (
    <div className="w-80">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-medium">
          {column.title} <span className="text-gray-500 ml-1">{column.tasks.length}</span>
        </h2>
        <button className="text-gray-500">⋮</button>
      </div>
      
      <div 
        ref={setNodeRef}
        className="space-y-4 min-h-10"
      >
        <SortableContext 
          items={column.tasks.map(task => task.id)} 
          strategy={verticalListSortingStrategy}
        >
          {column.tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              columnId={column.id}
            />
          ))}
        </SortableContext>
      </div>
    </div>
  );
};
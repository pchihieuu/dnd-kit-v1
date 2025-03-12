import React from "react";
import { Column } from "./Column";
import {
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { Task } from "./Task";
import { useKanban } from "@/src/hooks/useKanban";

export const Board: React.FC = () => {
  const { data, activeTask, handleDragStart, handleDragOver, handleDragEnd } =
    useKanban();

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <div className="flex space-x-4 overflow-x-auto">
      <DndContext
        sensors={sensors}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        {data.columnOrder.map((columnId) => (
          <Column key={columnId} column={data.columns[columnId]} />
        ))}

        <DragOverlay>
          {activeTask ? <Task task={activeTask} columnId="" /> : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
};

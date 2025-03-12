import { useState } from "react";
import { KanbanData, Task } from "../types";
import { initialData } from "../data/initialData";
import { DragEndEvent, DragOverEvent, DragStartEvent } from "@dnd-kit/core";

export const useKanban = () => {
  const [data, setData] = useState<KanbanData>(initialData);
  const [activeTask, setActiveTask] = useState<Task | null>(null);
  const [activeColumn, setActiveColumn] = useState<string | null>(null);

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    const id = active.id as string;

    if (id.startsWith("task-")) {
      // Find which column contains this task
      const columnId = Object.keys(data.columns).find((colId) =>
        data.columns[colId].tasks.some((task) => task.id === id)
      );

      if (columnId) {
        const task = data.columns[columnId].tasks.find((t) => t.id === id);
        if (task) {
          setActiveTask(task);
          setActiveColumn(columnId);
        }
      }
    }
  };

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event;

    if (!over) return;

    const activeId = active.id as string;
    const overId = over.id as string;

    // Skip if not dragging a task
    if (!activeId.startsWith("task-")) return;

    // Determine if we're dragging over a column or another task
    let targetColumnId = overId;

    if (overId.startsWith("task-")) {
      // Find which column contains this task
      targetColumnId =
        Object.keys(data.columns).find((colId) =>
          data.columns[colId].tasks.some((task) => task.id === overId)
        ) || "";
    }

    // If we're not dragging over a column or we're dragging over the same column, do nothing
    if (!targetColumnId || !activeColumn || activeColumn === targetColumnId)
      return;

    setData((prev) => {
      const newData = { ...prev };

      // Find task in source column
      const task = newData.columns[activeColumn].tasks.find(
        (t) => t.id === activeId
      );

      if (!task) return prev;

      // Remove from source column
      newData.columns[activeColumn].tasks = newData.columns[
        activeColumn
      ].tasks.filter((t) => t.id !== activeId);

      // Add to target column
      newData.columns[targetColumnId].tasks = [
        ...newData.columns[targetColumnId].tasks,
        task,
      ];

      setActiveColumn(targetColumnId);
      return newData;
    });
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) {
      setActiveTask(null);
      setActiveColumn(null);
      return;
    }

    const activeId = active.id as string;
    const overId = over.id as string;

    // Skip if not dragging a task
    if (!activeId.startsWith("task-")) {
      setActiveTask(null);
      setActiveColumn(null);
      return;
    }

    // Determine if we're dropping over a column or task
    const isOverColumn = !overId.startsWith("task-");

    if (isOverColumn) {
      // Just dropping in a column, it was already moved in dragOver
      setActiveTask(null);
      setActiveColumn(null);
      return;
    }

    // We're dropping on another task, need to reorder
    if (!activeColumn) {
      setActiveTask(null);
      return;
    }

    // Find the destination column
    const targetColumnId = Object.keys(data.columns).find((colId) =>
      data.columns[colId].tasks.some((task) => task.id === overId)
    );

    if (!targetColumnId) {
      setActiveTask(null);
      setActiveColumn(null);
      return;
    }

    // Find indices
    const dragIndex = data.columns[activeColumn].tasks.findIndex(
      (t) => t.id === activeId
    );
    const hoverIndex = data.columns[targetColumnId].tasks.findIndex(
      (t) => t.id === overId
    );

    // We're moving in the same column
    if (activeColumn === targetColumnId && dragIndex === hoverIndex) {
      setActiveTask(null);
      setActiveColumn(null);
      return;
    }

    setData((prev) => {
      const newData = { ...prev };

      if (activeColumn === targetColumnId) {
        // Reorder within the same column
        const column = [...newData.columns[activeColumn].tasks];
        const [draggedTask] = column.splice(dragIndex, 1);
        column.splice(hoverIndex, 0, draggedTask);
        newData.columns[activeColumn].tasks = column;
      } else {
        // Already moved to different column in dragOver, just reorder there
        const targetColumn = [...newData.columns[targetColumnId].tasks];
        const draggedTask = targetColumn.find((t) => t.id === activeId);

        if (draggedTask) {
          const filteredColumn = targetColumn.filter((t) => t.id !== activeId);
          filteredColumn.splice(hoverIndex, 0, draggedTask);
          newData.columns[targetColumnId].tasks = filteredColumn;
        }
      }

      return newData;
    });

    setActiveTask(null);
    setActiveColumn(null);
  };

  return {
    data,
    activeTask,
    handleDragStart,
    handleDragOver,
    handleDragEnd,
  };
};

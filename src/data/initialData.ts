import { KanbanData } from "../types";

export const initialData: KanbanData = {
  columns: {
    "to-do": {
      id: "to-do",
      title: "To Do",
      tasks: [
        {
          id: "task-1",
          content: "Finish user onboarding",
          date: "Tomorrow",
          comments: 1,
          attachments: 5,
          labels: [],
        },
        {
          id: "task-2",
          content: "Solve the Dabble prioritisation issue",
          date: "Mar 8, 2025",
          comments: 2,
          attachments: 1,
          labels: ["Marketing"],
        },
        {
          id: "task-3",
          content: "Hold to reorder on mobile",
          date: "Mar 10, 2025",
          comments: 2,
          labels: ["Dev", "Mobile"],
        },
      ],
    },
    "in-progress": {
      id: "in-progress",
      title: "In Progress",
      tasks: [
        {
          id: "task-4",
          content: "Update onboarding workflow templates",
          date: "Mar 7, 2025",
          comments: 1,
          attachments: 2,
          labels: ["Templates"],
        },
        {
          id: "task-5",
          content:
            "Make figbot send comment when ticket is auto-moved back to inbox",
          date: "Today",
          comments: 2,
          attachments: 1,
        },
        {
          id: "task-6",
          content: "Connect time tracking with tasks",
          date: "Mar 10, 2025",
          comments: 2,
          labels: ["Task"],
        },
        {
          id: "task-7",
          content: "Intelligent kanban sorting",
          date: "Mar 10, 2025",
          attachments: 1,
          labels: ["Dev", "NextJS", "DnD Kit"],
        },
        {
          id: "task-8",
          content: "Settings menu on mobile really doesn't work",
          date: "Tomorrow",
          comments: 1,
          attachments: 1,
          labels: ["Mobile"],
        },
      ],
    },
    "in-review": {
      id: "in-review",
      title: "In Review",
      tasks: [
        {
          id: "task-9",
          content: "Finish Mast site",
          date: "Mar 3, 2025",
          comments: 4,
          attachments: 2,
          labels: ["Marketing"],
        },
        {
          id: "task-10",
          content: "Dark mode date picker",
          date: "Mar 8, 2025",
          comments: 2,
          attachments: 1,
          labels: ["Dev"],
        },
        {
          id: "task-11",
          content: "Edit workflow (your lists)",
          date: "Today",
          comments: 3,
          attachments: 1,
          labels: ["Dev"],
        },
        {
          id: "task-12",
          content: "Stripe / subscription management",
          date: "Mar 10, 2025",
          labels: ["Payment"],
        },
      ],
    },
  },
  columnOrder: ["to-do", "in-progress", "in-review"],
};

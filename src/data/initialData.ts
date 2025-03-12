import { KanbanData } from '../types';

export const initialData: KanbanData = {
  columns: {
    'to-do': {
      id: 'to-do',
      title: 'To Do',
      tasks: [
        {
          id: 'task-1',
          content: 'Finish user onboarding',
          date: 'Tomorrow',
          comments: 1,
          assignee: '/avatars/user1.png',
          labels: []
        },
        {
          id: 'task-2',
          content: 'Solve the Dabble prioritisation issue',
          date: 'Jan 8, 2022',
          comments: 2,
          attachments: 1,
          assignee: '/avatars/user2.png',
          labels: ['Marketing']
        },
        {
          id: 'task-3',
          content: 'Hold to reorder on mobile',
          date: 'Jan 10, 2022',
          assignee: '/avatars/user3.png',
          labels: ['Dev']
        }
      ]
    },
    'in-progress': {
      id: 'in-progress',
      title: 'In Progress',
      tasks: [
        {
          id: 'task-4',
          content: 'Update onboarding workflow templates',
          date: 'Jan 7, 2022',
          assignee: '/avatars/user4.png',
          labels: ['Templates']
        },
        {
          id: 'task-5',
          content: 'Make figbot send comment when ticket is auto-moved back to inbox',
          date: 'Today',
          comments: 2,
          attachments: 1,
          assignee: '/avatars/user5.png'
        },
        {
          id: 'task-6',
          content: 'Connect time tracking with tasks',
          date: 'Jan 10, 2022',
          assignee: '/avatars/user6.png'
        },
        {
          id: 'task-7',
          content: 'Intelligent kanban sorting',
          date: 'Jan 10, 2022',
          assignee: '/avatars/user7.png'
        },
        {
          id: 'task-8',
          content: "Settings menu on mobile really doesn't work",
          date: 'Tomorrow',
          assignee: '/avatars/user8.png',
          labels: ['Mobile']
        }
      ]
    },
    'in-review': {
      id: 'in-review',
      title: 'In Review',
      tasks: [
        {
          id: 'task-9',
          content: 'Finish Mast site',
          comments: 4,
          attachments: 2,
          labels: ['Marketing']
        },
        {
          id: 'task-10',
          content: 'Dark mode date picker',
          comments: 2,
          attachments: 1
        },
        {
          id: 'task-11',
          content: 'Edit workflow (your lists)',
          labels: ['Dev']
        },
        {
          id: 'task-12',
          content: 'Stripe / subscription management',
          date: 'Jan 10, 2022'
        }
      ]
    }
  },
  columnOrder: ['to-do', 'in-progress', 'in-review']
};
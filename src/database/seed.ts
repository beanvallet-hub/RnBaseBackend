import 'reflect-metadata';

import { DataSource } from 'typeorm';
import { Task } from 'src/task/entities/task.entity';

const dataSource = new DataSource({
  type: 'better-sqlite3',
  database: 'database.sqlite',
  entities: [Task],
  synchronize: true,
});

async function seed() {
  await dataSource.initialize();

  const taskRepository = dataSource.getRepository(Task);

  const tasks = [
    {
      id: 1,
      name: 'task 1',
      isCompleted: false,
      isFavorite: false,
      remindAt: null,
    },
    {
      id: 2,
      name: 'task 2',
      isCompleted: false,
      isFavorite: false,
      remindAt: null,
    },
    {
      id: 3,
      name: 'task 3',
      isCompleted: false,
      isFavorite: false,
      remindAt: null,
    },
    {
      id: 4,
      name: 'task 4',
      isCompleted: false,
      isFavorite: false,
      remindAt: null,
    },
    {
      id: 5,
      name: 'task 5',
      isCompleted: false,
      isFavorite: false,
      remindAt: null,
    },
    {
      id: 6,
      name: 'task 6',
      isCompleted: false,
      isFavorite: false,
      remindAt: null,
    },
    {
      id: 7,
      name: 'task 7',
      isCompleted: false,
      isFavorite: false,
      remindAt: null,
    },
    {
      id: 8,
      name: 'task 8',
      isCompleted: false,
      isFavorite: false,
      remindAt: null,
    },
    {
      id: 9,
      name: 'task 9',
      isCompleted: false,
      isFavorite: false,
      remindAt: null,
    },
    {
      id: 10,
      name: 'task 10',
      isCompleted: false,
      isFavorite: false,
      remindAt: null,
    },
    {
      id: 11,
      name: 'task 11',
      isCompleted: false,
      isFavorite: false,
      remindAt: null,
    },
    {
      id: 12,
      name: 'task 12',
      isCompleted: false,
      isFavorite: false,
      remindAt: null,
    },
    {
      id: 13,
      name: 'task 13',
      isCompleted: false,
      isFavorite: false,
      remindAt: null,
    },
    {
      id: 14,
      name: 'task 14',
      isCompleted: false,
      isFavorite: false,
      remindAt: null,
    },
    {
      id: 15,
      name: 'task 15',
      isCompleted: false,
      isFavorite: false,
      remindAt: null,
    },
    {
      id: 16,
      name: 'task 16',
      isCompleted: false,
      isFavorite: false,
      remindAt: null,
    },
    {
      id: 17,
      name: 'task 17',
      isCompleted: false,
      isFavorite: false,
      remindAt: null,
    },
    {
      id: 18,
      name: 'task 18',
      isCompleted: false,
      isFavorite: false,
      remindAt: null,
    },
  ];

  await taskRepository.save(tasks);

  console.log('Database seeded successfully');

  await dataSource.destroy();
}

seed().catch((error) => {
  console.error(error);
  process.exit(1);
});

import { Service } from '@angular/core';

export interface TaskItem
{
    id: number,
    name: string,
    description: string,
    difficulty: string,
    completed: boolean,
    deadline: string,
    category: string
}

@Service()
export class Task 
{
    private tasks: TaskItem[] = 
    [
    {
      id: 1,
      name: "Learn angular",
      description: "Complete this excercises",
      difficulty: "hard",
      completed: false,
      deadline: "12.06.2026",
      category: "academy"
    },

    {
      id: 2,
      name: "Make component",
      description: "ng g c",
      difficulty: "easy",
      completed: false,
      deadline: "10.06.2026",
      category: "academy"
    },
    {
      id: 3,
      name: "Binding practice",
      difficulty: "medium",
      description: "Complete this excercises",
      completed: false,
      deadline: "10.06.2026",
      category: "academy"
    },
    {
      id: 4,
      name: "Make homework",
      description: "Complete homework excercises",
      difficulty: "hard",
      completed: false,
      deadline: "22.06.2026",
      category: "academy"
    },
    {
      id: 5,
      name: "Drink water",
      description: "Just dring glass of water",
      difficulty: "easy",
      completed: true,
      deadline: "10.06.2026",
      category: "idk"
    },
    {
      id: 6,
      name: "Go home",
      description: "GO HOME",
      difficulty: "easy",
      completed: false,
      deadline: "10.06.2026",
      category: "idk"
    }
  ];

  

  isCompleted(task: TaskItem): boolean
  {
    return task.completed
  }
  
  deleteTask(id: number): void
  {
    this.tasks = this.tasks.filter(task => task.id !== id );
  }

  getHardsTasksCount(): number
  {
    return this.tasks.filter(x => x.difficulty.toLocaleLowerCase() === "hard").length;
  }

  getTasks(): TaskItem[]
  {
    return this.tasks
  }

  getTaskById(id: number)
  {
    return this.tasks.find(task => task.id === id );
  }

  getTotalCount(): number
  {
    return this.tasks.length;
  }

  changeStatus(task: TaskItem)
  {
    task.completed = !task.completed;
  }

  getActiveCount(): number
  {
    return this.tasks.filter(task => !task.completed).length;
  }

  getCompletedCount(): number
  {
    return this.tasks.filter(task => task.completed).length;
  }


}

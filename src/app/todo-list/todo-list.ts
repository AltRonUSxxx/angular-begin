import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList {
  title = "Tasks";
  username = "@AltRan55";
  selectedTask: any = null;
  selectSelectedTask: any = null;
  isSaveDisable = false;
  tasks = [
    {
      id: 1,
      name: "Learn angular",
      difficulty: "hard",
      completed: "false",
      deadline: "12.06.2026"
    },

    {
      id: 2,
      name: "Make component",
      difficulty: "easy",
      completed: "false",
      deadline: "10.06.2026"
    },
    {
      id: 3,
      name: "Binding practice",
      difficulty: "medium",
      completed: "false",
      deadline: "10.06.2026"
    },
    {
      id: 4,
      name: "Make homework",
      difficulty: "hard",
      completed: "false",
      deadline: "22.06.2026"
    },
    {
      id: 5,
      name: "Drink water",
      difficulty: "easy",
      completed: "true",
      deadline: "10.06.2026"
    },
    {
      id: 6,
      name: "Go home",
      difficulty: "easy",
      completed: "false",
      deadline: "10.06.2026"
    }
  ]

  isCompleted(task: any): boolean
  {
    if(task.completed === "true")
    {
      return true;
    }
    return false;
  }
  
  selectTask(task: any)
  {
    this.selectedTask = task;
    console.log(this.selectedTask)
  }

  selectSelected()
  {
    this.selectSelectedTask = this.selectedTask;
  }

  changeStatus()
  {
    if(this.selectSelectedTask.completed === "true")
    {
      this.selectSelectedTask.completed = "false";
    }
    else
    {
      this.selectSelectedTask.completed = "true";
    }
  }
}

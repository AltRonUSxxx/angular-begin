import { Component, inject } from '@angular/core';
import { Task, TaskItem } from '../service/task';

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
  private taskService = inject(Task);
  tasks = this.taskService.getTasks();

  isCompleted(task: any): boolean
  {
    return task.completed;
  }
  
  selectTask(task: any)
  {
    this.selectedTask = task;
    console.log(this.selectedTask)
  }

  deleteTask(task: TaskItem)
  {
    this.taskService.deleteTask(task.id);
    this.tasks = this.taskService.getTasks();

    if(this.selectedTask?.id === task.id)
    {
      this.selectedTask = null;
    }
  }

  getTotalCount(): number
  {
    return this.taskService.getTotalCount();
  }

  getActiveCount(): number
  {
    return this.taskService.getActiveCount();
  }

  getCompletedCount(): number
  {
    return this.taskService.getCompletedCount();
  }

  selectSelected(): void
  {
    if(this.selectSelectedTask)
    {
      this.selectSelectedTask = null;
    }
    else
    {
      this.selectSelectedTask = this.selectedTask;
    }
  }

  changeStatus(task: TaskItem)
  {
    this.taskService.changeStatus(task);
  }
}

import { Component, inject } from '@angular/core';
import { Task } from '../../service/task';

@Component({
  selector: 'app-statistics',
  imports: [],
  templateUrl: './statistics.html',
  styleUrl: './statistics.css',
})
export class Statistics {
  private taskService = inject(Task);

  getHardTasksCount(): number
  {
    return this.taskService.getHardsTasksCount();
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

  
}

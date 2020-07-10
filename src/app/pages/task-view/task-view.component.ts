import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {
  lists: any[];
  tasks: any[];
  constructor(private TaskService: TaskService, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.TaskService.getTasks(params.listId).subscribe((task: any) => {
        this.tasks = task;
      });
    });

    this.TaskService.getLists().subscribe((list: any) => {
        //console.log(list);
        this.lists = list;
    });
  }
}

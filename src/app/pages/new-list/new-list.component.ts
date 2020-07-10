import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';
import { Router } from '@angular/router';
import { List } from 'src/app/model/list.model';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent implements OnInit {

  constructor(private TaskService: TaskService, private router: Router) { }

  ngOnInit(): void {
  }
  
  createNewList(title: string) {
    this.TaskService.createList(title)
    .subscribe((list: List) => {
      console.log(list);
      this.router.navigate(['/lists', list._id]);
    });
  }
}

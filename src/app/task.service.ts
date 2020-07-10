import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private WebRequestService: WebRequestService) { }

  createList(title: string) {
    //Send a web request to create a list to WebRequest Service
    return this.WebRequestService.post('lists',{ title });
  }

  getLists() {
    return this.WebRequestService.get('lists');
  }

  getTasks(listId: string) {
    return this.WebRequestService.get(`lists/${listId}`)
  }

  createTask(listId: string ,title: string) {
    return this.WebRequestService.post(`lists/${listId}`,{title});
  }
}

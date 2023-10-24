import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<any> {
    return this.http.get(this.apiUrl + 'task-list/');
  }

  createTask(task: any): Observable<any> {
    return this.http.post(this.apiUrl + 'task-create/', task);
  }

  updateTask(task: any): Observable<any> {
    return this.http.post(this.apiUrl + `task-update/${task.id}/`, task);
  }

  deleteTask(taskId: number): Observable<any> {
    return this.http.delete(this.apiUrl + `task-delete/${taskId}/`);
  }
}

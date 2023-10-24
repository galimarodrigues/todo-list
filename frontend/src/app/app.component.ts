import { Component, OnInit } from '@angular/core';
import { TaskService } from './services/task.service';

interface Task {
  id: number;
  title: string;
  completed: boolean;
  isEditing: boolean;
  updatedTitle: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todoList: Task[] = [];
  newTodo: string = '';
  showTasks: boolean = false;
  isImageVisible: boolean = true;
  pageTitle: string = 'TODO List';
  nextId: number = 1;

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.loadTasks();
  }

  toggleTasksVisibility() {
    this.showTasks = !this.showTasks;
    this.isImageVisible = !this.isImageVisible;

    this.updatePageTitle();
    this.updateBodyAlignment();
  }

  updatePageTitle() {
    this.pageTitle = this.showTasks ? 'Tarefas Pendentes' : 'TODO List';
  }

  updateBodyAlignment() {
    document.body.style.alignItems = this.showTasks ? 'flex-start' : 'center';
  }

  loadTasks() {
    this.taskService.getTasks().subscribe((tasks: Task[]) => {
      this.todoList = tasks.map(task => ({ ...task, isEditing: false, updatedTitle: task.title }));
    });
  }

  addTodo() {
    if (this.newTodo) {
      const newTask: Task = {
        id: this.nextId,
        title: this.newTodo,
        completed: false,
        isEditing: false,
        updatedTitle: this.newTodo
      };

      this.taskService.createTask(newTask).subscribe(() => {
        this.newTodo = '';
        this.loadTasks();
        this.nextId++;
      });
    }
  }

  startEditing(task: Task) {
    this.todoList.forEach(item => (item.isEditing = false));
    task.isEditing = true;
  }

  confirmEdit(task: Task) {
    task.isEditing = false;
    task.title = task.updatedTitle;
    this.editTask(task);
  }

  editTask(task: Task) {
    this.taskService.updateTask(task).subscribe(() => {
      this.loadTasks();
    });
  }

  removeTodo(taskId: number) {
    this.taskService.deleteTask(taskId).subscribe(() => {
      this.loadTasks();
    });
  }

  toggleCompleted(task: Task) {
    task.completed = !task.completed;
    this.editTask(task);
  }
}

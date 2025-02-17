import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-kanban-board',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss']
})
export class KanbanBoardComponent {
  columns = ['Pendiente', 'En progreso', 'Completado'];
  searchQuery = '';
  tasks = [
    { title: 'Tarea 1', status: 'Pendiente', priority: 'Urgente', assignedTo: 'Pedro Gómez', dueDate: '2025-02-18', labels: ['Urgente'], history: [] },
    { title: 'Tarea 2', status: 'En progreso', priority: 'Alta', assignedTo: 'Juana González', dueDate: '2025-02-20', labels: ['Frontend'], history: [] },
    { title: 'Tarea 3', status: 'Completado', priority: 'Media', assignedTo: 'María López', dueDate: '2025-02-20', labels: ['Frontend', 'Backend'], history: [] },
    { title: 'Tarea 4', status: 'Completado', priority: 'Baja', assignedTo: 'María López', dueDate: '2025-02-20', labels: ['Frontend', 'Backend'], history: [] },
    { title: 'Tarea 5', status: 'En progreso', priority: 'Opcional', assignedTo: 'María López', dueDate: '2025-02-20', labels: ['Frontend', 'Backend'], history: [] },


  ];

  editingTask: any = null;
  newTask: any = { title: '', status: 'Pendiente', priority: 'Media', assignedTo: '', dueDate: '', labels: [] };
  showTaskForm = false;
  showEditForm = false;

  getTasksForColumn(column: string) {
    return this.tasks
      .filter(task => task.status === column)
      .filter(task => task.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
  }

  deleteTask(task: { title: string; status: string; priority: string; assignedTo: string; dueDate: string; labels: string[]; history: never[]; }) {
    this.tasks = this.tasks.filter(t => t !== task);
  }

  editTask(task: any) {
    this.editingTask = { ...task };
    this.showEditForm = true;
  }

  saveTask() {
    const index = this.tasks.findIndex(t => t.title === this.editingTask.title);
    if (index !== -1) {
      this.tasks[index] = this.editingTask;
    }
    this.editingTask = null;
    this.showEditForm = false;
  }

  toggleTaskForm() {
    this.showTaskForm = !this.showTaskForm;
  }

  addTask() {
    if (this.newTask.title.trim()) {
      this.tasks.push({ ...this.newTask });
      this.newTask = { title: '', status: 'Pendiente', priority: 'Media', assignedTo: '', dueDate: '', labels: [] };
      this.showTaskForm = false;
    }
  }
}

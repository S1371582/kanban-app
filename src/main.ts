import { bootstrapApplication } from '@angular/platform-browser';
import { KanbanBoardComponent } from './app/kanban-board/kanban-board.component';

bootstrapApplication(KanbanBoardComponent)
  .catch(err => console.error(err));

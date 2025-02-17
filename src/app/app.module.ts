import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';

@NgModule({
  imports: [BrowserModule, KanbanBoardComponent], // Aquí en imports, no en declarations
  providers: [],
})
export class AppModule { }

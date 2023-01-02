import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgChartsModule } from 'ng2-charts';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { FocusProjectComponent } from './focus-project/focus-project.component';
import { ListProjectComponent } from './list-project/list-project.component';

const routes: Routes = [
  { path: 'project-manager/projects', component: ListProjectComponent },
  { path: 'project-manager/project/:id', component: FocusProjectComponent },
  { path: 'project-manager/project/edit/:id', component: EditProjectComponent }
];

@NgModule({
  declarations: [
    EditProjectComponent,
    FocusProjectComponent,
    ListProjectComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes),FormsModule,NgChartsModule,]
})
export class ProjectModule {}

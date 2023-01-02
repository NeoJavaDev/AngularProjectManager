import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../model/project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html'
})
export class EditProjectComponent implements OnInit {

  @Input() project: Project|any;
  projects: Project[]|any;

  constructor(private projectService: ProjectService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects;
    const projectId: string|null = this.route.snapshot.paramMap.get('id');
    if(projectId) {
      this.projectService.getProjectById(+projectId)
      .subscribe(project => this.project = project);
    }
  }

  onSubmit() {
    console.log('Submit form !')
    this.router.navigate(['/project', this.project.id]);
  }

}

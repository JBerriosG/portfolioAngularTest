import { Component, inject} from '@angular/core';
import { ProjectsService } from '../projects.service';
import { PrevButtonComponent } from '../prev-button/prev-button.component';
import { NextButtonComponent } from '../next-button/next-button.component';
import { Owner, Repos } from '../interfaces/repos';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [PrevButtonComponent, NextButtonComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projectService = inject(ProjectsService);
  repos?:Repos[];
  owner?:Owner;
  languages:{name:string, value:number}[][] = [];
  
  constructor(){
    this.projectService.getAllRepos().then((reposList)=>{
      this.repos = reposList.sort((a,b)=>a.name.localeCompare(b.name)) ?? [];
      this.owner = this.repos[0].owner;
      let promises = [];
      for (let repo of this.repos) {
        promises.push(this.projectService.getAllLanguages(repo.name));
      }
      Promise.all(promises).then((languagesList)=>{
        this.languages = languagesList;
        console.log(this.languages);
      });
    }); 
  } 
}

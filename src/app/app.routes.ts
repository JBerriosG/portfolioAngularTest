import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
    {
        path:"",
        component:HomeComponent,
        title:"Home Page",
    },
    {
        path:"about",
        component:AboutComponent,
        title:"About Page",
    },
    {
        path:"projects",
        component:ProjectsComponent,
        title:"Projects page"
    }
];

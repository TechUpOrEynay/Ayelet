import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {ContactsComponent} from './components/contacts/contacts.component';
import {ContactDetailsComponent} from './components/contacts/contact/contact-details/contact-details.component';
import {ContactProjectsComponent} from './components/contacts/contact/contact-projects/contact-projects.component';
import {ContactFollowupComponent} from './components/contacts/contact/contact-followup/contact-followup.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {ProjectIntrestingComponent} from './components/projects/project/project-intresting/project-intresting.component';
import {ProjectVolunteerComponent} from './components/projects/project/project-volunteer/project-volunteer.component';
import {ProjectEmbedComponent} from './components/projects/project/project-embed/project-embed.component';
import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'projects' , component:ProjectsComponent} ,
  { path: 'contacts', component: ContactsComponent , 
  children:[
    {path: 'details/:currentContact', component: ContactDetailsComponent},
    {path: 'projects/:currentContact', component: ContactProjectsComponent},
    {path: 'followup/:currentContact', component: ContactFollowupComponent},
  ]},
  { path: 'projects', component: ProjectsComponent , 
  children:[
    {path: 'intresting/:currentProject', component: ProjectIntrestingComponent},
    {path: 'volunteer/:currentProject', component: ProjectVolunteerComponent},
    {path: 'embed/:currentProject', component: ProjectEmbedComponent},
  ]},
  { path: 'app-root', component: AppComponent },
  { path: 'nav-menu', component: NavMenuComponent },

  { path: '**', redirectTo: '/' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

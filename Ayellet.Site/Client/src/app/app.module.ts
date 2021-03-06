import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
// import {MATERIAL_COMPATIBILITY_MODE} from '@angular/material';
import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { ContactsService } from './services/contacts.service';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ContactComponent } from './components/contacts/contact/contact.component';
import { ContactDetailsComponent } from './components/contacts/contact/contact-details/contact-details.component';
import { ContactProjectsComponent } from './components/contacts/contact/contact-projects/contact-projects.component';
import { ContactProjectsVolunteerComponent } from './components/contacts/contact/contact-projects/contact-projects-volunteer/contact-projects-volunteer.component';
import { ContactProjectsInterstingComponent } from './components/contacts/contact/contact-projects/contact-projects-intersting/contact-projects-intersting.component';
import { ContactFollowupComponent } from './components/contacts/contact/contact-followup/contact-followup.component';
import { UserService } from './services/user.service';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectComponent } from './components/projects/project/project.component';
import { ProjectIntrestingComponent } from './components/projects/project/project-intresting/project-intresting.component';
import { ProjectVolunteerComponent } from './components/projects/project/project-volunteer/project-volunteer.component';
import { ProjectEmbedComponent } from './components/projects/project/project-embed/project-embed.component';
import { ProjectsService } from './services/projects.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditDialogComponent } from './components/dialogs/editDialog/editDialog.component';
import { AddDialogComponent } from './components/dialogs/addDialog/addDialog.component';
import { AddContactDialogComponent } from './components/dialogs/addContactDialog/addContactDialog.component';
import { LoginComponent } from './components/dialogs/loginDialog/login.component';
import { ConfirmDialogComponent } from './shared/components/confirm-dialog/confirm-dialog.component';
import { SuccessDialogComponent } from './shared/components/success-dialog/success-dialog.component';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { TabsModule } from 'ng2-tabs';
//import { MatSelectModule } from '@angular/material/select';
import { ExcelExportModule } from '@progress/kendo-angular-excel-export';
//import { GridModule } from '@progress/kendo-angular-grid';
import { Accordion, AccordionGroup } from './components/contacts/contact/contact-projects/accordion';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  //MatCoreModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,

  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  // MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    //DYNAMIC_DIRECTIVES,
    NavMenuComponent,
    HomeComponent,
    ConfirmDialogComponent,
    SuccessDialogComponent,
    EditDialogComponent,
    AddDialogComponent,
    AddContactDialogComponent,
    LoginComponent,
    ContactsComponent,
    ContactComponent,
    ContactDetailsComponent,
    ContactProjectsComponent,
    ContactFollowupComponent,
    ProjectsComponent,
    ProjectComponent,
    ProjectIntrestingComponent,
    ProjectVolunteerComponent,
    ProjectEmbedComponent,
    Accordion,
    AccordionGroup,
    ContactProjectsVolunteerComponent,
    ContactProjectsInterstingComponent
  ],
  imports: [
    MatExpansionModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,

    //MatCoreModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    //MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    BootstrapModalModule,
    TabsModule,
    ReactiveFormsModule,
    ExcelExportModule,
    //GridModule,
  ],
  providers: [ContactsService, UserService, ProjectsService],
  entryComponents: [ConfirmDialogComponent, SuccessDialogComponent, EditDialogComponent, AddDialogComponent, LoginComponent, AddContactDialogComponent
    , LoginComponent], //components that dynamic created  in code
  bootstrap: [AppComponent]
})
export class AppModule { }

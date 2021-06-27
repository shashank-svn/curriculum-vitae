import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CoverComponent } from './components/cover/cover.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { PersonalProjectsComponent } from './components/personal-projects/personal-projects.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    CoverComponent,
    SkillsComponent,
    EducationComponent,
    ExperienceComponent,
    PersonalProjectsComponent,
    HobbiesComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

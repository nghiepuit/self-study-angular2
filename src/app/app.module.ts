import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { ControlComponent } from './project/control/control.component';
import { CourseComponent } from './project/course/course.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    ControlComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

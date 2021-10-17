import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutMeModule } from 'src/modules/about-me/about-me.module';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ExperienceModule } from 'src/modules/experience/experience.module';
import { EducationModule } from 'src/modules/education/education.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AboutMeModule,
    BrowserModule,
    ExperienceModule,
    EducationModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

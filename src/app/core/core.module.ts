import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { ExperienceComponent } from './layout/experience/experience.component';
import { SummaryComponent } from './layout/summary/summary.component';
import { LanguagesComponent } from './layout/languages/languages.component';
import { SkillsComponent } from './layout/skills/skills.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    ExperienceComponent,
    SummaryComponent,
    LanguagesComponent,
    SkillsComponent
  ],
  imports: [CommonModule, CoreRoutingModule]
})
export class CoreModule {}

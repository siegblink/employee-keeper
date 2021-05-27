import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsRoutingModule } from './skills-routing.module';
import { SkillTableComponent } from './skill-table/skill-table.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [SkillTableComponent],
  imports: [CommonModule, SkillsRoutingModule, MatTableModule],
})
export class SkillsModule {}

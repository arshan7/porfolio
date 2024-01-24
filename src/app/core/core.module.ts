import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavModule } from './side-nav/side-nav.module';
import { RouterModule } from '@angular/router';
import { ToggleComponent } from './side-nav/toggle/toggle.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, SideNavModule, RouterModule],
  exports: [SideNavModule],
})
export class CoreModule {}

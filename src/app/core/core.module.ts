import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavModule } from './side-nav/side-nav.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, SideNavModule],
  exports: [SideNavModule],
})
export class CoreModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ToggleComponent } from './toggle/toggle.component';
import { MatIconModule } from '@angular/material/icon';
import { LinkItemComponent } from './link-item/link-item.component';
import { GetFirstKeyPipe } from '../Directives/GetKeyTransform';
import { IsArrayPipe, IsObjectPipe } from '../Directives/isObjectTransform';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SideNavComponent,
    ToggleComponent,
    LinkItemComponent,
    GetFirstKeyPipe,
    IsObjectPipe,
    IsArrayPipe,
  ],
  imports: [CommonModule, MatIconModule, RouterModule],
  exports: [SideNavComponent, ToggleComponent],
})
export class SideNavModule {}

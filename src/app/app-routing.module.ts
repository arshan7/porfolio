import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfessionalSummaryComponent} from './professional-summary/professional-summary.component'
import {SystemDesignComponent} from './system-design/system-design.component'

const routes: Routes = [
  { path: '', redirectTo: '/professional-summary', pathMatch: 'full' },
  { path: 'professional-summary', component: ProfessionalSummaryComponent },
  { path: 'professional-summary/system-design', component: SystemDesignComponent },
  // Add other routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

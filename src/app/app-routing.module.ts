import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DecisionButtonsComponent } from './decision-buttons/decision-buttons.component';
import { ProfileBrowsingComponent } from './profile-browsing/profile-browsing.component';

const routes: Routes = [
  {path:'', component: ProfileBrowsingComponent},
  {path:'profil', component: DecisionButtonsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

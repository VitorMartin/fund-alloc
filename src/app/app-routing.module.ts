import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreaksPageComponent } from './components/pages/breaks-page/breaks-page.component';
import { ChangesPageComponent } from './components/pages/changes-page/changes-page.component';
import { DesembsPageComponent } from './components/pages/desembs-page/desembs-page.component';
import { FundsPageComponent } from './components/pages/funds-page/funds-page.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: HomePageComponent },
  { path: 'breaks', component: BreaksPageComponent },
  { path: 'funds', component: FundsPageComponent },
  { path: 'desembs', component: DesembsPageComponent },
  { path: 'changes', component: ChangesPageComponent },

  { path: '404', component: NotFoundPageComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routing_components = [BreaksPageComponent]

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FilmPageComponent } from './pages/film-page/film-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/homePage', pathMatch: 'full' },
  { path: 'homePage', component: HomePageComponent },
  { path: 'films', component: FilmPageComponent },
  { path: 'people', loadChildren: () => import("./pages/people-page/people-page.module.ts.module").then(m => m.PeoplePageModuleTsModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

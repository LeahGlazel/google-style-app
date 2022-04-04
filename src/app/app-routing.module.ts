import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchContainerComponent } from './search-container/search-container.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/search',
    pathMatch: 'full'
  },
  {
    path: 'search',
    component: SearchContainerComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

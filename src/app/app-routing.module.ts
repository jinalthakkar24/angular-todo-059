import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import {TodosComponent} from './components/todos/todos.component';

const routes: Routes = [ 
   { path: '', component: TodosComponent },
   { path: 'about', loadChildren: () => import('./components/pages/about/about.module').then(m => m.AboutModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

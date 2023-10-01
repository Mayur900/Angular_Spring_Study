import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './componets/view/view.component';
import { CreateComponent } from './componets/create/create.component';
import { UpdateComponent } from './componets/update/update.component';

const routes: Routes = [
  {
    path: '',
    component: CreateComponent,
    pathMatch:'full'
  },
  {
    path: 'employees',
    component: ViewComponent,
    pathMatch:'full'
  },
  {
    path: 'update/:id',
    component: UpdateComponent,
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

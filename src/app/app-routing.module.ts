import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { ListBoxComponent } from './components/list-box/list-box.component';

const routes: Routes = [
  { path: '', component: ListBoxComponent },
  { path: 'listbox', component: ListBoxComponent },
  { path: 'table', component: TableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

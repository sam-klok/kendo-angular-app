import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GridPanelComponent } from './grid-panel/grid-panel.component';
import { GridSecondComponent } from './grid-second/grid-second.component';

const routes: Routes = [
  { path: 'gridfirst', component: GridPanelComponent},
  { path: 'gridsecond', component: GridSecondComponent},
  { path: '**', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

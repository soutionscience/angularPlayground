import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from '../app.component';
import { WebsiteComponent } from '../website/website.component';


const routes: Routes =[
  {path: '', loadChildren: './website.module#WebsiteModule'},
  {path: '', redirectTo: 'dapps/playground', pathMatch: 'full'},

]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
 // exports:[RouterModule, AppComponent],
  declarations: [AppComponent]
})
export class AppRoutingModule { }

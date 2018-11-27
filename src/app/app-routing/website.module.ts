import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WebsiteComponent } from '../website/website.component';
import { HomeComponent } from '../home/home.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { BannerComponent } from '../banner/banner.component';
import { FooterComponent } from '../footer/footer.component';


const routes: Routes =[
  {path: '', component: WebsiteComponent, children: [
    {path: '', loadChildren: './home.module#HomeModule' },
    {path: 'dapps/playground', loadChildren: './playground.module#PlaygroundModule'}
  ]}
 
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WebsiteComponent,FooterComponent, NavbarComponent]
})
export class WebsiteModule { }

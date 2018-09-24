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
    {path: 'home', loadChildren: './home.module#HomeModule' }
  ]}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WebsiteComponent, NavbarComponent, FooterComponent, BannerComponent]
})
export class WebsiteModule { }

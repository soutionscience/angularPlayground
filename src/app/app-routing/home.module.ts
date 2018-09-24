import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { CertificationsComponent } from '../certifications/certifications.component';
import { ProjectsComponent } from '../projects/projects.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { BannerComponent } from '../banner/banner.component';





const routes: Routes =[
  {path: '', component: HomeComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeComponent, CertificationsComponent, ProjectsComponent, BannerComponent]
})
export class HomeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from '../projects/projects.component';
import { CertificationsComponent } from '../certifications/certifications.component';
import { Routes, RouterModule } from '@angular/router';
import { WebsiteComponent } from '../website/website.component';

const routes: Routes =[
  {path: '', component: WebsiteComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProjectsComponent, CertificationsComponent, WebsiteComponent]
})
export class PortfolioModule { }

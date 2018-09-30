import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaygroundPageComponent } from '../playground-page/playground-page.component';
import { Routes, RouterModule } from '@angular/router';
import { MetamaskCheckComponent } from '../metamask-check/metamask-check.component';
import { UnlockComponent } from '../unlock/unlock.component';
import { ConnectComponent } from '../connect/connect.component';


const routes: Routes =[
  {path:'', component: PlaygroundPageComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PlaygroundPageComponent, MetamaskCheckComponent, UnlockComponent, ConnectComponent]
})
export class PlaygroundModule { }

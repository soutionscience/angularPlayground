import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaygroundPageComponent } from '../playground-page/playground-page.component';
import { Routes, RouterModule } from '@angular/router';
import { MetamaskCheckComponent } from '../metamask-check/metamask-check.component';
import { UnlockComponent } from '../unlock/unlock.component';
import { ConnectComponent } from '../connect/connect.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SendComponent } from '../send/send.component';
import { CompileComponent } from '../compile/compile.component';
import { DeployComponent } from '../deploy/deploy.component';
import { InvokeComponent } from '../invoke/invoke.component';


const routes: Routes =[
  {path:'', component: PlaygroundPageComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [PlaygroundPageComponent, MetamaskCheckComponent, UnlockComponent, ConnectComponent, SendComponent, CompileComponent, DeployComponent, InvokeComponent]
})
export class PlaygroundModule { }

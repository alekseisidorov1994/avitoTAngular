import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WallPageComponent} from './pages/wall-page/wall-page.component';
import {OverlayImagePageComponent} from './pages/overlay-image-page/overlay-image-page.component';


const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: WallPageComponent, children:[
      {path: 'id/:imageId', component: OverlayImagePageComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotoComponent } from './components/photo/photo.component';
import {HttpClientModule} from '@angular/common/http';
import { WallPageComponent } from './pages/wall-page/wall-page.component';
import { OverlayImagePageComponent } from './pages/overlay-image-page/overlay-image-page.component';
import { WindowCommentComponent } from './components/window-comment/window-comment.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PhotoComponent,
    WallPageComponent,
    OverlayImagePageComponent,
    WindowCommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

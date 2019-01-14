import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {TableModule} from 'primeng/table';
import {FoodService, ModalService} from './services';
import {ComponentsModule} from './components/components.module';
import {LayoutModule} from './layout/layout.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    ComponentsModule,
    HttpClientModule,
    LayoutModule,
    TableModule
  ],
  providers: [FoodService, ModalService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

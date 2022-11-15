import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProvinciasSelectComponent } from './provincias-select/provincias-select.component';
import { ArticulosListComponent } from './articulos-list/articulos-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProvinciasSelectComponent,
    ArticulosListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

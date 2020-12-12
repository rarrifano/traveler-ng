import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// Habilitar formatação de moeda e data em português
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

/*****/
import { MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
/*****/

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainToolbarComponent } from './ui/main-toolbar/main-toolbar.component';
import { MainFooterComponent } from './ui/main-footer/main-footer.component';
import { MainMenuComponent } from './ui/main-menu/main-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NotaListComponent } from './nota/nota-list/nota-list.component';

import { UsuarioListComponent } from './usuario/usuario-list/usuario-list.component';
import { NotaFormComponent } from './nota/nota-form/nota-form.component';
import { UsuarioFormComponent } from './usuario/usuario-form/usuario-form.component';


@NgModule({
  declarations: [
    AppComponent,
    MainToolbarComponent,
    MainFooterComponent,
    MainMenuComponent,
    NotaListComponent,
    UsuarioListComponent,
    NotaFormComponent,
    UsuarioFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
  // No app.module.ts, dentro seção providers
  /**** Datas em português no MatDatepicker  ****/
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }
  /**********************************************/        
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

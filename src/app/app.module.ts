import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//import { ContadorComponent } from './contador/contador/contador.component';
//import { HeroeComponent } from './heroes/heroe/heroe.component';
//import { ListadoComponent } from './heroes/listado/listado.component';
import { heroesModule } from './heroes/heroes.module';
import { contadorModule } from './contador/contador.module';

//Crear contador module, con declareaciones y exportaciones

@NgModule({
  declarations: [
    AppComponent,
  //  ContadorComponent
   // HeroeComponent,
    //ListadoComponent
  ], 
  imports: [
    BrowserModule,
    heroesModule,
    //importar module
    contadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

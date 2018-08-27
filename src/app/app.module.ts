import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Servicio para consumo APi REST
import { ServicioappService} from './servicioapp.service'; 

import { AppComponent } from './app.component';
import { NavEncabezadoComponent } from './nav-encabezado/nav-encabezado.component';
import { FooterComponent } from './footer/footer.component';
import { AgregarpostComponent } from './agregarpost/agregarpost.component';
import { ListarpostComponent } from './listarpost/listarpost.component';
import { ErrorComponent } from './error/error.component';

//HTTP 

import {HttpClientModule} from '@angular/common/http';
import { BuscarpostComponent } from './buscarpost/buscarpost.component'; 




const routes: Routes = [
  { path: 'agregar', component: AgregarpostComponent },
  { path: 'buscar/:id', component: BuscarpostComponent  },
  { path: 'error', component: ErrorComponent },
  { path: '', component: ListarpostComponent , pathMatch: 'full' },
  { path: '**', redirectTo: 'error', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    NavEncabezadoComponent,
    FooterComponent,
    AgregarpostComponent,
    ListarpostComponent,
    ErrorComponent,
    BuscarpostComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [ServicioappService],
  bootstrap: [AppComponent]
})
export class AppModule { }

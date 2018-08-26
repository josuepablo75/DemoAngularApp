import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavEncabezadoComponent } from './nav-encabezado/nav-encabezado.component';
import { FooterComponent } from './footer/footer.component';
import { AgregarpostComponent } from './agregarpost/agregarpost.component';
import { ListarpostComponent } from './listarpost/listarpost.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: 'agregar', component: AgregarpostComponent },
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
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

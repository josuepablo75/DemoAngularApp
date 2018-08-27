import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ServicioappService} from './../servicioapp.service';  

@Component({
  selector: 'app-buscarpost',
  templateUrl: './buscarpost.component.html',
  styleUrls: ['./buscarpost.component.css']
})
export class BuscarpostComponent implements OnInit {

  
  items: any ={
    title: '',
    body: ''
  }

  constructor( private ruta: ActivatedRoute , private _servicio: ServicioappService)
  {
    this.ruta.params.subscribe(
      params => {
       // console.log(params['id'])
       this._servicio.buscarItem(params['id']).subscribe(
        data => { 
          this.items = data
        // console.log(this.items); 
        } )

      }
    )
  }

  ngOnInit() {
  }

}

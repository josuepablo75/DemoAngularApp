import { Component, OnInit } from '@angular/core';
import {ServicioappService} from './../servicioapp.service'; 

@Component({
  selector: 'app-listarpost',
  templateUrl: './listarpost.component.html',
  styleUrls: ['./listarpost.component.css']
})
export class ListarpostComponent implements OnInit {

   items: any[ ] = [] ; 

   editar: any ={
     title: '',
     body: ''
   }

  constructor( private _servicio: ServicioappService) {
    this._servicio.getLista().subscribe(
      data => { 
        this.items = data
      // console.log(this.items); 
      } )

    
   }

  ngOnInit() {
  
   
  }

  eliminarItem(id){
    this._servicio.eliminarItems(id).subscribe(
      data => 
       
      console.log("Eliminado Id: "+ id)

    )
  }

  editarItem(item)
  { 
    this.editar = item; 
  }

  agregarItemEditado()
  {
    this._servicio.editarItem(this.editar).subscribe(
      (data:any[]) => 
      {
          console.log(data);       
      }
    )
  }
}

import { Component} from '@angular/core';
//import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent  {

  heroes: String[] = ['IronMan','Goku','Holk','Thor','Spiderman']; 
  indice: number = 0; 
  heroeBorrado : String ="";
  borrarHeroe():void{
 
    /* Borra siempre el primero
    const heroe = this.heroes.shift();
    console.log(heroe);
*/
  // Borra aleatoriamente una posicion -limpia valor 
    console.log("Borrar:" , Math.random() );
    this.indice = Math.floor( Math.random()*( this.heroes.length - 0+1 )+0 );
    console.log("Borrar:" , this.indice );
    this.heroeBorrado = this.heroes[this.indice];
    console.log("temporal Heroe: " , this.heroeBorrado );
    //Limpia
    //this.heroes[this.indice]= "";
    //Elimina
    this.heroes.splice(this.indice,1);

  }
//export class ListadoComponent implements OnInit {
/*
  constructor() { 
    console.log("Constructor");
  }

  ngOnInit(): void {
    console.log("ngOnInit");
  }
*/
}

import { Component } from '@angular/core'

@Component({
    selector: 'app-contador',
    template: `

        <h1>{{titulo }}</h1>
        <h3>La base es: {{base }}</h3>

        <button (click)="acumular( +base );">+{{base }}</button>

        <h1>{{numero }}</h1>

        <button (click)="acumular(-base);">-{{base }}</button>    
     
        ` 
})

export class ContadorComponent{

    titulo: String = 'Contador App';
    numero: number = 10;
    base:   number = 5;
  
    acumular(valor: number){
      this.numero += valor;
    }
}
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent implements OnInit {

ngOnInit(): void {
 this.mensaje='Escriba aca el mensaje';
}
mensaje: string='';

@Output() enviarEscritoAChat=new EventEmitter<string>();


onEnviarEscritoAChat(mensaje:string){
  this.enviarEscritoAChat.emit(`${mensaje}`);
  console.log('mensajeenviado a padre',mensaje);
  
  this.mensaje='';
}


}

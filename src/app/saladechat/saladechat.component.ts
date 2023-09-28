import { Component } from '@angular/core';

@Component({
  selector: 'app-saladechat',
  templateUrl: './saladechat.component.html',
  styleUrls: ['./saladechat.component.css']
})
export class SaladechatComponent {
  titulo:string='sala de chat';
  nombre:string='Carlos';

  recibirMensajeDeUsuario:string='';

  onMensajeRecibido(event:string){
    this.recibirMensajeDeUsuario += event + '\n';
  }


  


}

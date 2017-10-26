import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service'
import  { Client } from '../../models/Client';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients:Client[];
  totalOwned:number;
  constructor(
    public clientService:ClientService
  ) { 
    
  }

  ngOnInit() {
      this.clientService.getClients().subscribe(clients =>  {
      this.clients=clients;
      this.getTotalOwned();
    });
  }
  getTotalOwned(){
    let total:number = 0;
    for(let i=0; i<this.clients.length;i++){
      total = total + parseFloat(this.clients[i].balance+"");
     }
     console.log(total);
     this.totalOwned=total;
  }

}

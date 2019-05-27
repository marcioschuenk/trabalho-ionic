import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-cliente',
  templateUrl: './list-cliente.page.html',
  styleUrls: ['./list-cliente.page.scss'],
})
export class ListClientePage implements OnInit {

  private clientes$: Observable<any[]>;

  constructor(
    private clienteService: ClienteService
  ) { }

  ngOnInit() {
    this.clientes$ = this.clienteService.getAll();
  }

  doRefresh(event) {
    console.log('Begin async operation');
    
    this.clientes$ = this.clienteService.getAll();   

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
}
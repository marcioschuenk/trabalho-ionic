import { Component, OnInit } from '@angular/core';
import { ServicoService } from '../servico.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-servico',
  templateUrl: './list-servico.page.html',
  styleUrls: ['./list-servico.page.scss'],
})
export class ListServicoPage implements OnInit {

  private servicos$: Observable<any[]>;

  constructor(
    private servicoService: ServicoService
  ) { }

  ngOnInit() {
    this.servicos$ = this.servicoService.getAll();
  }

  doRefresh(event) {
    console.log('Begin async operation');
    
    this.servicos$ = this.servicoService.getAll();   

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
}

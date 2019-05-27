import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private db: AngularFireDatabase) { }

  getAll() {
    return this.db.list('clientes').snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      )
  }

  save(cliente: Cliente) {
    return this.db.list("clientes").push(cliente)
      // .then(
      //   res => {
      //     cliente.id = res.key;
      //     res.set(cliente);
      //   }
      // );
  }









  
  // //Local
  // gerarKey() {
  //   for (let i = 0; i < localStorage.length; i++) {
  //     let key = localStorage.key(i);
  //     let value = localStorage.getItem(key);
  //     console.log(key, value);
  //   }
  //   return localStorage.length + 1;
  // }
  // save(cliente: Cliente) {

  //   localStorage.setItem(this.gerarKey().toString(),JSON.stringify(cliente));
  // }
}

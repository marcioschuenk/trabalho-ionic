import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

import { Servico } from './servico';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  constructor(private db: AngularFireDatabase) { }

  getAll() {
    return this.db.list('servicos').snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      )
  }

  save(Servico: Servico) {
    return this.db.list("servicos").push(Servico)
    // .then(
    //   res => {
    //     cliente.id = res.key;
    //     res.set(cliente);
    //   }
    // );
  }
  }
import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Pensamento } from '../penamento';
import { PensamentoService } from '../pensamento.service';
=======
>>>>>>> be12e6eef673c7474045b25b120a37eb20416bde

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit {

<<<<<<< HEAD
  listaPensamentos: Array<Pensamento> = [];

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos;
    })
=======
  constructor() { }

  ngOnInit(): void {
>>>>>>> be12e6eef673c7474045b25b120a37eb20416bde
  }

}

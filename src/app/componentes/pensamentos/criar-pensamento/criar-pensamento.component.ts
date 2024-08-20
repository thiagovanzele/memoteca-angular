import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../penamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }

  constructor(private service: PensamentoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  criarPensamento() {
<<<<<<< HEAD
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarpensamento'])
    });
=======
    alert('Novo pensamento');
>>>>>>> be12e6eef673c7474045b25b120a37eb20416bde
  }

}

import { Component, OnInit } from '@angular/core';
import { Item } from 'src/models/item.model';
import { ItensService } from 'src/services/itens.service';

@Component({
  selector: 'app-novo-item',
  templateUrl: './novo-item.component.html',
  styleUrls: ['./novo-item.component.scss']
})

export class NovoItemComponent implements OnInit {

  nome: string
  numero: number

  constructor( private service: ItensService) { }

  ngOnInit(): void {
  }

  salvarItem() {
    const novoItem: Item =  {
        nome: this.nome,
        numero: this.numero
      }
    this.service.adicionar(novoItem).subscribe( resultado => {
      console.log( resultado )
      this.limparCampos()
    },
      error => console.error(error)
    )
    
  }

  limparCampos() {
    this.nome = ''
    this.numero = undefined
  }

}

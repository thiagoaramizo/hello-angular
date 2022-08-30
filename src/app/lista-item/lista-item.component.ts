import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/models/item.model';
import { ItensService } from 'src/services/itens.service';

@Component({
  selector: 'app-lista-item',
  templateUrl: './lista-item.component.html',
  styleUrls: ['./lista-item.component.scss']
})
export class ListaItemComponent implements OnInit {

  itens: Item[]

  constructor( private service: ItensService) { }

  ngOnInit(): void {
    this.service.getAPILista().subscribe( ( itens: Item[] ) => {
      this.itens = itens
    })
  }

}

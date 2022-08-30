import { Component } from '@angular/core';
import { ItensService } from 'src/services/itens.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor( private service: ItensService) {}

}

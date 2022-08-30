import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Item } from "src/models/item.model";
import { Observable } from "rxjs";

@Injectable( {
    providedIn: 'root'
})

export class ItensService {

    private _itens: any[]
    private url = 'http://localhost:3000/itens'

    constructor( private httpClient: HttpClient ) {
        this._itens = []
    }

    get itens(){
        return this._itens
    }

    adicionar( item: Item ): Observable<Item>{
        return this.httpClient.post<Item>( 
            this.url, 
            this.tratamentoItem(item)
        )
    }

    getAPILista(): Observable<Item[]> {
        return this.httpClient.get<Item[]>(this.url)
    }

    private tratamentoItem( item: any ){
        return {...item, data: new Date()}
    }

}
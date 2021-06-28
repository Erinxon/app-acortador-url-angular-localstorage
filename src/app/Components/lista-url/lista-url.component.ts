import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-url',
  templateUrl: './lista-url.component.html',
  styleUrls: ['./lista-url.component.css']
})
export class ListaUrlComponent implements OnInit {
  listaUrl: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.getUrls();
  }

  getUrls(): void {
    let localStoraUrls = localStorage.getItem('url')!;
    if(localStoraUrls !==null){
       this.listaUrl = Object.values(JSON.parse(localStoraUrls));
    }
  }

  eliminarUrlLocalStorage(index: number): void {
    this.listaUrl.splice(index,1);
    localStorage.setItem('url', JSON.stringify(this.listaUrl));
  }

}

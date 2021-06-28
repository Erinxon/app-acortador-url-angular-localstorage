import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GenerarUrlService } from 'src/app/Services/generar-url.service';

@Component({
  selector: 'app-generar-url',
  templateUrl: './generar-url.component.html',
  styleUrls: ['./generar-url.component.css']
})
export class GenerarUrlComponent implements OnInit {
  urlForm =  new FormGroup({
    url: new FormControl('', Validators.required),
    IsGuardar: new FormControl(false)
  });
  isLoanding: boolean = false;
  mostrarUrl: any = {
    url: '',
    mostrar: false
  }
  errores: any = {
    isError: false,
    textError: ''
  }
  constructor(private _generalUrl: GenerarUrlService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.isLoanding = true;
    this.mostrarUrlAcortada('', false);
    this.setError('',false)
    this._generalUrl.getUrlShort(this.urlForm.get('url')?.value).subscribe(u => {
      this.mostrarUrlAcortada(u.link, true);
      if(this.urlForm.get('IsGuardar')?.value){    
        this.SaveUrlLocalStorage(u.long_url, u.link)
      }
      this.ResetForm();
      this.isLoanding = false;
    }, error => {
      this.isLoanding = false;
      this.setError(error.error.description,true)
    })
  }

  SaveUrlLocalStorage(long_url: string, shortUrl: string): void {
    let localStoraUrls = localStorage.getItem('url')!;
    if(localStoraUrls === null){
      this.SaveIsNotExisteUrlLocalStorage(long_url,shortUrl);
    }else{
      this.SaveIsExisteUrlLocalStorage(localStoraUrls, long_url,shortUrl);
    }
  }

  SaveIsNotExisteUrlLocalStorage(long_url: string, shortUrl: string): void {
    let listUrl = [ { 'long_url': long_url, 'Shorturl': shortUrl } ];
    localStorage.setItem('url', JSON.stringify(listUrl));
  }

  SaveIsExisteUrlLocalStorage(localStoraUrls: any, long_url: string, shortUrl: string): void {
      let listUrl = Object.values(JSON.parse(localStoraUrls));
      listUrl.push({
        'long_url': long_url,
        'Shorturl': shortUrl
      });
      localStorage.setItem('url', JSON.stringify(listUrl));
  }

  ResetForm(): void {
    this.urlForm.reset();
  }

  mostrarUrlAcortada(url: string, mostrar: boolean): void {
    this.mostrarUrl = {
      url: url,
      mostrar: mostrar
    };
  }

  setError(text: string, isError: boolean): void {
    this.errores =  {
      isError: isError,
      textError: text
   }
  }

}

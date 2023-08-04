import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor(private http:HttpClient) { }

  private apiKey: string ='KJJP9mDa0fEqV0IaHyUJEjNDU38Brye5';
  private _historial: string[] =[];

  public resultados:any[]=[];

  get historial(){
    return [...this._historial]
  }

  buscarGifs(query:string = ''){

    query = query.trim().toLocaleLowerCase();

    if(!this._historial.includes(query)){
      this._historial.unshift(query)
      this._historial = this._historial.splice(0,10);
    }

    this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=KJJP9mDa0fEqV0IaHyUJEjNDU38Brye5&q=${query}&limit=10`)
    .subscribe((resp:any) => {
      console.log(resp.data);
      this.resultados = resp.data;
    })
  }
}

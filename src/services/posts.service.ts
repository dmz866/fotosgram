import { RespuestaPosts } from './../app/interfaces/interfaces';
import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const FOTOSGRAM_URL:string = environment.url;

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  paginaPosts: number = 0;

  constructor(private http: HttpClient) { }

  getPosts() {
    this.paginaPosts++;
    return this.http.get<RespuestaPosts>(`${FOTOSGRAM_URL}/posts/?pagina=${this.paginaPosts}`);
  }
}

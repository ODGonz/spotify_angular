import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  // Search Strings
  private searchURL: string;
  private artistURL: string;
  private artistAlbumURL: string;
  private albumURL: string;

  // Authorization Token for Spotify
  // Dev tokens are temporary and expire
  // Sign up for a token at https://developer.spotify.com/
  private token: string = '';

  constructor(private http: Http) { }

  // GET Requests to Spotify API

  //Search for artists by name
  searchMusic(str: string, type='artist'){
    let headers = new Headers();
    headers.append('Authorization', `Bearer ${this.token}`);
    this.searchURL = `https://api.spotify.com/v1/search?q=${str}&type=${type}`;

    return this.http.get(this.searchURL, {headers: headers}).pipe(map(res => res.json()));
  }

  // Get Artist by ID
  getArtist(id: string){
    let headers = new Headers();
    headers.append('Authorization', `Bearer ${this.token}`);
    this.artistURL = `https://api.spotify.com/v1/artists/${id}`;

    return this.http.get(this.artistURL, {headers: headers}).pipe(map(res => res.json()));
  }

  // Get Albums for an artist using artist ID
  getAlbums(artistId: string){
    let headers = new Headers();
    headers.append('Authorization', `Bearer ${this.token}`);
    this.artistAlbumURL = `https://api.spotify.com/v1/artists/${artistId}/albums`;

    return this.http.get(this.artistAlbumURL, {headers: headers}).pipe(map(res => res.json()));
  }

  // Get Album by ID
  getAlbum(albumId:string){
    let headers = new Headers();
    headers.append('Authorization', `Bearer ${this.token}`);
    this.albumURL = `https://api.spotify.com/v1/albums/${albumId}`;

    return this.http.get(this.albumURL, {headers: headers}).pipe(map(res => res.json()));
  }
}

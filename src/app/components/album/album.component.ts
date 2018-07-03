import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../../../Album';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  id: string;
  album: Album[];

  constructor(private spotify: SpotifyService, private route: ActivatedRoute) { }

  ngOnInit() {

    // ID in params is used to make a get request to spotify API via spotify service
    // updates the current album
    this.route.params.pipe(
      map(params => params['id'])).subscribe(id => {
        this.spotify.getAlbum(id).subscribe(album => {
          this.album = album;
        })
      })
  }

}

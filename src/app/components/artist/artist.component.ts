import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../../../Album';
import { Artist } from '../../../Artist';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {


  id:string;
  artist: Artist[];
  albums: Album[];

  constructor(private spotify: SpotifyService, private route:ActivatedRoute) { }

  // On init updates the current artist and albums
  ngOnInit() {
    this.route.params.pipe(

      // Use params ID to search for current artist via spotify Service
      map(params => params['id'])).subscribe(id => {
        this.spotify.getArtist(id).subscribe(artist => {
          this.artist = artist;
          console.log(this.artist);
        })

        // Uses ID to search for albums
        this.spotify.getAlbums(id).subscribe(albums => {
          this.albums = albums.items;
          console.log(this.albums)
        })
      })
  }

}

import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../../Artist';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  // Bound to input searchStr
  searchStr: string;

  // Response from spotify service used to append searched artists to HTML
  searchRes: Artist[];

  constructor(private spotify: SpotifyService) { }

  ngOnInit() {
  }

  // searchMusic is triggered every keyUp of search input
  // uses the searchStr bound to the input to search for artists matching the input
  searchMusic(){
    this.spotify.searchMusic(this.searchStr).subscribe(res => {

      // Update the array searchRes with the response from spotify service
      this.searchRes = res.artists.items;
    })
  }

}

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// Components
import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';

// Routes
const appRoutes: Routes = [
    {path: '', redirectTo: '/search', pathMatch:'full'},
    {path: 'search', component: SearchComponent },
    {path: 'about', component: AboutComponent},
    {path: 'artist/:id', component: ArtistComponent},
    {path: 'album/:id', component: AlbumComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class RoutingModule {};
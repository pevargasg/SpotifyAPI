import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';// to convert to json object

@Injectable()
export class SpotifyService{
    private searchUrl: string;
    private artistUrl: string;

    constructor(private _http:Http){
        
    }
    //method being called in the form in the html
    searchMusic(str:string, type='artist'){
        this.searchUrl = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=20&type='+type+'&market=US';
        return this._http.get(this.searchUrl)
            .map(res => res.json());
    }
    getArtist(id:string){
        this.artistUrl = 'https://api.spotify.com/v1/artist/'+id;
        return this._http.get(this.artistUrl)
        .map(res => res.json());
    }
}
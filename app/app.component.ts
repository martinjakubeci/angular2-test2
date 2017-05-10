import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
    selector: 'pm-app',
    template: `
        <h1>Find price</h1>
        <input name="title" class="form-control" (keydown)="performSearch(searchTerm)" #searchTerm>
        <button class="btn" (click)="performSearch(searchTerm)">Search</button>

        <div class="list-group">
            <div class="media" *ngFor="let p of products">
                <h3>{{p.Name}}</h3>
                <!--img src="{{p.ImageUrl}}"-->

                <div class="media" *ngFor="let price of p.Prices">
                    <h4>{{price.Name}} {{price.Price}}</h4>
                </div>
            </div>
        </div>
    `
})
export class AppComponent {
    http: Http;
    link = 'https://functionsc31beeec.azurewebsites.net/api/FunctionTest?code=MHFjci1Td01kM76nYGBGGqaLmchN6VKwlktOs45DCkfHYiQPs5UO2Q==&query=';
    products : any[] = [];

    constructor(http: Http) { 
        this.http = http; 
    }

    performSearch(searchTerm: HTMLInputElement) {
        var apiLink = this.link + searchTerm.value;

        this.http.request(apiLink)
            .subscribe((res: Response) => { 
                this.products = res.json();
                //alert(res.json());
            });
    }
}

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var AppComponent = (function () {
    function AppComponent(http) {
        this.link = 'https://functionsc31beeec.azurewebsites.net/api/FunctionTest?code=MHFjci1Td01kM76nYGBGGqaLmchN6VKwlktOs45DCkfHYiQPs5UO2Q==&query=';
        this.products = [];
        this.http = http;
    }
    AppComponent.prototype.performSearch = function (searchTerm) {
        var _this = this;
        var apiLink = this.link + searchTerm.value;
        this.http.request(apiLink)
            .subscribe(function (res) {
            _this.products = res.json();
            //alert(res.json());
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'pm-app',
        template: "\n        <h1>Find price</h1>\n        <input name=\"title\" class=\"form-control\" (keydown)=\"performSearch(searchTerm)\" #searchTerm>\n        <button class=\"btn\" (click)=\"performSearch(searchTerm)\">Search</button>\n\n        <div class=\"list-group\">\n            <div class=\"media\" *ngFor=\"let p of products\">\n                <h3>{{p.Name}}</h3>\n                <!--img src=\"{{p.ImageUrl}}\"-->\n\n                <div class=\"media\" *ngFor=\"let price of p.Prices\">\n                    <h4>{{price.Name}} {{price.Price}}</h4>\n                </div>\n            </div>\n        </div>\n    "
    }),
    __metadata("design:paramtypes", [http_1.Http])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
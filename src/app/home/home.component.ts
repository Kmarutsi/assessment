import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Countries, User } from '@/_models';
import { UserService, AuthenticationService } from '@/_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    currentUser: User;
    countries = [];

    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private _router: Router
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    viewUser(id: number) {
        this._router.navigate([id])
        this.userService.delete(id)
            .pipe(first())
            .subscribe(() => this.loadAllUsers());
            
    }

    // showConfig() {
    //     this.configService.getConfig()
    //       .subscribe((data: Config) => this.config = {
    //           heroesUrl: data.heroesUrl,
    //           textfile:  data.textfile,
    //           date: data.date,
    //       });
    //   }

    private loadAllUsers() {
        this.userService.getAll()
            .pipe(first())
            .subscribe((res:any) => this.countries = res.countryList);
            
       
    }
}
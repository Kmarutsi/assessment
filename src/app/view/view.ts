import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { Countries, User } from '@/_models';
import { UserService, AuthenticationService } from '@/_services';

@Component({ templateUrl: 'view.html' })
export class ViewComponent implements OnInit {
    currentUser: User;
    country: Countries;
    countries: []

    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
        // this.loadAllUsers();
        console.log(this.countries);
       
                this.userService.delete(1)
     
          
    }
    }
  



 

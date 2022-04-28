import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Countries, User } from '@/_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<{countryList:Countries[]}>(`http://localhost:9098/locations-management/v1/countries`)
    
    }
    getById() {
        return this.http.get<{countryList:Countries[]}>(`http://localhost:9098/locations-management/v1/countries`)
    
    }

    register(user: User) {
        return this.http.post(`${config.apiUrl}/users/register`, user);
    }

    delete(id: number) {
        return this.http.get(`http://localhost:9098/locations-management/v1/countries/id/${id}`);
    }
  
}
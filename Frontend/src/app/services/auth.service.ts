import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  authUser(user: any){
    let UserArray: User[]=[];
    if(localStorage.getItem('Users')){
      UserArray=JSON.parse(localStorage.getItem('Users') as string);
    }
    return UserArray.find(p => p.userName===user.userName && p.password===user.password);
  }
}

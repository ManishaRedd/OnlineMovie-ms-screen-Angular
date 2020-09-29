import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login';
import {Screen} from './screen';

@Injectable({
  providedIn: 'root'
})
export class MovieService {


  baseUrl1="http://localhost:9080/screen/add";

  baseUrl2="http://localhost:9080/screen/update";

//we use HttpClientModule inorder to establish a connection between angular and sts
//we use HttpClient object to make the desired request 
  constructor(private http: HttpClient ) { }
  
  findUserLogin(username: string,password :string) : Observable<Login>{
    console.log("http://localhost:9080/admin/login/"+username+"/"+password);
    return this.http.get<Login>("http://localhost:9080/admin/login/"+username+"/"+password);
  }
  findScreenById(screenId : number) : Observable<Screen> {
    return this.http.get<Screen>("http://localhost:9080/theater/screen/"+screenId);

  }
   //Observable is used because the data is accessed for a particular amount of time
  //and the controller methods will return data as response entity

  findScreen(id:number,name:string) {
    return this.http.get("http://localhost:9080/screen/"+id+"/"+name,{observe:'response'});
   }
  getAllScreens() 
  {
      return this.http.get<Screen []>("http://localhost:9080/screen/all");
  }
  deleteScreenById(screen) : Observable<Screen>
  {
    
    return this.http.delete<Screen>("http://localhost:9080/screen/delete/id/{id}"+screen.screenId);
  }
  createScreen(screen: Screen): Observable<Screen> {
    return this.http.post<Screen>(`${this.baseUrl1}`, screen);

  }
  
  
  updateScreenById(screen:Screen): Observable<Screen> {
    return this.http.put<Screen>(`${this.baseUrl2}`, screen);
  }
 
}

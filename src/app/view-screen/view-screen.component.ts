import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MovieService } from '../movie.service';
import { Screen } from '../screen';

@Component({
  selector: 'app-view-screen',
  templateUrl: './view-screen.component.html',
  styleUrls: ['./view-screen.component.css']
})
export class ViewScreenComponent implements OnInit {

  id:number;
  // arr1 : Observable<Screen[]>;
  screens : Screen[];
  flag : boolean=false;
  constructor(private service : MovieService, private router : Router) { }

  ngOnInit(): void {
    this.service.getAllScreens().subscribe(response =>this.handleSuccessfulResponse(response),);
  }
    handleSuccessfulResponse(response)
  {
      this.screens=response;
  }
  deleteScreenById(screen: Screen): void {
    this.service.deleteScreenById(screen).subscribe( data => {
        this.screens = this.screens.filter(u => u !== screen);});
  }
  
   update(temp){
      this.screens = temp;
      temp = true;
    this.router.navigate(['/update']);

   }
}

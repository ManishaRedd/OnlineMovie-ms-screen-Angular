import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movie.service';
import { Screen } from '../screen';


@Component({
  selector: 'app-update-screen',
  templateUrl: './update-screen.component.html',
  styleUrls: ['./update-screen.component.css']
})
export class UpdateScreenComponent implements OnInit {
  id: number;
  submitted = false;
  id1: number;
  screen : Screen ;

  constructor(private service : MovieService,
    private router: Router , private route : ActivatedRoute) {
      

    }

  ngOnInit() {
    
    this.screen = new Screen();

    this.id = this.route.snapshot.params['id'];
 
   this.service.findScreenById(this.id).subscribe(data => {console.log(data) , this.screen= data; }, error => console.log(error));

   
  }

 view(){
  this.router.navigate(['showAll']);
  }
updateScreenById()
  {
    
    console.log(this.screen);
    this.service.updateScreenById(this.screen).subscribe(data => console.log(data), error => console.log(error));
    this.screen = new Screen();
    this.view();
  }
  onSubmit() {
    this.updateScreenById();
    this.submitted = true;
  }

  gotoList(){
    this.router.navigate(['showAll']);
  }

}
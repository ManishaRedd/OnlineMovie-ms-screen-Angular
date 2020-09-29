import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movie.service';
import { Screen } from '../screen';

@Component({
  selector: 'app-add-screen',
  templateUrl: './add-screen.component.html',
  styleUrls: ['./add-screen.component.css']
})
export class AddScreenComponent implements OnInit {

  id: number;
  screen : Screen = new Screen();
  temp : Object ;
  theaterid : number;
  submitted :boolean = false;

  constructor(private service : MovieService , private router : Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  newScreen(): void {
    this.submitted = false;
    this.screen = new Screen();
  }

  verify(){
  this.service.findScreen(this.id,this.screen.screenName).subscribe(data=>{this.router.navigate(['showAll',this.id]);
  alert(this.screen.screenName+" Already exist")},
  error=>{this.save(),console.log(error)});
  }

  save() {
    
    this.service.createScreen(this.screen).subscribe(data=> {alert("Screen created successfully");});
    this.router.navigate(['showAll']);
    
  }

  onSubmit() {
    this.submitted = true;
    this.verify();
  }
  
}

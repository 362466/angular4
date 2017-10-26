import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  constructor(private dataService:DataService) { 
    console.log("construtor");
  }

  ngOnInit() {
    this.name='Sagar Deep';
    this.age=30;
    this.email='rockysingh399@gmail.com';
    this.address = {
      street:"sprindale",
      city:"waukesha",
      state:"wi"
    }
    this.hobbies=['cricket','football','music'];
    this.dataService.getPosts().subscribe(
      (posts) => {
        console.log(posts);
      }
    );
    console.log("ngoninit");
  }
  onClick(){
    console.log("on Click clicked");
    
  }
  addHobby(hobby){
    this.hobbies.unshift(hobby);
    return false;
  }
  deletHobby(hobby){
    for(let i=0;i <this.hobbies.length;i++){
      if(this.hobbies[i]==hobby){
        this.hobbies.splice(i,1);
      }
    }
  }

}

interface Address{
  street:string,
  city:string,
  state:string
}
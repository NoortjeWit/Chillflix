import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  addMovieForm = new FormGroup({
    title: new FormControl(""),
    type: new FormControl(""),
    duration: new FormControl(""),
    genre:  new FormControl(""),
    image: new FormControl(""),
    videoId: new FormControl(""),
    rating: new FormControl(""),
    description: new FormControl(""),
  })

  constructor() { }

  ngOnInit() {
  }

  saveMovie(){
    console.log(this.addMovieForm.value)
  }

}

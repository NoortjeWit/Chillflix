import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { environment } from "src/environments/environment";
import { videos} from '../shared/stubs/videos';
import { IVideo } from '../video-module/video/video.interface';

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class AdminComponent implements OnInit {
  addMovieForm = new FormGroup({
    title: new FormControl(""),
    type: new FormControl(""),
    duration: new FormControl(""),
    genre: new FormControl(""),
    image: new FormControl(""),
    videoId: new FormControl(""),
    rating: new FormControl(""),
    description: new FormControl("")
  });

  constructor() {}

  ngOnInit() {}

  saveMovie() {
    console.log(this.addMovieForm.value);

    if (environment.enableStub) {
      console.log("stubs enabled");
      videos.push(this.addMovieForm.value as IVideo);
      this.addMovieForm.reset();
    }

  }

  formChanged() {

    return !this.addMovieForm.touched;
  }
}

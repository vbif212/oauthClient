import {Component, OnInit} from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private service: AppService) {
  }

  ngOnInit() {
    this.service.checkCredentials();
  }

  logout() {
    this.service.logout();
  }
}

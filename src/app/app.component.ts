import {Component, OnInit} from '@angular/core';
import {LoggingService} from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoggingService]
})
export class AppComponent implements OnInit{
  // names = [{firstName: 'Madhav'}, {firstName: 'Tarun'} ];
  names = [];

  constructor(private loggingService: LoggingService) {

  }

  ngOnInit() {
    this.names = this.loggingService.names;
  }

  onAddEmployee(firstName: string) {
    this.loggingService.logAddEmployee(firstName);
    this.names.push({firstName});
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'private-circle-assighnment';
  details = [];

  items = [
    {
      'date': 'April 15',
      'name': 'Aeione',
      'entitie': 5,
      'details': ["jabvkkkkkkkk hjdsfbasf jbfjaef",
        "vbjdvbnbfhj hjbdfjhaf n fjdf"]
    },
    {
      'date': 'April 15',
      'name': 'Aeione',
      'entitie': 5,
      'details': ["jabvkkkkkkkk hjdsfbasf jbfjaef",
        "vbjdvbnbfhj hjbdfjhaf n fjdf", "vbjdvbnbfhj hjbdfjhaf n fjdf", "vbjdvbnbfhj hjbdfjhaf n fjdf"]
    },
    {
      'date': 'April 15',
      'name': 'Aeione',
      'entitie': 5,
      'details': ["jabvkkkkkkkk hjdsfbasf jbfjaef",
        "vbjdvbnbfhj hjbdfjhaf n fjdf"]
    },
    {
      'date': 'April 15',
      'name': 'Aeione',
      'entitie': 5,
      'details': ["jabvkkkkkkkk hjdsfbasf jbfjaef",
        "vbjdvbnbfhj hjbdfjhaf n fjdf"]
    },
    {
      'date': 'April 15',
      'name': 'Aeione',
      'entitie': 5,
      'details': ["jabvkkkkkkkk hjdsfbasf jbfjaef",
        "vbjdvbnbfhj hjbdfjhaf n fjdf"]
    },
    {
      'date': 'April 15',
      'name': 'Aeione',
      'entitie': 5,
      'details': ["jabvkkkkkkkk hjdsfbasf jbfjaef",
        "vbjdvbnbfhj hjbdfjhaf n fjdf"]
    },
    {
      'date': 'April 15',
      'name': 'Aeione',
      'entitie': 5,
      'details': ["jabvkkkkkkkk hjdsfbasf jbfjaef",
        "vbjdvbnbfhj hjbdfjhaf n fjdf"]
    },

  ];

  showDetails(details) {
    console.log("bdvjdd");

    this.details = details;
  }
}

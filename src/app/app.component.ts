import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'private-circle-assighnment';
  details = [];
  searchText;

  items = [
    {
      'date': 'April 15',
      'name': 'Competitve Intelligence',
      'entitie': 0,
      'details': ["TCS Limited",
        "Infosys Limited"]
    },
    {
      'date': 'May 15',
      'name': 'BridgeLabz',
      'entitie': 5,
      'details': ["Think amd Learn PVT LTD",
        "Vodafoane Idea Ltd", "Swiggy", "Uber LTD"]
    },
    {
      'date': 'December 9',
      'name': 'Custom',
      'entitie': 15,
      'details': ["Cosmic eyes LTD",
        "Demo LTD"]
    },
    {
      'date': 'September 15',
      'name': 'To_mumbai',
      'entitie': 8,
      'details': ["Balaji Wafers Limited",
        "Haldirams Limited"]
    },
    {
      'date': 'November 1',
      'name': 'KPMG Comapny',
      'entitie': 14,
      'details': ["jabvkkkkkkkk hjdsfbasf jbfjaef",
        "vbjdvbnbfhj hjbdfjhaf n fjdf"]
    },
    {
      'date': 'August 5',
      'name': 'My vendors',
      'entitie': 5,
      'details': ["Openlane",
        "Yearin",
        "Goodsilron",
        "Condax",
        "Opentech"]
    },
    {
      'date': 'July 8',
      'name': 'Vickara',
      'entitie': 25,
      'details': ["Data now solutions",
        "Capgemini India"]
    },

  ];

  showDetails(details) {
    console.log("bdvjdd");

    this.details = details;
  }
}

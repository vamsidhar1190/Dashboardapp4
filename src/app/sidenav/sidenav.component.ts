import { Component, OnInit } from '@angular/core';


interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {


  cities!: City[];

  selectedCity!: City;

  ngOnInit() {
    this.dropdowndata()
     
  }

  isSearchBarOpen = false;
  showSearchInput = true;
  value!:string;

  isOpen = false;

  openSidebar: boolean = true;


  dropdowndata(){
    this.cities = [
      { name: 'Suresh', code: 'RM' },
      { name: 'Profile', code: 'NY' },
      { name: 'Edit Profile', code: 'RM' },
      
  ];
  }

  menuSidebar = [
    {
      link_name: "Dashboard",
      link: "/dashboard",
      icon: "bx bx bxs-home",
      sub_menu: [
        {
          link_name: 'Dashboard 1',
          link: '/dashboard'
        },
        {
          link_name: 'Dashboard 2',
          link: '/dashboard2'
        }
      ]   
    },
     {
      link_name: "Dashboard",
      link: "/",
      icon: "bx bxs-pie-chart-alt-2",
      sub_menu: []
    }, {
      link_name: "User",
      link: "/user",
      icon: "bx bxs-user",
      sub_menu: []
    }, {
      link_name: "Messages",
      link: "/messages",
      icon: "bx bxl-messenger",
      sub_menu: []
    },
    {
      link_name: "Date",
      link: "/date",
      icon: "bx bxs-calendar",
      sub_menu: []
    },
    {
      link_name: "Forms",
      link: "/forms",
      icon: "bx bx-receipt",
      sub_menu: []
    }
  ]


  showSubmenu(itemEl: HTMLElement) {
    itemEl.classList.toggle("showMenu");
  }

  isExpanded = false;

  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
  }

}


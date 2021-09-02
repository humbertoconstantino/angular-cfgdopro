import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  teste(){
    console.log("clicado")
  }
  fallen: string = "cl_crosshairalpha 255; cl_crosshaircolor 1; cl_crosshairdot 0; cl_crosshairgap -2; cl_crosshairsize 4; cl_crosshairstyle 4; cl_crosshairusealpha 1; cl_crosshairthickness 1; cl_crosshair_drawoutline 0; cl_crosshair_sniper_width 1;"

}

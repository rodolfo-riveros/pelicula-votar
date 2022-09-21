import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  movieTitle = "VOTE POR SU PELICULA FAVORITA";
  selectedIndex : number = -1;
  
  onVoteClick(index: number){
    if(this.isSelected(index)){
      this.selectedIndex = -1;
    }else{
      this.selectedIndex = index;
    }
  }
  getButtonText(index: number){
    if(this.isSelected(index)){
      return "No Votar";
    }else{
      return "votar";
    }
  }
  isSelected(index: number){
    return this.selectedIndex === index;
  }
  anySelected(){
    return this.selectedIndex !== -1;
  }
}

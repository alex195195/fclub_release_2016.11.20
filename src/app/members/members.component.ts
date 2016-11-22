import { Component, OnInit } from '@angular/core';
import {FirebaseService} from './firebase.service';
import {Member} from './Member';
import {Category} from './Category';

@Component({
  selector: 'fc-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  providers: [FirebaseService]
})
export class MembersComponent implements OnInit {

members:Member[];
  categories:Category[];
  appState: string;
  activeKey: string;


  activeName:string;
  activeCategory:string;
  activePicture:string;
  activePosition:string;
  activeData_both:string;
  activeGrowth:string;
  activeWeight:string;
  activeNumber:string;

  constructor(private _firebaseService:FirebaseService) {
  }
  
  ngOnInit(){
    this._firebaseService.getMembers().subscribe(members => {
      this.members = members;
    });
    
    this._firebaseService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  changeState(state, key){
    console.log('Changing state to: '+state);
    if(key){
      console.log('Changing key to: '+key);
      this.activeKey = key;
    }
    this.appState = state;
  }
  filterCategory(category){
    this._firebaseService.getMembers(category).subscribe(members=> {
      this.members = members;
    });
  }

  addMember(
    name:string,
    category:string,
    picture:string,
    position:string,
    data_both:string,
    growth:string,
    weight:string,
    number:string){
      var created_at = new Date().toString();
      
      var newMember = {
        name:name,
        category:category,
        picture:picture,
        position:position,
        data_both:data_both,
        growth:growth,
        weight:weight,
        number:number
      }
      
      //console.log(newBusiness);
      
      this._firebaseService.addMember(newMember);
      
      this.changeState('default','null');
  }

  showEdit(member){
      this.changeState('edit', member.$key);
      this.activeName =       member.name;
      this.activeCategory =   member.category;
      this.activePicture =    member.picture;
      this.activePosition =   member.position;
      this.activeData_both =  member.data_both;
      this.activeGrowth =     member.growth;
      this.activeWeight =     member.weight;
      this.activeNumber =     member.number;
  }

  updateMember(){
      var updMember = {
        name:this.activeName,
        category:this.activeCategory,
        picture:this.activePicture,
        position:this.activePosition,
        data_both:this.activeData_both,
        growth:this.activeGrowth,
        weight:this.activeWeight,
        number:this.activeNumber
      }
      
      this._firebaseService.updateMember(this.activeKey, updMember);
      
      this.changeState('default','null');
  }

  deleteMember(key){
    
      this._firebaseService.deleteMember(key);
      
      this.changeState('default','null');
  }

}

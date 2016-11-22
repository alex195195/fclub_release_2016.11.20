import {Injectable} from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';
import {Member} from './Member';
import {Category} from './Category';

@Injectable()
export class FirebaseService{
    members: FirebaseListObservable<Member[]>;
    categories: FirebaseListObservable<Category[]>;
    
    constructor(private _af: AngularFire){
    
    }
  
    getMembers(category:string = null){
        if(category != null){
            this.members = this._af.database.list('/members', {
                query: {
                    orderByChild: 'category',
                    equalTo: category
                }
            }) as 
            FirebaseListObservable<Member[]>
        } else {
            this.members  = this._af.database.list('/members ') as 
            FirebaseListObservable<Member[]>
        }
        
        return this.members ;
    }    
    
    getCategories(){
        this.categories = this._af.database.list('/categories') as 
        FirebaseListObservable<Category[]>
        return this.categories;
    }
    addMember(newMember){
        return this.members.push(newMember);
    }    
    updateMember(key, updMember){
        return this.members.update(key, updMember);
    }
    
    deleteMember(key){
        return this.members.remove(key);
    }
}


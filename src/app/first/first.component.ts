import {Component} from '@angular/core' ;

@Component({
  selector : 'app-first',
  templateUrl: 'first.commponent.html',
  styleUrls: ['first.component.css']
})
export class firstComponent{
  authorName:string = 'Rajeev';

  testInterpolation (){
    return 'returned from function';
  }

}

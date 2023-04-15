import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularProject';
  increaseFields: any = [
    {
      name: "",
      age: "",
      role: ""
    }
  ];
  showTable: boolean = false;
  generateNewContainer() {
    this.showTable = false
    this.increaseFields.push(
      {
        name: "",
        age: "",
        role: ""
      }
    )
    console.log(this.increaseFields);
  }
  decreaseContainer(i: any) {
    console.log(i);
    this.increaseFields.splice(i, 1)
  }
  submitData() {
    this.showTable = true
    localStorage.setItem("user-Data", JSON.stringify(this.increaseFields))
  }
}

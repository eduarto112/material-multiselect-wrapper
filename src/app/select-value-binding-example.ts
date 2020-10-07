import { Component, OnInit } from "@angular/core";

/** @title Select with 2-way value binding */
@Component({
  selector: "select-value-binding-example",
  templateUrl: "select-value-binding-example.html"
})
export class SelectValueBindingExample implements OnInit {

constructor(){
}

ngOnInit(): void {
  this.model[this.BindToProperty]=  {
      options: [
        {
          value: 1,
          label: "Extra cheese"
        },
        {
          value: 2,
          label: "Mushroom"
        },
        {
          value: 3,
          label: "Onion"
        },
        {
          value: 4,
          label: "Pepperoni"
        },
        {
          value: 5,
          label: "Sausage"
        },
        {
          value: 6,
          label: "Tomato"
        }
      ],
      selectedItems: []
    }
}


  public Configuration: any = {
    label: "Test Select",
    enabled: true,
    tooltipEna: true,
    tooltipLabel: "Test",
    selectMultiple: true,
    classes: "example-additional-selection"
  };
  model= new Map<string, any>();


  public TabViewModelRef: any = {
    model: this.model,
    type: "asdf",
    get_URL: "",
    post_URL: "",
    put_URL: "",
    delete_URL: "",
    detailsFormWindowSetupID: "",
    listFormWindowSetupID: ""
  };
  public BindToProperty: string = 'Select';

  asdf() {
    console.log(this.TabViewModelRef);
  }

  get labelForSelect (){
    let selectedItems : any[]=this.TabViewModelRef.model[this.BindToProperty]?.selectedItems;
    let items :any[]= this.TabViewModelRef.model[this.BindToProperty].options
    let index = items.indexOf(items.find(x=>x.value==selectedItems[0]))
    let label = selectedItems ? items[index].label : ''
    return label
  }
}

/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */

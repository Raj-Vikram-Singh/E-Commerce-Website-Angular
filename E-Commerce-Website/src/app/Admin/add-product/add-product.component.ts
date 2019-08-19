import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {


  productForm = this.fb.group({
    Address: [''],
    Name: [''],
    Description: [''],
    Price: [''],
    Category: [''],
    Quantity: [''],
    image: [''],
    Conditions: ['']

  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  
}

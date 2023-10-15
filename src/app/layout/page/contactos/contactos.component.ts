import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css'],
})

export class ContactosComponent {
  displayedColumns: string[] = ['adress', 'city', 'country', 'Postal_Code', 'edit', 'delete'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  mostrarFormulario = false;


  constructor(private fb: FormBuilder){}


  get _adress()       {return this.formUser.get('_adress') as FormControl;}
  get city()          {return this.formUser.get('city') as FormControl;}
  get country()       {return this.formUser.get('country') as FormControl;}
  get Postal_code()   {return this.formUser.get('Postal_code') as FormControl;}
  get AboutMe()       {return this.formUser.get('AboutMe') as FormControl;}

  formUser = this.fb.group({
    '_adress':      ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern(/^[a-zA-Z ]*$/)]],
    'city':         ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern(/^[a-zA-Z ]*$/)]],
    'country':      ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern(/^[a-zA-Z ]*$/) ]],
    'Postal_code':  ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern(/^[a-zA-Z ]*$/) ]],
    'AboutMe':      ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20),  Validators.pattern(/^[a-zA-Z ]*$/) ]]
  });


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  toggleFormulario() {
    this.mostrarFormulario = !this.mostrarFormulario;
  }

}


export interface PeriodicElement {
  adress: string;
  city: string;
  country: string;
  Postal_Code: number;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {adress: '123 Main St', city: 'City1', country: 'CountryA', Postal_Code: 12345},
  {adress: '456 Elm St', city: 'City2', country: 'CountryB', Postal_Code: 67890},
  {adress: '789 Oak St', city: 'City3', country: 'CountryC', Postal_Code: 54321},
  {adress: '101 Pine St', city: 'City4', country: 'CountryD', Postal_Code: 98765},
  {adress: '202 Cedar St', city: 'City5', country: 'CountryE', Postal_Code: 24680},
  {adress: '303 Maple St', city: 'City6', country: 'CountryF', Postal_Code: 13579},
  {adress: '404 Birch St', city: 'City7', country: 'CountryG', Postal_Code: 86420},
];

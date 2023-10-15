import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  displayedColumns: string[] = ['name', 'lastname', 'code', 'rol', 'dateTo', 'dateAd', 'edit', 'delete', ];
  dataSource = new MatTableDataSource<TableUsers>(ELEMENT_DATA);
  mostrarFormulario = false;


  constructor(
    private matDialog: MatDialog,
    private fb: FormBuilder) {}

    get name()
    {return this.formUser.get('name') as FormControl}
    get lastname()
    {return this.formUser.get('lastname') as FormControl}
    get code()
    {return this.formUser.get('code') as FormControl}
    get rol()
    {return this.formUser.get('rol') as FormControl}
    get dateTo()
    {return this.formUser.get('dateTo') as FormControl}
    get dateAd()
    {return this.formUser.get('dateAd') as FormControl}


    formUser = this.fb.group({
      'name':       ['', [Validators.required, Validators.minLength(3),      Validators.maxLength(20), Validators.pattern(/^[a-zA-Z ]*$/)]],
      'lastname':   ['', [Validators.required, Validators.minLength(3),  Validators.maxLength(20), Validators.pattern(/^[a-zA-Z ]*$/)]],
      'code':       ['', [Validators.required, Validators.minLength(3),      Validators.maxLength(20), ]],
      'rol':        ['', [Validators.required, Validators.minLength(3),       Validators.maxLength(20) ]],
      'dateTo':     ['', [Validators.required, ]],
      'dateAd':     ['', [Validators.required, ]],
    })

    @ViewChild(MatPaginator) paginator!: MatPaginator;

    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
    }

  openDialog() {
    this.matDialog.open(ModalComponent, {
      width: '350px',
    });
  }

  toggleFormulario() {
    this.mostrarFormulario = !this.mostrarFormulario;
  }

}


export interface TableUsers {
  name: string;
  lastname: string;
  code: number;
  rol: string;
  dateTo: Date;
  dateAd: Date;
}


const ELEMENT_DATA: TableUsers[] = [
  { name: 'Doe',        lastname: 'John',     code: 101,  rol: 'Admin',   dateTo: new Date('2023-09-20'),  dateAd: new Date('2021-01-15') },
  { name: 'Smith',      lastname: 'Alice',    code: 102,  rol: 'User',    dateTo: new Date('2023-08-15'),  dateAd: new Date('2022-03-10') },
  { name: 'Johnson',    lastname: 'Bob',      code: 103,  rol: 'Editor',  dateTo: new Date('2023-07-10'),  dateAd: new Date('2021-12-05') },
  { name: 'Williams',   lastname: 'Eva',      code: 104,  rol: 'Admin',   dateTo: new Date('2023-09-30'),  dateAd: new Date('2021-11-20') },
  { name: 'Brown',      lastname: 'Michael',  code: 105,  rol: 'User',    dateTo: new Date('2023-08-25'),  dateAd: new Date('2023-02-18') },
  { name: 'Lester',     lastname: 'Rey',      code: 104,  rol: 'Admin',   dateTo: new Date('2023-09-30'),  dateAd: new Date('2021-11-20') },
  { name: 'Samuel',     lastname: 'Filemon',  code: 105,  rol: 'User',    dateTo: new Date('2023-06-25'),  dateAd: new Date('2022-02-10') },
  { name: 'Josue',      lastname: 'Gustavo',  code: 104,  rol: 'Admin',   dateTo: new Date('2023-09-10'),  dateAd: new Date('2023-12-24') },
  { name: 'Mariana',    lastname: 'Garcia',   code: 105,  rol: 'User',    dateTo: new Date('2023-07-25'),  dateAd: new Date('2022-01-04') },
];


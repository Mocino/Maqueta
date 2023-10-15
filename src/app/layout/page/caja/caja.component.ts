import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'layout-caja',
  templateUrl: './caja.component.html',
  styleUrls: ['./caja.component.css']
})
export class CajaComponent {
  displayedColumns: string[] = ['codigo', 'descripcion', 'fechaIngreso', 'fechaHasta', 'estatus', 'codOficina', 'edit','delete']
  dataSource = new MatTableDataSource<TablaCajas>(ELEMENT_DATA);
  mostrarFormulario = false;

  constructor(private fb: FormBuilder) {}

  get codigo ()         {return this.formCaja.get('codigo') as FormControl}
  get descripcion ()    {return this.formCaja.get('descripcion') as FormControl}
  get fechaIngreso ()   {return this.formCaja.get('fechaIngreso') as FormControl}
  get fechaHasta ()     {return this.formCaja.get('fechaHasta') as FormControl}
  get estatus ()        {return this.formCaja.get('estatus') as FormControl}
  get codOficina ()     {return this.formCaja.get('codOficina') as FormControl}

  formCaja = this.fb.group({
      'codigo':       ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), ]],
      'descripcion':  ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern(/^[a-zA-Z ]*$/)]],
      'fechaIngreso': ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), ]],
      'fechaHasta':   ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), ]],
      'estatus':      ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern(/^[a-zA-Z ]*$/)]],
      'codOficina':   ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), ]],
  })

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
  }

  toggleFormulario(){
    this.mostrarFormulario = !this.mostrarFormulario;
  }

}


export interface TablaCajas{
  codigo: number;
  descripcion: string;
  fechaIngreso: Date;
  fechaHasta: Date;
  estatus: string;
  codOficina: number;
}

const ELEMENT_DATA: TablaCajas[] = [
 {codigo: 342, descripcion: 'ABCD', fechaIngreso: new Date('2023-09-10'), fechaHasta:new Date('2023-10-10'), estatus: 'A', codOficina: 123},
 {codigo: 332, descripcion: 'SDFG', fechaIngreso: new Date('2022-10-12'), fechaHasta:new Date('2022-03-12'), estatus: 'B', codOficina: 234},
 {codigo: 322, descripcion: 'WERG', fechaIngreso: new Date('2023-08-20'), fechaHasta:new Date('2023-12-20'), estatus: 'A', codOficina: 345},
 {codigo: 352, descripcion: 'DSFG', fechaIngreso: new Date('2021-09-20'), fechaHasta:new Date('2022-09-30'), estatus: 'B', codOficina: 456},
 {codigo: 362, descripcion: 'XCVG', fechaIngreso: new Date('2023-07-10'), fechaHasta:new Date('2022-06-18'), estatus: 'A', codOficina: 567},
 {codigo: 372, descripcion: 'XCVX', fechaIngreso: new Date('2022-02-02'), fechaHasta:new Date('2023-03-20'), estatus: 'A', codOficina: 678},
 {codigo: 382, descripcion: 'DFGG', fechaIngreso: new Date('2023-10-14'), fechaHasta:new Date('2021-06-10'), estatus: 'C', codOficina: 789},
]

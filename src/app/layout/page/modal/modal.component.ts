import { Component} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'page-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent  {

  constructor(
    public _dialogRef: MatDialogRef<ModalComponent>,
    ) { }
    control: FormControl = new FormControl('')


  close(): void {
    this._dialogRef.close(this.control.value);
  }
}

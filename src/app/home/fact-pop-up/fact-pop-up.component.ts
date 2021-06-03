import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';


@Component({
  templateUrl: './fact-pop-up.component.html',
  styleUrls: ['./fact-pop-up.component.scss'],
})
export class FactPopUpComponent {
  constructor(
    public dialogRef: MatDialogRef<FactPopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { popUpData; title_exit_icon: string; }
  ) {}

}

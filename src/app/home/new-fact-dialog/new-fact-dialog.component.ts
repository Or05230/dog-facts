import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  templateUrl: './new-fact-dialog.component.html',
  styleUrls: ['./new-fact-dialog.component.scss'],
})
export class NewFactDialogComponent implements OnInit {
  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<NewFactDialogComponent>,
    private fb: FormBuilder,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {

  }

  ngOnInit() {
    this.form = this.fb.group({
      addedBy: ['', Validators.required],
      fact: ['', [Validators.maxLength(600)]],
    });
  }

  onCancel() {
    this.dialogRef.close(false);
  }


  submitFact() {
    this.dialogRef.close(this.form)

  }
}

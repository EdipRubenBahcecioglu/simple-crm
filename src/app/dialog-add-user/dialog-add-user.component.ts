import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.class'; // Wir importieren die Usermodel, damit wir das hier verweden können
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {

  user = new User();
  birthDate: Date;
  loading = false;

  constructor(private firestore: AngularFirestore, public dialogRef: MatDialogRef<DialogAddUserComponent>) { }

  ngOnInit(): void {
  }

  saveUser() {
    this.user.birthDate = this.birthDate.getTime(); // Damit wir das Geburtsdatum in einer Zahl vekommen, müssen wir hier mit getTime einen Umweg gehen. Hier bekommen wir eine Nummber in Milisek. die seit dem 1.1.1970 vergangen ist.
    console.log('Current User is', this.user);
    this.loading = true;

    this.firestore
      .collection('users')
      .add(this.user.toJSON())
      .then((result) => {
        this.loading = false;
        console.log('Adding user finished', result);
        this.dialogRef.close();
      })
  }
}

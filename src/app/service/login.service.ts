import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ModelUser } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private userCollection: AngularFirestoreCollection<ModelUser>
  user: Observable<ModelUser[]>
  
  constructor(public afAuth: AngularFireAuth, private router: Router, private afs: AngularFirestore) {
    this.userCollection = afs.collection<ModelUser>('USER')
    this.user = this.userCollection.valueChanges()
  }

  insertDataUser(data: ModelUser) {
    return this.userCollection.add(data)
  }

  editDataUser(data: ModelUser, id: string) {
    return this.userCollection.doc(id).set(data)
  }

  getDataUser() {
    return this.userCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as ModelUser
        const id = a.payload.doc.id
        return { id, data }
      }))
    )
  }

  getOneDataUser(idUser: string) {
    return this.userCollection.doc(idUser)
      .snapshotChanges().pipe(map(value => { return value.payload.data() as ModelUser }))
  }

  deleteArea(idUser: string) {
    return this.userCollection.doc(idUser).delete()
  }


}

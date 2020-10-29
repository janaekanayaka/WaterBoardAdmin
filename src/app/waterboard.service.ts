import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";
import { Observable } from 'rxjs';
import { Agent } from './model/Agent'

@Injectable({
  providedIn: 'root'
})
export class WaterboardService {

  authstate: any = null;
  user: Observable<firebase.User>;

  constructor(private db: AngularFirestore, private firebaseAuth: AngularFireAuth) {
    console.log("****************")
    //console.log(this.getPolicies())
    console.log("****************")
    this.user = firebaseAuth.authState;
  }

  registerWithEmail(name: string, id: string, email: string, password: string) {

    this.db.collection("User").add({
      "name": name,
      "id": id,
      "email": email,
      "password": password
    })

    return this.signup_user(email, password);

  }


  signup_user(email, password) {
    this.firebaseAuth.createUserWithEmailAndPassword(email, password).then(data => {
      console.log('user signup success ', data);
    }).catch(function (error) {
      console.log('firebase signup error ', error);
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }

  getAdmins() {
    return this.db.collection('user').snapshotChanges();
  }

  login(email, password) {
    this.firebaseAuth.signInWithEmailAndPassword(email, password).then(data => {
      console.log('user dign in success ', email, data)
    }).catch(function (error) {
      console.log('firebase sign in error ', email, error)
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }


  logout() {
    this.firebaseAuth.signOut();
  }

  addAgent(agent: Agent) {
    const agentObject = { ...agent };
    return this.db.collection('Agents').add(agentObject);
  }

  getAgents() {
    return this.db.collection('Agents').snapshotChanges();
  }

  deleteAgent(agentId: string) {
    this.db.doc('Agents/' + agentId).delete();
  }

}




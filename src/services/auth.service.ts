import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'; 
// import firebase from 'firebase/compat';
import { GoogleAuthProvider } from 'firebase/auth'; 


import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth: AngularFireAuth) {}

  login(email: string, password: string) {
    return this.fireAuth.signInWithEmailAndPassword(email, password);
  }


  signup(email: string, password: string) {
    return this.fireAuth.createUserWithEmailAndPassword(email, password);
  }

  signOut() {
    return this.fireAuth.signOut();
  }

  loginWithGoogle() {
    return this.fireAuth.signInWithPopup(new GoogleAuthProvider());
  }
  getUser() {
    return this.fireAuth.authState;
  }
  get currentUser(): Observable<any | null> {
    return this.fireAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return of(user);
        } else {
          return of(null);
        }
      })
    );
  }

  isAuthenticated(): boolean {
    const user = this.fireAuth.currentUser;
    return !!user; 
  }
}
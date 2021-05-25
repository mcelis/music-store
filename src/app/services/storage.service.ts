import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { Session } from "../models/Session";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private localStorageService;
  private currentSession: Session;
  private _newSession: Session;

  constructor(private router: Router) {
    this.localStorageService = localStorage;
    this.currentSession = this.loadSessionData();
    this._newSession = new Session('', '', '');
  }

  setCurrentSession(session: Session): void {
    this.currentSession = session;
    this.localStorageService.setItem('currentUser', JSON.stringify(session));
  }

  loadSessionData(): Session {
    var sessionStr = this.localStorageService.getItem('currentUser');
    return (sessionStr) ? <Session>JSON.parse(sessionStr) : this._newSession;
  }

  getCurrentSession(): Session {
    return this.currentSession;
  }

  removeCurrentSession(): void {
    this.localStorageService.removeItem('currentUser');
    this.currentSession = this._newSession;
  }

  getCurrentUser(): string | null {
    var session: Session | null = this.getCurrentSession();
    return (session && session.user) ? session.user : null;
  };

  isAuthenticated(): boolean {
    return (this.getCurrentToken() != null) ? true : false;
  };

  getCurrentToken(): string | null {
    var session = this.getCurrentSession();
    return (session && session.token) ? session.token : null;
  };

  getCurrentRol(): string | null {
    var session = this.getCurrentSession();
    return (session && session.rol) ? session.rol : null;
  };

  getCurrentRolIsAdmin(): boolean {
    var session = this.getCurrentSession();
    return (session && session.rol) ? session.rol == 'admin' : false;
  };

  logout(): void {
    this.removeCurrentSession();
    this.router.navigate(['/login']);
  }

}

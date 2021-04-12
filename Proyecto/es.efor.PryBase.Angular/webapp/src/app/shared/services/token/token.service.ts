import { Injectable } from '@angular/core';
import { JsonWebTokenResponse } from '../../api/models';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private token: JsonWebTokenResponse = null;

  constructor(
  ) {
    this.getStoredToken();
  }

  getStoredToken() {
    return new Promise<JsonWebTokenResponse>((resolve) => {
      if (!this.token || moment().isSameOrAfter(this.token.validTo)) {
        this.token = JSON.parse(localStorage.getItem('auth'));
      }
      resolve(this.token);
    });
  }
  setStoredToken(newData: JsonWebTokenResponse) {
    localStorage.setItem('auth', JSON.stringify(newData));
    this.token = newData;
  }
}

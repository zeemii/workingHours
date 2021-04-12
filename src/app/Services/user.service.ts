import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  endpoint = 'http://localhost:8080/user/';

  //http header
  httpPostOptions = {
    withCredentials: true
  };

  constructor(private _http: HttpClient) {
  }

  /**
   * Get all users
   */
  getUsers() {
    return this._http.get(this.endpoint, this.httpPostOptions)
      .toPromise().catch((err)=> {
        throw new Error(err.message);
      })
  }

  /**
   * Get user by ID
   * @param id
   */
  getUser(id: number) {
    return this._http.get(this.endpoint + id + '/registration', this.httpPostOptions)
      .toPromise().catch((err)=> {
        throw new Error(err.message);
      })
  }

}

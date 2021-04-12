import {Component, OnInit} from '@angular/core';
import {UserService} from "../../Services/user.service";

@Component({
  selector: 'app-user-working-hours',
  templateUrl: './user-working-hours.component.html',
  styleUrls: ['./user-working-hours.component.css']
})


export class UserWorkingHoursComponent implements OnInit, OnInit {
  users: any;
  chosenUser: any;
  columnsToDisplay = ['name', 'work_hours_per_week', 'worked_hours'];

  /**
   * Constructor initialize user service
   * @param Service:UserService
   */
  constructor(private Service: UserService) {}

  ngOnInit(): void {
    /**
     * Get user data on start
     * TODO this is a demo and there is only one page in this app, because of this, the data fetches immediately
     */
    this.Service.getUsers().then(
      (res) => {
        this.users = res;
        for (let key of Object.keys(this.users)) {
          this.getUserData(this.users[key].id, parseInt(key))
        }
      }
    )

  }

  /**
   * get userdata
   * @param id id from user
   * @param key index from user data array
   * @private
   */
  private getUserData(id: number, key: number) {
    let data: any = {};
    let total: number = 0;
    let totalExcepted: number = 0;

    this.Service.getUser(id).then(
      (res) => {
        data = res;

        for (let keyData of Object.keys(data)) {
          data[keyData]['worked_hours'] = this.sum(data[keyData].hours);
          total += data[keyData]['worked_hours'];
        }
        this.users[key]['data'] = data;
        this.users[key]['total'] = total;
        this.users[key]['totalExcepted'] = data.length * this.users[key].work_hours_per_week;
      }
    );
  }

  /**
   * Calculate the sum from an array with integers
   * @param arr:array
   * @protected
   */
  private sum(arr: any) {
    try {
      if (arr.length !== 0) {
        return arr.reduce((a: number, b: number) => a + b, 0);
      } else {
        return 0;
      }
    } catch (e) {
      throw new Error(e.message)
    }

  }

}

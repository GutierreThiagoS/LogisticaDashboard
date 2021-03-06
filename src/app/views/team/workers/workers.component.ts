import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';

import { TeamChartsData, IChartProps } from '../team-charts-data';

import { WorkersService } from '../../../services/workers.service'
import { ResponseWorkers } from 'src/app/models/response/response-workers';

interface IUser {
  name: string;
  registered: string;
  //country: string;
  usage: number;
  period: string;
  //payment: string;
  activity: string;
  avatar: string;
  status: string;
  color: string;
}

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.scss']
})
export class WorkersComponent implements OnInit {

  constructor(
    private chartsData: TeamChartsData,
    private workersService: WorkersService
    ) {
  }

  public users: IUser[] = [
//     {
//       name: 'Yiorgos Avraamu',
//       state: 'New',
//       registered: 'Jan 1, 2021',
// //      country: 'Us',
//       usage: 50,
//       period: 'Jun 11, 2021 - Jul 10, 2021',
//       //payment: 'Mastercard',
//       activity: '10 sec ago',
//       avatar: './assets/img/avatars/1.jpg',
//       status: 'success',
//       color: 'success'
//     },
//     {
//       name: 'Avram Tarasios',
//       state: 'Recurring ',
//       registered: 'Jan 1, 2021',
//  //     country: 'Br',
//       usage: 10,
//       period: 'Jun 11, 2021 - Jul 10, 2021',
//       //payment: 'Visa',
//       activity: '5 minutes ago',
//       avatar: './assets/img/avatars/2.jpg',
//       status: 'danger',
//       color: 'info'
//     },
//     {
//       name: 'Quintin Ed',
//       state: 'New',
//       registered: 'Jan 1, 2021',
// //      country: 'In',
//       usage: 74,
//       period: 'Jun 11, 2021 - Jul 10, 2021',
//       //payment: 'Stripe',
//       activity: '1 hour ago',
//       avatar: './assets/img/avatars/3.jpg',
//       status: 'warning',
//       color: 'warning'
//     },
//     {
//       name: 'Enéas Kwadwo',
//       state: 'Sleep',
//       registered: 'Jan 1, 2021',
//    //   country: 'Fr',
//       usage: 98,
//       period: 'Jun 11, 2021 - Jul 10, 2021',
//       //payment: 'Paypal',
//       activity: 'Last month',
//       avatar: './assets/img/avatars/4.jpg',
//       status: 'secondary',
//       color: 'danger'
//     },
//     {
//       name: 'Agapetus Tadeáš',
//       state: 'New',
//       registered: 'Jan 1, 2021',
//     //  country: 'Es',
//       usage: 22,
//       period: 'Jun 11, 2021 - Jul 10, 2021',
//       //payment: 'ApplePay',
//       activity: 'Last week',
//       avatar: './assets/img/avatars/5.jpg',
//       status: 'success',
//       color: 'primary'
//     },
//     {
//       name: 'Friderik Dávid',
//       state: 'New',
//       registered: 'Jan 1, 2021',
//       //country: 'Pl',
//       usage: 43,
//       period: 'Jun 11, 2021 - Jul 10, 2021',
//       //payment: 'Amex',
//       activity: 'Yesterday',
//       avatar: './assets/img/avatars/6.jpg',
//       status: 'info',
//       color: 'dark'
//     }
  ];
  public mainChart: IChartProps = {};
  public chart: Array<IChartProps> = [];
  public trafficRadioGroup = new FormGroup({
    trafficRadio: new FormControl('Month')
  });

  ngOnInit(): void {
    this.initCharts();
    // this.workersService.asyncUsersAndOrder().subscribe({
    //     next: (res) => {
    //       console.log(res)
    //       res.workers.forEach( (result ) => {
    //         this.users.push({
    //                 name: result.name,
    //                 state: 'New',
    //                 registered: result.email,
    //                 usage: 10,
    //                 period: 'Timer: 00:00',
    //                 activity: '10 sec ago',
    //                 avatar: './assets/img/avatars/2.jpg',
    //                 status: 'success',
    //                 color: 'success'
    //         })
    //       })
    //       localStorage.setItem('ResponseWorkers', JSON.stringify(res))
    //     },
    //     error: (err) => console.error(err)
    //   }
    // )
    this.workersService.asyncWorkersStatistics().subscribe({
        next: (res) => {
          console.log(res)

          res.users.forEach( (result) => {
            this.users.push({
                    name: result.name,

                    registered: result.email,
                    usage: (result.itemConcluded / result.countItem) * 100,
                    period: `Timer: 00:00`,
                    activity: '10 sec ago',
                    avatar: './assets/img/avatars/2.jpg',
                    status: 'success',
                    color: 'success'
            })
          })

          localStorage.setItem('ResponseWorkers', JSON.stringify(res))
        },
        error: (err) => console.error(err)
      }
    )

  }

  initCharts(): void {
    this.mainChart = this.chartsData.mainChart;
  }

  setTrafficPeriod(value: string): void {
    this.trafficRadioGroup.setValue({ trafficRadio: value });
    this.chartsData.initMainChart(value);
    this.initCharts();
  }


}

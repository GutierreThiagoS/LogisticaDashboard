import { Component, OnInit } from '@angular/core';
import { WorkersService } from 'src/app/services/workers.service';

interface IUser{
  name: string,
  performace: number
}

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.scss']
})

export class PerformanceComponent implements OnInit {

  constructor(
    private workersService: WorkersService
  ) { }

  public users: IUser[] = []
  
  ngOnInit(): void {
    // this.workersService.asyncUsersAndOrder().subscribe({
    //   next: (res) => {
    //     //console.log(res)

    //     res.workers.forEach( (result ) => {
    //       this.users.push({
    //               name: result.name,
    //               performace: 50
    //       })
    //     })
    //     var userNames = this.users.map(user => user.name)

    //     console.log(userNames)

    //     this.chartDoughnutData = {
    //       labels: userNames,
    //       datasets: [
    //         {
    //           backgroundColor: ['#41B883','#00D8FF', '#DD1B16'],
    //           data: [40, 60]
    //         }
    //       ]
    //     }

    //     this.chartPieData = {
    //       labels: ['Pendente', 'Conclude', ],
    //       datasets: [
    //         {
    //           data: [300, 50],
    //           backgroundColor: ['#FF2521', '#41B883', '#FFCE56'],
    //           hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    //         }
    //       ]
    //     };

    //     //localStorage.setItem('ResponseWorkers', JSON.stringify(res))
    //   },
    //   error: (err) => console.error(err)
    // })

    this.workersService.asyncWorkersStatistics().subscribe({
      next: (res) => {
        var total = 0
        var totalConcluded = 0
        res.users.forEach( (result ) => { 
          total += result.countItem
          totalConcluded += result.itemConcluded
        })
        res.users.forEach( (result ) => {
          this.users.push({
                  name: result.name,
                  performace: (result.countItem / total) * 100
          })
        })
        var userNames = this.users.map(user => user.name)
        var userPerformace = this.users.map(user => user.performace)

        console.log(userNames)

        this.chartDoughnutData = {
          labels: userNames,
          datasets: [
            {
              backgroundColor: ['#41B883','#00D8FF', '#DD1B16'],
              data: userPerformace
            }
          ]
        }

        this.chartPieData = {
          labels: ['Pendente', 'Conclude', ],
          datasets: [
            {
              data: [total-totalConcluded, totalConcluded],
              backgroundColor: ['#FF2521', '#41B883', '#FFCE56'],
              hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
            }
          ]
        };

        //localStorage.setItem('ResponseWorkers', JSON.stringify(res))
      },
      error: (err) => console.error(err)
    })
  }

  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  chartBarData = {
    labels: [...this.months].slice(0, 7),
    datasets: [
      {
        label: 'GitHub Commits',
        backgroundColor: '#f87979',
        data: [40, 20, 12, 39, 17, 42, 79]
      }
    ]
  };

  chartLineData = {
    labels: [...this.months].slice(0, 7),
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(220, 220, 220, 0.2)',
        borderColor: 'rgba(220, 220, 220, 1)',
        pointBackgroundColor: 'rgba(220, 220, 220, 1)',
        pointBorderColor: '#fff',
        data: [this.randomData, this.randomData, this.randomData, this.randomData, this.randomData, this.randomData, this.randomData]
      },
      {
        label: 'My Second dataset',
        backgroundColor: 'rgba(151, 187, 205, 0.2)',
        borderColor: 'rgba(151, 187, 205, 1)',
        pointBackgroundColor: 'rgba(151, 187, 205, 1)',
        pointBorderColor: '#fff',
        data: [this.randomData, this.randomData, this.randomData, this.randomData, this.randomData, this.randomData, this.randomData]
      }
    ]
  };

  chartLineOptions = {
    maintainAspectRatio: false,
  };

  chartDoughnutData = {
    labels: ['VueJs', 'EmberJs', 'ReactJs', 'Angular'],
    datasets: [
      {
        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
        data: [40, 20, 80, 10]
      }
    ]
  };

  chartPieData = {
    labels: ['Red', 'Green', 'Yellow'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
      }
    ]
  };

  chartPolarAreaData = {
    labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
    datasets: [
      {
        data: [11, 16, 7, 3, 14],
        backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB']
      }
    ]
  };

  chartRadarData = {
    labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
    datasets: [
      {
        label: '2020',
        backgroundColor: 'rgba(179,181,198,0.2)',
        borderColor: 'rgba(179,181,198,1)',
        pointBackgroundColor: 'rgba(179,181,198,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,1)',
        tooltipLabelColor: 'rgba(179,181,198,1)',
        data: [65, 59, 90, 81, 56, 55, 40]
      },
      {
        label: '2021',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        pointBackgroundColor: 'rgba(255,99,132,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255,99,132,1)',
        tooltipLabelColor: 'rgba(255,99,132,1)',
        data: [this.randomData, this.randomData, this.randomData, this.randomData, this.randomData, this.randomData, this.randomData]
      }
    ]
  };

  get randomData() {
    return Math.round(Math.random() * 100);
  }

}

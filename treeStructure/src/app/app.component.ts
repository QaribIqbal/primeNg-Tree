import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TreeNode } from 'primeng/api';
import { TreeModule } from 'primeng/tree';
import { CardModule } from 'primeng/card';
import{Button} from 'primeng/button';
@Component({
  selector: 'app-root',
  imports: [TreeModule,CardModule,Button],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'treeStructure';
  files: any;
  selectedFile: any;
  //files!:TreeNode;
  constructor() {
    this.files = [
      {
        label: 'Assets',
        data: { code: '1000', title: 'Assets', type: 'Head' },
        icon: 'pi pi-building',
      //  expanded: true,
        children: [
          {
            label: 'Cash',
            data: { code: '1100', title: 'Cash', type: 'Head' },
            icon:'pi pi-dollar',
          //  expanded: true,
            children: [
              { label: 'Bank Account', data: { code: '1110', title: 'Bank Account', type: 'Account' }, icon: 'pi pi-building-columns' },
              { label: 'Petty Cash', data: { code: '1120', title: 'Petty Cash', type: 'Account' }, icon: 'pi pi-credit-card' }
            ]
          }
        ]
      },
      {
        label: 'Active Income',
        data: { code: '1200', title: 'Businesses', type: 'Business' },
        icon: 'pi pi-spin pi-cog',
       // expanded: true,
        children:[
          {
            label:"Bakery",
            data: {code:'007',title:'Sweet pie', type:'International'},
            icon: 'pi pi-home'
          }
        ]
      }
    ];
  }
}

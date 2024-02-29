import { Component } from '@angular/core';
import { RecordsService } from '../records.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrl: './edit-customer.component.css',
})
export class EditCustomerComponent {
  index: number;
  constructor(
    private recordsService: RecordsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // this.customers = this.recordsService.tasks;
    // console.log(this.isAdmin);
    // this.recordsService.custum.subscribe((idx: number) => (this.index = idx));
  }
  onCreateAccount(name: string, email: string, phone: string, address: string) {
    // this.recordsService.tasks[this.index].name = name;
    // console.log(this.index, this.recordsService.tasks);
    this.recordsService.updateTask(name, email, phone, address);
    this.router.navigate(['customer']);
  }
}

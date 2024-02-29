import { Component } from '@angular/core';
import { RecordsService } from '../records.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css',
})
export class CustomersComponent {
  customers = [];
  isAdmin: boolean;
  constructor(
    private recordsService: RecordsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.customers = this.recordsService.tasks;
    console.log(this.isAdmin);
    this.recordsService.statusUpdated.subscribe(
      (status: boolean) => (this.isAdmin = status)
    );
  }
  onCreateAccount(name: string, email: string, phone: string, address: string) {
    this.recordsService.addAccount(name, email, phone, address);
  }
  onDelete(idx: number) {
    this.recordsService.delete(idx);
  }

  onEdit(idx: number) {
    // console.log(idx);
    // this.recordsService.custum.emit(idx);
    this.recordsService.giveIdx(idx);
    this.router.navigate(['edit']);
  }
}

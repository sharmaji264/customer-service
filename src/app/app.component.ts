import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RecordsService } from './records.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  @ViewChild('f', { static: false }) signupForm: NgForm;

  constructor(
    private recordsService: RecordsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  onSubmit() {
    // console.log(this.signupForm.value.email);
    // console.log(this.signupForm.value.password);
    this.router.navigate(['customer'], {
      relativeTo: this.route,
    });
    if (this.signupForm.value.email === 'sankalp.g2002@gmail.com') {
      this.recordsService.statusUpdated.emit(true);
      // console.log('admin');
    } else {
      this.recordsService.statusUpdated.emit(false);
    }
  }
}

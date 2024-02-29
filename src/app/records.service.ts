import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecordsService {
  constructor() {}

  tasks: {
    name: string;
    email: string;
    phone: string;
    address: string;
  }[] = [
    {
      name: 'Task 1',
      email: 'Study',
      phone: 'To Do',
      address: '123 Main Street',
    },
  ];
  statusUpdated = new EventEmitter<boolean>();
  custum = new EventEmitter<number>();
  index: number;

  addAccount(name: string, email: string, phone: string, address: string) {
    // if (title === '' || description === '' || status === '') {
    //   alert('Please enter all fields');
    //   return;
    // }

    this.tasks.push({
      name: name,
      email: email,
      phone: phone,
      address: address,
    });
    console.log(this.tasks);
    alert('Task Added');
  }

  updateTask(name: string, email: string, phone: string, address: string) {
    console.log(this.index);
    this.tasks[this.index].name = name;
    this.tasks[this.index].email = email;
    this.tasks[this.index].phone = phone;
    this.tasks[this.index].address = address;
  }

  delete(index: number) {
    this.tasks.splice(index, 1);
  }
  giveIdx(idx: number) {
    this.index = idx;
  }
}

import { Component, ElementRef, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-seat-reservation',
  templateUrl: './seat-reservation.component.html',
  styleUrls: ['./seat-reservation.component.css']
})
export class SeatReservationComponent implements OnInit {
  seats: any[] = [];
  seatBooked: any;
  closest: any;

  ngOnInit(): void {
    //Here i am pushing array of objects where number is seat number and reserved will boolean if booked than true else false by default.
    for (let i = 1; i <= 80; i++) {
      this.seats.push({
        number: i,
        reserved: false
      });
    }
  }
  reserveSeats() {
    console.log(this.seatBooked);

    let consecutiveSeats = 0;
    let startIndex = 0;
    let endIndex = 0;

    for (let i = 0; i < this.seats.length; i++) {
      // If seatsreserved is true than consecutiveSeats will increase respectively
      if (!this.seats[i].reserved) {
        consecutiveSeats++;
      } else {
        consecutiveSeats = 0;
      }

      // I am checking if consecutiveSeats is equal to no. of seats booked by user than we set startINdex and endIndex for next reservation 
      if (consecutiveSeats === this.seatBooked) {
        startIndex = i - this.seatBooked + 1;
        endIndex = i;
        break;
      }

    }

    console.log(consecutiveSeats, startIndex, endIndex);

    // Here i am setting reserved to true if that seat is booked.
    if (consecutiveSeats === this.seatBooked) {
      for (let i = startIndex; i <= endIndex; i++) {
        this.seats[i].reserved = true;
      }
      alert(`Successfully reserved seats ${startIndex + 1} to ${endIndex + 1}`);
    } else {
      alert(`Tickets not available for ${this.seatBooked} seats`);
    }
  }









}

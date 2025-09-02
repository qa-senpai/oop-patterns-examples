import test, { expect } from "@playwright/test";

// https://www.saucedemo.com/
test("login as standard_user - should be logged", async ({ request }) => {
  const bookingBuilder = new BookingBuilder()
    .withFirstName("Jhon")
    .withLastName("Smith")
    .build();

  await request.post("fasfa", {
    data: bookingBuilder,
  });
});

const booking = {
  firstname: "Jim",
  lastname: "Brown",
  totalprice: 111,
  depositpaid: true,
  bookingdates: {
    checkin: "2018-01-01",
    checkout: "2019-01-01",
  },
  additionalneeds: "Breakfast",
};

interface Booking {
  firstname?: string;
  lastname?: string;
  totalprice?: number;
  depositpaid?: boolean;
  bookingdates?: {
    checkin: string;
    checkout: string;
  };
  additionalneeds?: string;
}

class BookingBuilder {
  private booking: Booking = {};

  withFirstName(firstName: string) {
    this.booking.firstname = firstName;
    return this;
  }

  withLastName(lastName: string) {
    this.booking.lastname = lastName;
    return this;
  }

  build() {
    return this.booking;
  }
}

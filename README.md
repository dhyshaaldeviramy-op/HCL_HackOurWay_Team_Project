# HCL_HackOurWay_Team_Project
FRONTEND STRUCTURE
src/app
│
├── core
│   ├── services
│   │   ├── auth.service.ts   (1)
│   │   ├── hotel.service.ts(2)
│   │   ├── room.service.ts  (2)
│   │   ├── booking.service.ts(2)
│   │   ├── payment.service.ts(1)
│
│   ├── guards
│   │   ├── auth.guard.ts(1)
│
├── modules
│   ├── auth(1)
│   │   ├── login
│   │   ├── register
│
│   ├── hotels(2)
│   │   ├── hotel-list
│   │   ├── hotel-details
│
│   ├── room   (2)
│   │   ├── room-list
│
│   ├── booking(2)
│   │   ├── booking-page
│   │   ├── my-bookings
│
│   ├── payment(1)
│   │   ├── payment-page
│
├── shared
│   ├── components
│   │   ├── navbar
│   │   ├── footer
│
├── models
│   ├── user.model.ts(1)
│   ├── hotel.model.ts(2)
│   ├── room.model.ts (2)
│   ├── booking.model.ts(2)
│
├── app-routing.module.ts
└── app.module.ts
****************************************************
BACKEND STRUCTURE
HotelBooking.API
│
├── Controllers
│   ├── AuthController.cs(3)
│   ├── UserController.cs(3)
│   ├── HotelController.cs(4)
│   ├── RoomController.cs(4)
│   ├── BookingController.cs(4)
│   ├── PaymentController.cs(4)
│   ├── PromotionController.cs(4)
│
├── Models (Entities) (3)
│   ├── User.cs
│   ├── Hotel.cs
│   ├── Room.cs
│   ├── Booking.cs
│   ├── Payment.cs
│   ├── Promotion.cs
│
├── DTOs
│   ├── Auth(3)
│   ├── Hotel(3)
│   ├── Room(3)
│   ├── Booking(3)
│   ├── Payment(3)
│   ├── Promotion(3)
│
├── Services
│   ├── AuthService.cs(3)
│   ├── HotelService.cs(4)
│   ├── RoomService.cs(4)
│   ├── BookingService.cs(4)
│   ├── PaymentService.cs(4)
│   ├── PromotionService.cs(4)
│
├── Data
│   └── AppDbContext.cs(3)
│
├── Helpers
│   ├── JwtHelper.cs(3)
│
├── Program.cs
└── appsettings.json
**********************************************

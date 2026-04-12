using HotelBooking.Data;
using HotelBooking.DTO;
using HotelBooking.Model;
using HotelBooking.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HotelBooking.Services.Implementations
{
    public class BookingService : IBookingService
    {
        private readonly AppDbContext _context;

        public BookingService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<int> CreateBookingAsync(int userId, CreateBookingDTO dto)
        {
            var room = await _context.Rooms.FirstOrDefaultAsync(r => r.RoomId == dto.RoomId);
            if (room == null) throw new Exception("Room not found");

            int totalDays = (dto.CheckOut - dto.CheckIn).Days;
            if (totalDays <= 0) throw new Exception("Invalid booking dates");

            var booking = new Booking
            {
                UserId = userId,
                RoomId = dto.RoomId,
                CheckIn = dto.CheckIn,
                CheckOut = dto.CheckOut,
                Price = room.Price * totalDays,
                Status = "Confirmed"
            };

            _context.Bookings.Add(booking);
            await _context.SaveChangesAsync();

            return booking.BookingId;  // ← return id not string
        }

        public async Task<List<BookingDTO>> GetBookingsByUserAsync(int userId)
        {
            return await _context.Bookings
                .Where(b => b.UserId == userId)
                .Select(b => new BookingDTO
                {
                    Id = b.BookingId,
                    RoomId = b.RoomId,
                    CheckIn = b.CheckIn,
                    CheckOut = b.CheckOut,
                    Price = b.Price,
                    Status = b.Status
                })
                .ToListAsync();
        }

        // Issue 5 fix: cancel implementation
        public async Task<string> CancelBookingAsync(int bookingId)
        {
            var booking = await _context.Bookings
                .FirstOrDefaultAsync(b => b.BookingId == bookingId);

            if (booking == null)
                throw new Exception("Booking not found");

            if (booking.Status == "Cancelled")
                throw new Exception("Booking is already cancelled");

            booking.Status = "Cancelled";
            await _context.SaveChangesAsync();

            return "Booking Cancelled Successfully";
        }
    }
}
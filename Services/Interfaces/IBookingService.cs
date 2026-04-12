using HotelBooking.DTO;

namespace HotelBooking.Services.Interfaces
{
    public interface IBookingService
    {
        Task<List<BookingDTO>> GetBookingsByUserAsync(int userId);
        Task<string> CancelBookingAsync(int bookingId);

        Task<int> CreateBookingAsync(int userId, CreateBookingDTO dto);  // ← int not string
    }
}
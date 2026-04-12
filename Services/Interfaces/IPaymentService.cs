using HotelBooking.DTO;
using HotelBooking.DTO.HotelBooking.DTO;

namespace HotelBooking.Services.Interfaces
{
    public interface IPaymentService
    {
        Task<string> ProcessPaymentAsync(PaymentDTO dto);
    }
}
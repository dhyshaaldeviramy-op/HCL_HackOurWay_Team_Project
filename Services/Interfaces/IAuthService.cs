using HotelBooking.DTO;

namespace HotelBooking.Services.Interfaces
{
    public interface IAuthService
    {
        Task<string> RegisterAsync(RegisterDTO dto);
        Task<UserDTO> LoginAsync(LoginDTO dto);
    }
}
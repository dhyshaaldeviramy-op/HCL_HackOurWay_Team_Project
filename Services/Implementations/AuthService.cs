using HotelBooking.Data;
using HotelBooking.DTO;
using HotelBooking.Model;
using HotelBooking.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HotelBooking.Services.Implementations
{
    public class AuthService : IAuthService
    {
        private readonly AppDbContext _context;

        public AuthService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<string> RegisterAsync(RegisterDTO dto)
        {
            var existingUser = await _context.Users
                .FirstOrDefaultAsync(x => x.email == dto.Email);

            if (existingUser != null)
                throw new Exception("Email already exists");

            var user = new User
            {
                Name = dto.Name,
                email = dto.Email,
                password = dto.Password
            };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return "User Registered Successfully";
        }

        public async Task<UserDTO> LoginAsync(LoginDTO dto)
        {
            var user = await _context.Users
                .FirstOrDefaultAsync(x =>
                    x.email == dto.Email &&
                    x.password == dto.Password);

            if (user == null)
                throw new Exception("Invalid Email or Password");

            return new UserDTO
            {
                userId = user.userId,
                Name = user.Name,
                Email = user.email
            };
        }
    }
}
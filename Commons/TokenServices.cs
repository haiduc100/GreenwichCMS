using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using GreenwichCMS.Models.DTOs;
using Microsoft.IdentityModel.Tokens;

namespace GreenwichCMS.Commons
{
    public class TokenServices : ITokenServices
    {
        private Microsoft.Extensions.Configuration.IConfiguration _configuration;
        public TokenServices(Microsoft.Extensions.Configuration.IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public string GenerateToken(UserDTOs user)
        {
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Secret"]));
            var expires = DateTime.Now.AddDays(Convert.ToDouble(_configuration["JWT:JwtExpireDays"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name,user.UserName),
                new Claim("DateOfBirth",user.DateOfBirth.ToString()),
                new Claim("Id",user.UserId.ToString()),
                new Claim(ClaimTypes.Role,user.Role.ToString()),
                new Claim("FirstName",user.FirstName),
                new Claim("LastName",user.LastName),
            };

            var token = new JwtSecurityToken(
                claims: claims,
                expires: expires,
                signingCredentials: creds
               );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        public JwtSecurityToken Verify(string jwt)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]);

            tokenHandler.ValidateToken(jwt, new TokenValidationParameters
            {
                IssuerSigningKey = new SymmetricSecurityKey(key),
                ValidateIssuerSigningKey = true,
                ValidateIssuer = false,
                ValidateAudience = false,
            }, out SecurityToken validatedToken);

            return (JwtSecurityToken)validatedToken;
        }
    }
}
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;
using GreenwichCMS.Models.DTOs;

namespace GreenwichCMS.Commons
{
    public interface ITokenServices
    {
        public string GenerateToken(UserDTOs user);
        public JwtSecurityToken Verify(string jwt);
    }
}
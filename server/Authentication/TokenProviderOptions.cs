using System;
using System.Text;
using System.Threading.Tasks;
using Microsoft.IdentityModel.Tokens;

namespace OptimoInventur.Authentication
{
    public class TokenProviderOptions
    {
        public static string Audience { get; } = "OptimoInventurAudience";
        public static string Issuer { get; } = "OptimoInventur";
        public static SymmetricSecurityKey Key { get; } = new SymmetricSecurityKey(Encoding.ASCII.GetBytes("OptimoInventurSecretSecurityKeyOptimoInventur"));
        public static TimeSpan Expiration { get; } = TimeSpan.FromMinutes(20000);
        public static SigningCredentials SigningCredentials { get; } = new SigningCredentials(Key, SecurityAlgorithms.HmacSha256);
    }
}

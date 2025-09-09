namespace JwtExample.Models
{
    public interface IAuthService
    {
        Task<string> Authenicate (string username, string password);
    }
}

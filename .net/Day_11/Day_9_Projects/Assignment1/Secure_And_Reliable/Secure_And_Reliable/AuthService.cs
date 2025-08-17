using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Secure_And_Reliable
{
    public class AuthService
    {
        private readonly UserRepository _repo;

        public AuthService(UserRepository repo)
        {
            _repo = repo ?? throw new ArgumentNullException(nameof(repo));
        }

        public void Register(string userName, string password)
        {
            var pair = CryptoService.HashPassword(password);
            var hash = pair.Item1;
            var salt = pair.Item2;

            if (!_repo.Add(new User(userName, hash, salt)))
                throw new InvalidOperationException("User already exists.");
        }

        public bool Login(string userName, string password)
        {
            var user = _repo.Find(userName);
            if (user == null) throw new InvalidOperationException("Unknown user.");

            return CryptoService.VerifyPassword(password,
                                                user.PasswordHash,
                                                user.PasswordSalt);
        }

    }
}

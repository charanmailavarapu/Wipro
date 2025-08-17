using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Secure_And_Reliable
{
    public class User
    {
        public string UserName { get; }

        public byte[] PasswordHash { get; }

        public byte[] PasswordSalt { get; } 

        public User(string userName, byte[] passwordHash, byte[] passwordSalt)
        {
            UserName = userName;
            PasswordHash = passwordHash;
            PasswordSalt = passwordSalt;
        }
    }
}

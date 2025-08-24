using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Secure_And_Reliable
{
    public class Program
    {
        static void Main()
        {
            var repo = new UserRepository();
            var auth = new AuthService(repo);

            try
            {
                auth.Register("admin", "secret123");
                Console.WriteLine("Registered successfully.");

                bool loginSuccess = auth.Login("admin", "secret123");
                Console.WriteLine(loginSuccess ? "Login successful" : "Login failed");
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error: " + ex.Message);
            }
        }
    }
}


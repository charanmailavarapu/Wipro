using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Properties1
{
    internal class Bank
    {
        public int AccountNo { get; } = 100;

        public string Branch { get; } = "Nanakramguda";

        public string BankName { get; } = "HDFC";

        static void Main(string[] args)
        {
            Bank b = new Bank();
            Console.WriteLine("AccountNo : " + b.AccountNo);
            Console.WriteLine("Branch : " + b.Branch);
            Console.WriteLine("Bank Name : " + b.BankName);


        }
    }
}

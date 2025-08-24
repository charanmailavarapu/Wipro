using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExceptionHandling1
{
    internal class Filter_Example_Exemption : ApplicationException
    {
        public Filter_Example_Exemption(string error) : base (error) { }
    }
}

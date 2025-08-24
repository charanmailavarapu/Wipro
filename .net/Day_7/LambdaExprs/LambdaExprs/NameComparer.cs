using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LambdaExprs
{
    internal class NameComparer : Comparer<Employ>
    {
        public override int Comparer(Employ x, Employ y)
        {
            return x.EmpName.CompareTo(y.EmpName);
        }
    }
}

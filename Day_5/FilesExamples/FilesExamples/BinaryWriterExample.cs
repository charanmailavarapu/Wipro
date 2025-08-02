using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FilesExamples
{
    internal class BinaryWriterExample
    {
        static void Main(string[] args)
        {
            FileStream fs = new FileStream(@"C:\Users\RAVI SAI KIRAN\Downloads\.net", FileMode.Create, FileAccess.Write);
            BinaryWriter bw = new BinaryWriter(fs); ;
            bw.Write(99);
            bw.Write("Charan");
            bw.Write(244377.88);
            bw.Write(true);

            bw.Close();
            fs.Close();
            Console.WriteLine("Data Primitives stored Successfully..");
        }
    }
}

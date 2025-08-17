using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FilesExamples
{
    internal class BinaryReaderExample
    {
        static void Main()
        {
            FileStream fs = new FileStream(@"C:\Files\data.txt", FileMode.Open, FileAccess.Read);
            BinaryReader reader = new BinaryReader(fs);
            int x = reader.ReadInt32();
            string str = reader.ReadString();
            double dou = reader.ReadDouble();
            bool flag = reader.ReadBoolean();
            Console.WriteLine(x);
            Console.WriteLine(str);
            Console.WriteLine(dou);
            Console.WriteLine(flag);
            reader.Close();
            fs.Close();
            Console.WriteLine("Data read successfully..");

        }

        
    }
}

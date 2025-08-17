using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FilesExamples
{
    internal class FileReadExample1
    {
        static void Main() { 
        FileStream fs = new FileStream(@"C:\Users\RAVI SAI KIRAN\Downloads\.net\data\arthematic.txt", FileMode.Open, FileAccess.Read);
        StreamReader sr = new StreamReader(fs);
        sr.BaseStream.Seek(0, SeekOrigin.Begin);
            string line;
            while ((line = sr.ReadLine()) != null) 
            {
                Console.WriteLine(line);

            }
            sr.Close();
            fs.Close();

    }
    }
}

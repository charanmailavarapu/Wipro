using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExceptionHandling1
{
    internal class Filter_Example
    {
        static void Filter(string name)
        {
            string filter = "";

            if (name.Length >= 0 && name.Length <= 3)
            {
                filter = "small";
            }
            else if (name.Length >= 3 && name.Length <= 10)
            {
                filter = "medium";
            }
            else if (name.Length > 10)
            {
                filter = "good";
            }
            if (filter == "small" )
            {
                throw new FilterException("Small name exception occured");
            }
            else if (filter == "medium")
            {
                throw new FilterException("middle name exception occured");
            }
            else if (filter == "good")
            {
                throw new FilterException("good it is not an exception");
            }
            else
            {
                throw new FilterException("this case is not defined");
            }
        }
        static void Main(string[] args)
        {
            string name;
            Console.WriteLine("Enter your name : ");
            name = Console.ReadLine();

            try
            {
                Filter(name);

            }
            catch (FilterException e) when (e.Message.Contains("small") ){
                Console.WriteLine(e.Message);
            }

            catch (FilterException e) when (e.Message.Contains("medium")) {
                Console.WriteLine(e.Message);
            }

            catch (FilterException e) when (e.Message.Contains("good") ){
                Console.WriteLine(e.Message);
            }

            catch(FilterException e)
            {
                Console.WriteLine(e.Message);
            }


            catch (Exception e)
            {

                Console.WriteLine(e);
            }

        }
    }
}

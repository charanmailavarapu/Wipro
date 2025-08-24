using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExceptionHandling1
{
    internal class Filter_Example2
    {
        static void RaiseSeverity(string severity)
        {
            if (severity.Equals("low"))
            {
                throw new Filter_Example_Exemption("low severity you can leave for time being...");
            }
            else if (severity.Equals("medium"))
            {
                throw new Filter_Example_Exemption("medium severity you need to try to fix without leaving...");
            }
            else if (severity.Equals("high"))
            {
                throw new Filter_Example_Exemption("high severity You need to fix on high priority...");
            }
            else if (severity.Equals("critical"))
            {
                throw new Filter_Example_Exemption("critical error as fix first as stop all other works...");
            }
            else
            {
                throw new Filter_Example_Exemption("No Error Occurred...");
            }
        }
        static void Main()
        {
            string severity;
            Console.WriteLine("Enter the Severity (low/medium/high/critical)  ");
            severity = Console.ReadLine();
            try
            {
                RaiseSeverity(severity);
            }
            catch (Filter_Example_Exemption e) when (e.Message.Contains("low"))
            {
                Console.WriteLine(e.Message);
            }
            catch (Filter_Example_Exemption e) when (e.Message.Contains("medium"))
            {
                Console.WriteLine(e.Message);
            }
            catch (Filter_Example_Exemption e) when (e.Message.Contains("high"))
            {
                Console.WriteLine(e.Message);
            }
            catch (Filter_Example_Exemption e) when (e.Message.Contains("critical"))
            {
                Console.WriteLine(e.Message);
            }
            catch (Filter_Example_Exemption e)
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
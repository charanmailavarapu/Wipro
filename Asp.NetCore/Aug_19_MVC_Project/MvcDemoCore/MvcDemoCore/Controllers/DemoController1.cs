using Microsoft.AspNetCore.Mvc;

namespace MvcDemoCore.Controllers
{
    public class DemoController1 : Controller
    {
        public string Index()
        {
            return "Welcome to Index Page";
        }
    }
}

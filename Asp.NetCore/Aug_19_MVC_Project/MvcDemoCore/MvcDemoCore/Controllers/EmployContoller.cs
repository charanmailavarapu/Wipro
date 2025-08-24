using Microsoft.AspNetCore.Mvc;
using MvcDemoCore.Models;

namespace MvcDemoCore.Controllers
{
    public class EmployContoller : Controller
    {
        [HttpPost]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            Employ deleteEmploy = null;
            try
            {
                deleteEmploy = new Employ();
                deleteEmploy.Name = collection["Name"];
                deleteEmploy.Basic = Convert.ToInt32(collection["Basic"]);

                var service = new EmployService();
                service.DeleteEmploy(id);
                return RedirectToAction("Index");
            }
            catch
            {
                return View(deleteEmploy);
            }
        }

        [HttpPost]
        public ActionResult Edit(int id, IFormCollection collection) 
        {
            Employ updateEmploy = null;
            try
            {
                updateEmploy = new Employ();
                updateEmploy.Empno = id;
                updateEmploy.Name = collection["Name"];
                updateEmploy.Basic = Convert.ToInt32(collection["Basic"]);

                var service = new EmployService();
                service.UpdateEmploy(updateEmploy);
                return RedirectToAction("Index");
            }
            catch
            {
                return View(updateEmploy);
            }
        }

        public IActionResult Create()
        {
            return View(new Employ());
        }

        public IActionResult Edit(int id)
        {
            var service = new EmployService();
            Employ employ = service.ShowEmploy(id);
            return View(employ);

        }

        public IActionResult Delete(int id)
        {
            var service = new EmployService();
            Employ employ = service.ShowEmploy(id);
            return View(employ);
        }
        public IActionResult Search(int id)
        {
            var employService = new EmployService();
            Employ employ = employService.ShowEmploy(id);
            return View(employ);
        }
        public IActionResult Index()
        {
            var employService = new EmployService();
            List<Employ> employs = employService.GetAllEmploys();
            ViewData["employs"] = employs;
            ViewBag.employs = employs;
            return View(employs);
        }

    }
}

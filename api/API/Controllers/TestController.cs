using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace API.Controllers
{
    public class TestController : Controller
    {
        [Authorize]
        [HttpGet("api/GetPrivateMessage")]
        public IActionResult GetPrivateMessage()
        {
            return Json("This is a protected endpoint, you shouldn't be able to access this unless you're authenticated in the React app.");
        }

        [HttpGet("api/GetPublicMessage")]
        public IActionResult GetPublicMessage()
        {
            return Json("This is a public endpoint, all users from React app should be able to access this endpoint.");
        }
    }
}

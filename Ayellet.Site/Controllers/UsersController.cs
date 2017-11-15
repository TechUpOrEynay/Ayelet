using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Ayellet.Bl;
using System.Collections;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using Ayellet.Entities;
namespace OrEyni.Site.Controllers
{
    [RoutePrefix("api/Users")]
    public class UsersController : ApiController
    {
        UsersBl _usersBl;
        public UsersController()
        {
            _usersBl = new UsersBl();
        }

        [HttpGet]
        [Route("Login")]
        public Boolean Login(string userName, string password)
        {
            return _usersBl.Login(userName, password);
        }
        [HttpGet]
        [Route("GetUsers")]
        public IList<User> GetUsers()
        {
            return _usersBl.GetUsers();
        }
    }
}
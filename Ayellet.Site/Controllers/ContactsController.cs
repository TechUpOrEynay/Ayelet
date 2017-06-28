using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Ayellet.Bl;
using System.Collections;
using Ayellet.Model;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Ayellet.Site.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    [RoutePrefix("api/Contacts")]
    public class ContactsController : BaseController
    {
        ContactsBl _contactsBl;
       
        public ContactsController()
        {
            _contactsBl = new ContactsBl();
        }
        [HttpGet]
        public HttpResponseMessage Get()
        {
            return base.RunCodeSafly<IList<Contact>>("GetContacts", () =>
             {
                 return _contactsBl.GetContacts();
             });
        }

        [Route("GetContactDetail/{id}")]
        public HttpResponseMessage GetContactDetail(int id)
        {
            return base.RunCodeSafly<Contact>("GetContactDetail", () =>
            {
                return _contactsBl.GetContact(id);
            });
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Ayellet.Bl;
using System.Collections;
using Ayellet.Entities;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Ayellet.Site.Controllers
{
    [RoutePrefix("api/Contacts")]
    public class ContactsController : ApiController
    {
        ContactsBl _contactsBl;
       
        public ContactsController()
        {
            _contactsBl = new ContactsBl();
        }
        [HttpGet]
        [Route("GetContacts")]
        public IList<Contact> GetContacts()
        {
                 return _contactsBl.GetContacts();
        }
        [HttpGet]
        [Route("GetContactDetail/{id}")]
        public Contact GetContactDetail(int id)
        {
                return _contactsBl.GetContact(id);
        }
    }
}

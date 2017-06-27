using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Ayellet.Bl;
using System.Collections;
using Ayellet.Model;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Ayellet.Controllers
{
    [Route("api/[controller]")]//api/contacts
    public class ContactsController : BaseController
    {
        ContactsBl _contactsBl;
        public ContactsController()
        {
            _contactsBl = new ContactsBl();
        }
        [HttpGet("[action]")]
        public IActionResult GetContacts()
        {
            return base.RunCodeSafly<IList<Contact>>("GetContacts", () =>
             {
                 return _contactsBl.GetContacts();
             });
        }

        [HttpGet("[action]/{id}")]
        public IActionResult GetContactDetail(int id)
        {
            return base.RunCodeSafly<Contact>("GetContactDetail", () =>
            {
                return _contactsBl.GetContact(id);
            });
        }
    }
}

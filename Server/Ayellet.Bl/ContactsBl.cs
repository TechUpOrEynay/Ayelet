using Ayellet.Dal;
using Ayellet.Model;
using System;
using System.Collections;
using System.Collections.Generic;

namespace Ayellet.Bl
{
    public class ContactsBl
    {
        ContactsDal _contactsDal;

        public ContactsBl()
        {
            _contactsDal = new ContactsDal();
        }
        public IList<Contact> GetContacts()
        {
            return _contactsDal.GetContacts();
        }
        public Contact GetContact(int id)
        {
            return _contactsDal.GetContact(id);
        }
    }
}

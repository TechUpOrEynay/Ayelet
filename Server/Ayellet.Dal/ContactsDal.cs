using Ayellet.Model;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Ayellet.Dal
{
    public class ContactsDal
    {
        public List<Contact> GetContacts()
        {
            using (AyelletContext context = new AyelletContextFactory().Create())
            {
                return context.Contact.ToList();
            }
        }
        public Contact GetContact(int id)
        {
            using (AyelletContext context = new AyelletContextFactory().Create())
            {
                return context.Contact.FirstOrDefault(c => c.ContactId == id);
            }
        }
    }
}

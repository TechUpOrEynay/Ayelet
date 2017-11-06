using System;
using System.Collections.Generic;
using System.Linq;
using Ayellet.Entities;

namespace Ayellet.Dal
{
    public class ContactsDal
    {
        public List<Contact> GetContacts()
        {
            using (AyelletEntities context = new AyelletEntities())
            {
                return context.Contact.ToList();
            }
        }

        
        public Contact GetContact(int id)
        {
            using (AyelletEntities context = new AyelletEntities())
            {
                //if (id != 0)
                //{
                //    Contact contact = new Contact()
                //    {
                //        ID = context.Contact.Max(x => x.ID) + 1,
                //        FirstName = "מאיר",
                //        LastName = "שי"
                //    };
           
                //    context.Contact.Add(contact);
                //    context.SaveChanges();
                //}
                
                return context.Contact.FirstOrDefault(c => c.ID == id);
            }
        }





    }
}

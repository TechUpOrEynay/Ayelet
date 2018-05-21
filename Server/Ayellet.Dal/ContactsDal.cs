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

        public Boolean UpdateContactDetailes(Contact contact)
        {
            using (AyelletEntities context = new AyelletEntities())
            {
                if (contact != null)
                {
                    int idContact = contact.ID;
                    var currentContact = context.Contact.FirstOrDefault(x => x.ID == idContact);
                    currentContact.FirstName = contact.FirstName;
                    currentContact.IsNewlater = contact.IsNewlater;
                    currentContact.IsVolunteer = contact.IsVolunteer;
                    currentContact.LastName = contact.LastName;
                    currentContact.LocationID = contact.LocationID;
                    currentContact.Mobile = contact.Mobile;
                    currentContact.Notes = contact.Notes;
                    currentContact.Phone = contact.Phone;
                    currentContact.RelatedPersonID = contact.RelatedPersonID;
                    if (context.SaveChanges() > 0)
                        return true;
                }
                return false;
            }
            
        }

        public int createNewContact(Contact contact)
        {
            using (AyelletEntities context = new AyelletEntities())
            {
                if (contact != null)
                {
                    Contact newContact=new Contact();
                    newContact = null;
                    newContact.FirstName = contact.FirstName;
                    newContact.IsNewlater = contact.IsNewlater;
                    newContact.IsVolunteer = contact.IsVolunteer;
                    newContact.LastName = contact.LastName;
                    newContact.LocationID = contact.LocationID;
                    newContact.Mobile = contact.Mobile;
                    newContact.Notes = contact.Notes;
                    newContact.Phone = contact.Phone;
                    newContact.RelatedPersonID = contact.RelatedPersonID;
                    newContact.ID = context.Contact.Max(x => x.ID) + 1;
                    context.Contact.Add(newContact);
                    context.SaveChanges();
                    return newContact.ID;
                }
                return 0;

            }
        }

    }
}

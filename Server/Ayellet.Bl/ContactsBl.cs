using Ayellet.Dal;
using Ayellet.Entities;
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

        public Boolean UpdateContactDetailes(Contact contact)
        {
            return _contactsDal.UpdateContactDetailes(contact);
        }
        //public Boolean deleteProjectVolunteer(int id)
        //{
        //    ProjectVolunteerDal _projectVolunteerDal = new ProjectVolunteerDal();
        //    return _projectVolunteerDal.deleteProjectVolunteer(id);
        //}
        public int createNewContact(Contact contact)
        {
            return _contactsDal.createNewContact(contact);
        }
    }
}

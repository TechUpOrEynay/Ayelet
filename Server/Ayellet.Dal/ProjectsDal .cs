using System;
using System.Collections.Generic;
using System.Linq;
using Ayellet.Entities;

namespace Ayellet.Dal
{
    public class ProjectsDal
    {
        public List<Project> GetProjects()
        {
            using (AyelletEntities context = new AyelletEntities())
            {
                return context.Project.ToList();
            }
        }

        
        public Project GetProjectById(int id)
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
                
                return context.Project.FirstOrDefault(c => c.ID == id);
            }
        }





    }
}

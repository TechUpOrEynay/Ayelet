using System;
using System.Collections.Generic;
using System.Linq;
using Ayellet.Entities;
using Ayellet.Entities.Models;

namespace Ayellet.Dal
{
    public class ProjectVolunteerDal
    {

        public List<ProjectVolunteer> GetProjectVolunteer()
        {
            using (AyelletEntities context = new AyelletEntities())
            {
                return context.ProjectVolunteer.ToList();
            }
        }
        //public Boolean DeleteProjectVolunteer(int id)
        //{
        //    using (AyelletEntities context = new AyelletEntities())
        //    {
        //        if (id != 0)
        //        {
        //            context.ProjectVolunteer.Remove(context.ProjectVolunteer.FirstOrDefault(x => x.ID == id));
        //            context.SaveChanges();
        //            return true;
        //        }
        //        return false;
        //    }
        //}

        public Boolean AddProjectVolunteer(ProjectVolunteer newProjectV)
        {
            using (AyelletEntities context = new AyelletEntities())
            {
                if (newProjectV != null)
                {
                    newProjectV.ID = context.ProjectVolunteer.Max(x => x.ID) + 1;
                    context.ProjectVolunteer.Add(newProjectV);
                    context.SaveChanges();
                    return true;
                }
                return false;
            }
        }
        public Boolean CreatNewProjectVolanteer(ProjectVolunteer projectVolunteer)
        {
            using (AyelletEntities context = new AyelletEntities())
            {
                if (projectVolunteer != null)
                {
                    projectVolunteer.ID = context.ProjectVolunteer.Max(x => x.ID) + 1;
                    context.ProjectVolunteer.Add(projectVolunteer);
                    context.SaveChanges();
                    return true;
                }
                return false;
            }
        }
        public Boolean UpdateProjectVolunteerDetials(ProjectVolunteer projectVolunteer)
        {
            using (AyelletEntities context = new AyelletEntities())
            {
                if (projectVolunteer != null)
                {
                    var projectNew = context.ProjectVolunteer.First(x => x.ID == projectVolunteer.ID);
                    projectNew.IsActive = projectVolunteer.IsActive;
                    projectNew.ProjectID = projectVolunteer.ProjectID;
                    projectNew.ContactID = projectVolunteer.ContactID;
                    projectNew.AreaID = projectVolunteer.AreaID;
                    projectNew.Details = projectVolunteer.Details;
                    projectNew.ContactID = projectVolunteer.ContactID;
                    context.SaveChanges();
                    return true;
                }
                return false;
            }
        }

        public Boolean DeleteProjectVolunteer(int id)
        {
            using (AyelletEntities context = new AyelletEntities())
            {
                ProjectVolunteer p = context.ProjectVolunteer.FirstOrDefault(x => x.ID == id);
                if (p != null)
                {
                    context.ProjectVolunteer.Remove(p);
                    context.SaveChanges();
                    return true;
                }
                return false;
            }
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using Ayellet.Entities;
using Ayellet.Entities.Models;


namespace Ayellet.Dal
{
    public class ProjectInterstedDal
    {
        public List<ProjectIntersted> GetProjectIntersted()
        {
            using (AyelletEntities context = new AyelletEntities())
            {
                return context.ProjectIntersted.ToList();
            }
        }
        

        public Boolean AddProjectIntersted(ProjectIntersted newProjectI)
        {
            using (AyelletEntities context = new AyelletEntities())
            {
                if (newProjectI != null)
                {
                    newProjectI.ID = context.ProjectIntersted.Max(x => x.ID) + 1;
                    context.ProjectIntersted.Add(newProjectI);
                    context.SaveChanges();
                    return true;
                }
                return false;
            }
        }
        public Boolean CreatNewProjectIntersted(ProjectIntersted projectIntersted)
        {
            using (AyelletEntities context = new AyelletEntities())
            {
                if (projectIntersted != null)
                {
                    projectIntersted.ID = context.ProjectIntersted.Max(x => x.ID) + 1;
                    context.ProjectIntersted.Add(projectIntersted);
                    context.SaveChanges();
                    return true;
                }
                return false;
            }
        }
        public Boolean UpdateProjectInterestedDetials(ProjectIntersted projectIntersted)
        {
            using (AyelletEntities context = new AyelletEntities())
            {
                if (projectIntersted != null)
                {
                    var projectNew = context.ProjectIntersted.First(x => x.ID == projectIntersted.ID);
                    projectNew.IsActive = projectIntersted.IsActive;
                    projectNew.ProjectID = projectIntersted.ProjectID;
                    projectNew.ContactID = projectIntersted.ContactID;
                    projectNew.Details = projectIntersted.Details;
                    context.SaveChanges();
                    return true;
                }
                return false;
            }
        }

        public Boolean DeleteProjectIntersted(int id)
        {
            using (AyelletEntities context = new AyelletEntities())
            {
                ProjectIntersted p = context.ProjectIntersted.FirstOrDefault(x => x.ID == id);
                if (p != null)
                {
                    context.ProjectIntersted.Remove(p);
                    context.SaveChanges();
                    return true;
                }
                return false;
            }
        }
    }
}

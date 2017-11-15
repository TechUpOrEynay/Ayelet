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
                return context.Project.FirstOrDefault(c => c.ID == id);
            }
        }
        public Boolean UpdateProjectDetailes(Project project)
        {
            using (AyelletEntities context = new AyelletEntities())
            {
                if (project != null)
                {
                    var fromDB = context.Project.First(x => x.ID == project.ID);
                    fromDB.Name = project.Name;
                    fromDB.Date = project.Date;
                    fromDB.Details = project.Details;
                    context.SaveChanges();
                    return true;
                }
                return false;
            }
        }

        public int createNewProject(Project project)
        {
            using (AyelletEntities context = new AyelletEntities())
            {
                if (project != null)
                {
                    project.ID = context.Project.Max(x => x.ID) + 1;
                    context.Project.Add(project);
                    context.SaveChanges();
                    return project.ID;
                }
                return 0;

            }

        }
        public Boolean deleteProject(int id)
        {
            using (AyelletEntities context = new AyelletEntities())
            {
                if (id != 0)
                {
                    //context.Project.First(x => x.ID == id).IsActive = false;
                    context.SaveChanges();
                    return true;
                }
                return false;
            }
        }

    }
}

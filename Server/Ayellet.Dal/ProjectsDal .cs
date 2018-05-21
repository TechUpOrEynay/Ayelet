using System;
using System.Collections.Generic;
using System.Linq;
using Ayellet.Entities;
using Ayellet.Entities.Models;

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
            //C:\Users\user1\Desktop\rivki\Ayelet\Server\Ayellet.Dal\ProjectsDal .cs
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
                    int idProject = project.ID;
                    var fromDB = context.Project.First(x => x.ID == idProject);
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
                    Project p = new Project();
                    p.Date = project.Date;
                    p.Details = project.Details;
                    p.Name = project.Name;
                    p.ID = context.Project.Max(x => x.ID) + 1;
                    context.Project.Add(p);
                    context.SaveChanges();
                    return p.ID;
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


        public dynamic GetProjectsVolunteers()
        {
            using (AyelletEntities context = new AyelletEntities())
            {
                // var a = context.ProjectIntersted.ToList();
                // var b = context.Contact.ToList();
                var query = (from x in context.ProjectVolunteer.AsEnumerable()
                             join y in context.Contact.AsEnumerable()
                             on x.ContactID equals y.ID
                             join z in context.Location.AsEnumerable()
                            on y.LocationID equals z.ID
                             join w in context.Area.AsEnumerable()
                          on z.AreaID equals w.ID
                             select new
                             {
                                 id = x.ID,
                                 projectId = x.ProjectID,
                                 contactID = x.ContactID,
                                 Details = x.Details,
                                 IsActive = x.IsActive,
                                 contactLastName = y.LastName,
                                 contactFirstName = y.FirstName,
                                 contactPhone = y.Phone,
                                 contactEmail = "efrat@gmail.com",
                                 ContactLocation = z.Name,
                                 ContactArea = w.Name
                             }).ToList();
                return query;
            }
        }

        public ProjectVolunteer addVolunteer(ProjectVolunteer projectVolunteer)
        {
            using (AyelletEntities context = new AyelletEntities())
            {
                try
                {
                    projectVolunteer.ID = context.ProjectVolunteer.Max(x => x.ID) + 1;
                    context.ProjectVolunteer.Add(projectVolunteer);
                    context.SaveChanges();
                    return projectVolunteer;
                }
                catch
                {
                    return null;
                }
            }
        }

        public dynamic addInteresting(dynamic projectIntersted)
        {
            using (AyelletEntities context = new AyelletEntities())
            {
                try
                {                    
                    ProjectIntersted p = new ProjectIntersted();
                    p.ID = context.ProjectIntersted.Max(x => x.ID) + 1;
                    p.ProjectID = Convert.ToInt32(projectIntersted.ProjectID);
                    p.ContactID = projectIntersted.ContactID;
                    p.Details = projectIntersted.Details;
                    p.IsActive = projectIntersted.IsActive;
                    context.ProjectIntersted.Add(p);
                    context.SaveChanges();
                    return projectIntersted;
                }
                catch
                {
                    return null;
                }
            }
        }
        public dynamic GetProjectsIntersted()
        {
            using (AyelletEntities context = new AyelletEntities())
            {
                // var a = context.ProjectIntersted.ToList();
                // var b = context.Contact.ToList();
                var query = (from x in context.ProjectIntersted.AsEnumerable()
                             join y in context.Contact.AsEnumerable()
                             on x.ContactID equals y.ID
                             join z in context.Location.AsEnumerable()
                            on y.LocationID equals z.ID
                             join w in context.Area.AsEnumerable()
                             on z.AreaID equals w.ID
                             select new
                             {
                                 id = x.ID,
                                 projectId = x.ProjectID,
                                 contactID = x.ContactID,
                                 Details = x.Details,
                                 IsActive = x.IsActive,
                                 contactLastName = y.LastName,
                                 contactFirstName = y.FirstName,
                                 contactPhone = y.Phone,
                                 // contactEmail = y.Eamil,
                                 ContactLocation =z.Name,
                                 ContactArea = w.Name
                             }).ToList();
                return query;
            }
        }


        public string getLocationNameById(int id)
        {
            using (AyelletEntities context = new AyelletEntities())
            {
                var locationName = context.Location.FirstOrDefault(c => c.ID == id).Name;
                if (locationName != " ")
                    return locationName;
                else
                    return null;
            }
        }

        public dynamic getProjectInterstedNotEmbed(int id)
        {
            using (AyelletEntities context = new AyelletEntities())
            {
                if (id > 0)
                {
                  var pi = GetProjectsIntersted();
                   var ppi = pi;
                    List<dynamic> listp = new List<dynamic>();
                    foreach (var item in ppi)
                    {
                        listp.Add(item);
                    }
                    //List<ProjectIntersted> pi = new List<ProjectIntersted>();
                    // dynamic pi = query.Where(x => x.ProjectID == id);
                    if (pi != null )
                    {
                        foreach (var p in ppi)
                        {
                            foreach (var e in context.Embed)
                            {
                                if (p.id == e.InterstedtID)
                                    listp.Remove(p);
                            }
                        }
                    }
                    return listp;
                }
                return null;
            }
        }

        public dynamic getProjectVolunteersNotEmbed(int id)
        {
            using (AyelletEntities context = new AyelletEntities())
            {
                if (id > 0)
                {
                    var pv = GetProjectsVolunteers();
                    var ppv = pv;
                    List<dynamic> listp = new List<dynamic>();
                    foreach (var item in ppv)
                    {
                        listp.Add(item);

                    }
                    //List<ProjectVolunteer> pi = new List<ProjectVolunteer>();
                    //List<dynamic> pi = query.Where(x => x.projectId == id).ToList();
                    if (pv != null )
                    {
                        foreach (var p in pv)
                        {
                            foreach (var e in context.Embed)
                            {
                                if (p.id == e.VolunteerID)
                                    listp.Remove(p);
                                
                            }
                        }
                    }
                    return listp;
                }
                return null;
            }
        }

        public Boolean embProject(Embed embed)
        {
            using (AyelletEntities context = new AyelletEntities())
            {
                if (embed != null)
                {
                    if (context.Embed.Count() == 0)
                    {
                       // List<Embed> em = new List<Embed>();
                        embed.ID = 0;
                        context.Embed.Add(embed);
                        context.SaveChanges();
                        return true;

                    }
                    else
                    {
                        embed.ID = context.Embed.Max(x => x.ID) + 1;
                        context.Embed.Add(embed);
                        try { context.SaveChanges();
                            return true;
                        }

                        catch
                        {
                            return false;
                        }
                           
                       
                    }

                   
                }
                return false;
            }
        }

    }
}

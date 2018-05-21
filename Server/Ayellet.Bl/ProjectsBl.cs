using Ayellet.Dal;
using Ayellet.Entities;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Ayellet.Entities.Models;

namespace Ayellet.Bl
{
    public class ProjectsBl
    {
        ProjectsDal _projectsDal;

        public ProjectsBl()
        {
            _projectsDal = new ProjectsDal();
        }
        public IList<Project> GetProjects()
        {
            return _projectsDal.GetProjects();
        }

        public Project GetProjectById(int id)
        {
            return _projectsDal.GetProjectById(id);
        }

        public Boolean UpdateProjectDetailes(Project project)
        {
            return _projectsDal.UpdateProjectDetailes(project);
        }

        public int createNewProject(Project project)
        {
            return _projectsDal.createNewProject(project);
        }

        public Boolean deleteProject(int id)
        {
            return _projectsDal.deleteProject(id);
        }

        public dynamic GetProjectsIntersted()
        {
            return _projectsDal.GetProjectsIntersted();
        }

        public dynamic GetProjectsVolunteers()
        {
            return _projectsDal.GetProjectsVolunteers();
        }
        //public Project GetProjectById(int id)
        //{
        //    return _projectsDal.GetProjectById(id);
        //}
        //public Boolean UpdateProjectDetailes(Project project)
        //{
        //    return _projectsDal.UpdateProjectDetailes(project);
        //}
        public dynamic addInteresting(dynamic ProjectIntersted)
        {
            return _projectsDal.addInteresting(ProjectIntersted);
        }

        //public int createNewProject(Project project)
        //{
        //    return _projectsDal.createNewProject(project);
        //}

        //public Boolean deleteProject(int id)
        //{
        //    return _projectsDal.deleteProject(id);
        //}

        public ProjectVolunteer addVolunteer(ProjectVolunteer ProjectVolunteer)
        {
            return _projectsDal.addVolunteer(ProjectVolunteer);
        }

        public string getLocationNameById(int id)
        {
            return _projectsDal.getLocationNameById(id);
        }

        public dynamic getProjectInterstedNotEmbed(int id)
        {
            return _projectsDal.getProjectInterstedNotEmbed(id);
        }
        public dynamic getProjectVolunteersNotEmbed(int id)
        {
            return _projectsDal.getProjectVolunteersNotEmbed(id);
        }
        public Boolean embProject(Embed embed)
        {
            return _projectsDal.embProject(embed);
        }
        
    }
}


using Ayellet.Dal;
using Ayellet.Entities;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Ayellet.Entities.Models;

namespace Ayellet.Bl
{
    public class InterstedDetailsBl
    {
        ProjectInterstedDal _projectInterstedDal;
        public InterstedDetailsBl()
        {
            _projectInterstedDal = new ProjectInterstedDal();
        }
        public List<Project> GetProjectByIdContact(int id)
        {
            ProjectInterstedDal _projectInterstedDal = new ProjectInterstedDal();
            List<ProjectIntersted> listProjectIntersted = _projectInterstedDal.GetProjectIntersted();
            List<ProjectIntersted> projectI = listProjectIntersted.Where(x => x.ContactID == id).ToList();
            {
                if (projectI != null)
                {
                    ProjectsDal _projectsDal = new ProjectsDal();
                    List<Project> listProjects = _projectsDal.GetProjects();
                    List<Project> project = new List<Project>();

                    for (int i = 0; i < projectI.Count(); i++)
                    {
                        var idProjectI = projectI[i].ProjectID;
                        project = listProjects.Where(x => x.ID == idProjectI).ToList();
                    }
                    if (project != null)
                        return project;
                }

            }
            return null;
        }

        //List datials of projects of projects from list current projectVolunteer
        public List<Project> SortedProjectsOfProjectI(int count, List<ProjectIntersted> projectI)
        {
            ProjectsDal _projectsDal = new ProjectsDal();
            List<Project> listProjects = new List<Project>();
            listProjects = _projectsDal.GetProjects();
            List<Project> sortedListproject = new List<Project>();

            Project varProject = new Project();
            for (int i = 0; i < projectI.Count(); i++)
            {
                var idProjectI = projectI[i].ProjectID;
                for (int j = 0; j < listProjects.Count(); j++)
                {
                    if (listProjects[j].ID == idProjectI)
                    {
                        varProject = listProjects[j];
                        j = listProjects.Count();
                    }
                }
                if (varProject != null)
                {
                    sortedListproject.Add(varProject);
                }
            }
            if (sortedListproject != null)
                return sortedListproject;
            return null;

        }

        public List<ModelInterstedDetails> GetProjectsByIdContact(int id)
        {
            ProjectInterstedDal _projectInterstedDal = new ProjectInterstedDal();
            List<ProjectIntersted> listProjectIntersted = _projectInterstedDal.GetProjectIntersted();
            List<ProjectIntersted> projectI = new List<ProjectIntersted>();
            projectI = listProjectIntersted.Where(x => x.ContactID == id).ToList();

            if (projectI != null)
            {
                List<ModelInterstedDetails> listDetailsProjectsIntersted = new List<ModelInterstedDetails>();

                List<Project> sortedListproject = SortedProjectsOfProjectI(projectI.Count(), projectI);
                if (sortedListproject != null)
                {
                    for (int i = 0; i < sortedListproject.Count(); i++)
                    {
                        ModelInterstedDetails oneProject = new ModelInterstedDetails();
                        {
                            oneProject.IdPoject = sortedListproject[i].ID;
                            oneProject.NameProject = sortedListproject[i].Name;
                            oneProject.Date = sortedListproject[i].Date;
                            oneProject.Details = sortedListproject[i].Details;
                            oneProject.RoleInterested = projectI[i].Details;
                            oneProject.IdProbectIntersted = projectI[i].ID;
                            oneProject.IdContact = id;
                            //oneProject.RoleVolunteer = listDatialsRolV[i];
                        }
                        if (oneProject != null)
                        {
                            listDetailsProjectsIntersted.Add(oneProject);
                        }
                    }
                    if (listDetailsProjectsIntersted != null)
                    {
                        return listDetailsProjectsIntersted;
                    }
                    return null;
                }
                return null;
            }
            return null;
        }

        public Boolean UpdateProjectDetiales(ModelInterstedDetails varModelProjectV)
        {
            int idproject = varModelProjectV.IdPoject;
            ProjectsDal _projectDal = new ProjectsDal();
            Project project = _projectDal.GetProjects().FirstOrDefault(x => x.ID == idproject);
            if (project != null)
            {
                project.Date = varModelProjectV.Date;
                project.Details = varModelProjectV.Details;
                project.Name = varModelProjectV.NameProject;
                return _projectDal.UpdateProjectDetailes(project);
            }
            return false;
        }

        //public Boolean UpdateProjectInterstedDetials(ModelInterstedDetails varModelProjectI)
        //{
        //    int idVarModelP = varModelProjectV.IdProbectVolunteer;
        //    ProjectVolunteerDal _projectvolunteerDal = new ProjectVolunteerDal();
        //    ProjectVolunteer projectVolunteer = _projectvolunteerDal.GetProjectVolunteer().FirstOrDefault(x => x.ID == idVarModelP);
        //    if (projectVolunteer != null)
        //    {
        //        projectVolunteer.AreaID = varModelProjectV.IdArea;
        //        projectVolunteer.ProjectID = varModelProjectV.IdPoject;
        //        projectVolunteer.Details = varModelProjectV.RoleVolunteer;
        //        return _projectvolunteerDal.UpdateProjectVolunteerDetials(projectVolunteer);
        //    }
        //    return false;
        //}

        //public Boolean UpdateProjectModel(ModelInterstedDetails varModelProjectI)
        //{
        //    if (UpdateProjectDetiales(varModelProjectI) && UpdateProjectInterstedDetials(varModelProjectI))
        //    {
        //        return true;
        //    }
        //    return false;
        //}
        //public Boolean AddProbectVolanteers(AllDetailsProjects varModelProjectV, int idContact)
        //{
        //    int idVarModelP = varModelProjectV.IdProbectVolunteer;
        //    ProjectVolunteerDal _projectvolunteerDal = new ProjectVolunteerDal();
        //    ProjectVolunteer pV = null;
        //    if (varModelProjectV != null)
        //    {
        //        pV.AreaID = varModelProjectV.IdArea;
        //        pV.ContactID = idContact;
        //        pV.Details = varModelProjectV.Details;
        //        pV.IsActive = true;
        //        pV.ProjectID = varModelProjectV.IdPoject;
        //        return _projectvolunteerDal.AddProjectVolunteer(pV);
        //    }
        //    return false;

        //}
        //public Boolean CreateNewProjectVolunteerDetials(AllDetailsProjects varModelProjectV, int idContact)
        //{
        //    return AddProbectVolanteers(varModelProjectV, idContact);
        //}

        //public Boolean DeleteProjectVolunteer(int id)
        //{
        //    ProjectVolunteerDal _projectvolunteerDal = new ProjectVolunteerDal();
        //    return _projectvolunteerDal.DeleteProjectVolunteer(id);
        //}
    }
}

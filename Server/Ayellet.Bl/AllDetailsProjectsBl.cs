using Ayellet.Dal;
using Ayellet.Entities;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Ayellet.Entities.Models;

namespace Ayellet.Bl
{
    public class AllDetailsProjectsBl
    {
        public List<Project> GetProjectByIdContact(int id)
        {
            ProjectVolunteerDal _projectVolunteerDal = new ProjectVolunteerDal();
            List<ProjectVolunteer> listProjectVolunteer = _projectVolunteerDal.GetProjectVolunteer();
            List<ProjectVolunteer> projectV = listProjectVolunteer.Where(x => x.ContactID == id).ToList();
            {
                if (projectV != null)
                {
                    ProjectsDal _projectsDal = new ProjectsDal();
                    List<Project> listProjects = _projectsDal.GetProjects();
                    List<Project> project = new List<Project>();

                    for (int i = 0; i < projectV.Count(); i++)
                    {
                        var idProjectV = projectV[i].ProjectID;
                        project = listProjects.Where(x => x.ID == idProjectV).ToList();
                    }
                    if (project != null)
                        return project;
                }

            }
            return null;
        }

        //List names of areas of projects from list current projectVolunteer
        public List<Area> SortedAreasOfProjectsV(int count, List<ProjectVolunteer> projectV)
        {
            AreaDal area = new AreaDal();
            List<Area> listArea = new List<Area>();
            listArea = area.GetAreas();
            List<Area> sortedListAreas = new List<Area>();

            Area varArea = new Area();
            for (int i = 0; i < count; i++)
            {
                var idArea = projectV[i].AreaID;
                for (int j = 0; j < listArea.Count(); j++)
                {
                    if (listArea[j].ID == idArea)
                    {
                        varArea = listArea[j];
                        j = listArea.Count();
                    }
                }
                if (varArea != null)
                {
                    sortedListAreas.Add(varArea);
                }
            }
            if (sortedListAreas != null)
                return sortedListAreas;
            return null;
        }

        //List datials of projects of projects from list current projectVolunteer
        public List<Project> SortedProjectsOfProjectV(int count, List<ProjectVolunteer> projectV)
        {
            ProjectsDal _projectsDal = new ProjectsDal();
            List<Project> listProjects = new List<Project>();
            listProjects = _projectsDal.GetProjects();
            List<Project> sortedListproject = new List<Project>();

            Project varProject = new Project();
            for (int i = 0; i < projectV.Count(); i++)
            {
                var idProjectV = projectV[i].ProjectID;
                for (int j = 0; j < listProjects.Count(); j++)
                {
                    if (listProjects[j].ID == idProjectV)
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

        public List<AllDetailsProjects> GetProjectsByIdContact(int id)
        {
            ProjectVolunteerDal _projectVolunteerDal = new ProjectVolunteerDal();
            List<ProjectVolunteer> listProjectVolunteer = _projectVolunteerDal.GetProjectVolunteer();
            List<ProjectVolunteer> projectV = new List<ProjectVolunteer>();
            projectV = listProjectVolunteer.Where(x => x.ContactID == id).ToList();

            if (projectV != null)
            {
                List<AllDetailsProjects> listDetailsProjects = new List<AllDetailsProjects>();

                List<Project> sortedListproject = SortedProjectsOfProjectV(projectV.Count(), projectV);
                List<Area> sortedListAreas = SortedAreasOfProjectsV(projectV.Count(), projectV);
                if (sortedListproject != null && sortedListAreas != null)
                {

                    for (int i = 0; i < sortedListproject.Count(); i++)
                    {
                        AllDetailsProjects oneProject = new AllDetailsProjects();
                        {
                            oneProject.IdArea = sortedListAreas[i].ID;
                            oneProject.IdPoject = sortedListproject[i].ID;
                            oneProject.NameProject = sortedListproject[i].Name;
                            oneProject.Date = sortedListproject[i].Date;
                            oneProject.Details = sortedListproject[i].Details;
                            oneProject.NameArea = sortedListAreas[i].Name;
                            oneProject.RoleVolunteer = projectV[i].Details;
                            oneProject.IdProbectVolunteer = projectV[i].ID;
                            oneProject.IdContact = id;
                            //oneProject.RoleVolunteer = listDatialsRolV[i];
                        }
                        if (oneProject != null)
                        {
                            listDetailsProjects.Add(oneProject);
                        }
                    }
                    if (listDetailsProjects != null)
                    {
                        return listDetailsProjects;
                    }
                    return null;
                }
                return null;
            }
            return null;
        }

        public Boolean UpdateProbectDetiales(AllDetailsProjects varModelProjectV)
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

        public Boolean UpdateProjectVolunteerDetials(AllDetailsProjects varModelProjectV)
        {
            int idVarModelP = varModelProjectV.IdProbectVolunteer;
            ProjectVolunteerDal _projectvolunteerDal = new ProjectVolunteerDal();
            ProjectVolunteer projectVolunteer = _projectvolunteerDal.GetProjectVolunteer().FirstOrDefault(x => x.ID == idVarModelP);
            if (projectVolunteer != null)
            {
                projectVolunteer.AreaID = varModelProjectV.IdArea;
                projectVolunteer.ProjectID = varModelProjectV.IdPoject;
                projectVolunteer.Details = varModelProjectV.RoleVolunteer;
                return _projectvolunteerDal.UpdateProjectVolunteerDetials(projectVolunteer);
            }
            return false;
        }

        public Boolean UpdateProjectModel(AllDetailsProjects varModelProjectV)
        {
            if (UpdateProbectDetiales(varModelProjectV) && UpdateProjectVolunteerDetials(varModelProjectV))
            {
                return true;
            }
            return false;
        }
        public Boolean AddProbectVolanteers(AllDetailsProjects varModelProjectV)
        {
            int idVarModelP = varModelProjectV.IdProbectVolunteer;
            ProjectVolunteerDal _projectvolunteerDal = new ProjectVolunteerDal();
            ProjectVolunteer pV=null;
            if(varModelProjectV!=null)
            {
                pV.AreaID = varModelProjectV.IdArea;
                pV.ContactID = varModelProjectV.IdContact;
                pV.Details = varModelProjectV.Details;
                pV.IsActive = true;
                pV.ProjectID = varModelProjectV.IdPoject;

                if( _projectvolunteerDal.AddProjectVolunteer(pV)&& UpdateProbectDetiales(varModelProjectV))
                {
                    return true;
                }
            }
            return false;

        }
        
        public Boolean CreateNewProjectVolunteerDetials(AllDetailsProjects varModelProjectV)
        {
            return AddProbectVolanteers(varModelProjectV);
        }

        public Boolean DeleteProjectVolunteer(AllDetailsProjects varModelProjectV)
        {
            ProjectVolunteerDal _projectvolunteerDal = new ProjectVolunteerDal();
            int idPv = varModelProjectV.IdProbectVolunteer;
            return _projectvolunteerDal.DeleteProjectVolunteer(idPv);
        }
    }
}

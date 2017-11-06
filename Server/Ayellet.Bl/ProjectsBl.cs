using Ayellet.Dal;
using Ayellet.Entities;
using System;
using System.Collections;
using System.Collections.Generic;

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
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Ayellet.Bl;
using System.Collections;
using Ayellet.Entities;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Ayellet.Site.Controllers
{
    [RoutePrefix("api/Projects")]
    public class ProjectsController : ApiController
    {
        ProjectsBl _projectsBl;
       
        public ProjectsController()
        {
            _projectsBl = new ProjectsBl();
        }
        [HttpGet]
        [Route("GetProjects")]
        public IList<Project> GetProjects()
        {
                 return _projectsBl.GetProjects();
        }
        [HttpGet]
        [Route("GetProjectById/{id}")]
        public Project GetProjectById(int id)
        {
                return _projectsBl.GetProjectById(id);
        }
        [HttpPost]
        [Route("UpdateProjectDetailes")]
        public Boolean UpdateProjectDetailes(Project project)
        {
            return _projectsBl.UpdateProjectDetailes(project);
        }
        
        [HttpPost]
        [Route("createNewProject")]
        public int createNewDonor(Project project)
        {
            var fromDB = _projectsBl.createNewProject(project);
            return fromDB;
        }
        [HttpGet]
        [Route("deleteProject/{id}")]
        public Boolean deleteProject(int id)
        {
            var fromDB = _projectsBl.deleteProject(id);
            return fromDB;
        }
    }
}

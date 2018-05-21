using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Ayellet.Bl;
using System.Collections;
using Ayellet.Entities;
using Ayellet.Entities.Models;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Ayellet.Site.Controllers
{
    [RoutePrefix("api/Contacts")]
    public class ContactsController : ApiController
    {
        ContactsBl _contactsBl;
        AllDetailsProjectsBl _modelProjectsBl;
        InterstedDetailsBl _modelInterestedBl;
        public ContactsController()
        {
            _contactsBl = new ContactsBl();
            _modelProjectsBl = new AllDetailsProjectsBl();
            _modelInterestedBl = new InterstedDetailsBl();
        }
        [HttpGet]
        [Route("GetContacts")]
        public IList<Contact> GetContacts()
        {
            return _contactsBl.GetContacts();
        }
        [HttpGet]
        [Route("GetContactDetail/{id}")]
        public Contact GetContactDetail(int id)
        {
            return _contactsBl.GetContact(id);
        }

        [HttpPost]
        [Route("UpdateContactDetailes")]
        public Boolean UpdateContactDetailes(Contact contact)
        {
            return _contactsBl.UpdateContactDetailes(contact);
        }
        [HttpGet]
        [Route("getProjectByIdContact/{id}")]
        public List<Project> GetProjectByIdContact(int id)
        {
            return _modelProjectsBl.GetProjectByIdContact(id);
        }
        [HttpGet]
        [Route("getProjectsByIdContact/{id}")]
        public List<AllDetailsProjects> GetProjectsByIdContact(int id)
        {
            return _modelProjectsBl.GetProjectsByIdContact(id);
        }
        [HttpPost]
        [Route("updateProjectVolunteerDetials")]
        public bool UpdateProjectVolunteerDetials(AllDetailsProjects modelProjectVolunteer)
        {
            return _modelProjectsBl.UpdateProjectModel(modelProjectVolunteer);
        }
        [HttpPost]
        [Route("createNewProjectVolunteerDetials")]
        public bool CreateNewProjectVolunteerDetials(AllDetailsProjects modelProjectVolunteer)
        {
            return _modelProjectsBl.CreateNewProjectVolunteerDetials(modelProjectVolunteer);
        }
        [HttpGet]
        [Route("getAreas")]
        public IList<Area> GetAreas()
        {
            AreaBl _areaBl = new AreaBl();
            return _areaBl.GetAreas();
        }
        [HttpPost]
        [Route("deleteProjectVolunteer")]
        public Boolean DeleteProjectVolunteer(AllDetailsProjects modelProjectVolunteer)
        {
            return _modelProjectsBl.DeleteProjectVolunteer(modelProjectVolunteer);
        }
        [HttpGet]
        [Route("getProjectsInterestedByIdContact/{id}")]
        public List<ModelInterstedDetails> GetProjectsInterestedByIdContact(int id)
        {
            return _modelInterestedBl.GetProjectsByIdContact(id);
        }
        [HttpPost]
        [Route("createNewProject")]
        public int CreateNewContact(Contact contact)
        {
            return _contactsBl.createNewContact(contact);

        }
        [HttpGet]
        [Route("getLocationById/{id}")]
        public Location GetLocationById(int id)
        {
            LocationBl _locationBl = new LocationBl();
            return _locationBl.GetLocationById(id);
        }
        [HttpGet]
        [Route("getLocations")]
        public IList<Location> GetLocations()
        {
            LocationBl _location = new LocationBl();
            return _location.GetLocations();
        }
        [HttpGet]
        [Route("getRelatedPersonById/{id}")]
        public RelatedPerson GetRelatedPersonById(int id)
        {
            RelatedPersonBl _relatedPersonBl = new RelatedPersonBl();
            return _relatedPersonBl.GetRelatedPersonById(id);
        }
        [HttpGet]
        [Route("getRelatedPerson")]
        public IList<RelatedPerson> GetRelatedPerson()
        {
            RelatedPersonBl _relatedPersonBl = new RelatedPersonBl();
            return _relatedPersonBl.GetRelatedPerson();
        }

        [HttpPost]
        [Route("updateProjectDetiales")]
        public bool UpdateProjectDetiales(ModelInterstedDetails modelInterstedDetails)
        {
            return _modelInterestedBl.UpdateProjectDetiales(modelInterstedDetails);
        }

    }
}

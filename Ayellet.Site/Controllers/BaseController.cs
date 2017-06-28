using Ayellet.Bl;
using System;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Ayellet.Site.Controllers
{
    public class BaseController: ApiController
    {

        protected HttpResponseMessage RunCodeSafly<T>(string actionDescription, Func<T> action) where T:class
        {
            T response = null;
            try
            {
                response = action();
                
                return Request.CreateResponse<T>(HttpStatusCode.OK, response);
            }
            catch (Exception ex)
            {
                ErrorManager.OnError(new Exception(string.Format("Exception occurred at {0}: {1}", Request.RequestUri, ex.ToString())));
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex.ToString());
            }
        }
    }
}

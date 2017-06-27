using Ayellet.Bl;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace Ayellet.Controllers
{
    public class BaseController:Controller
    {

        protected IActionResult RunCodeSafly<T>(string actionDescription, Func<T> action) where T:class
        {
            T response = null;
            try
            {
                response = action();
                
                return new ObjectResult(response);
            }
            catch (Exception ex)
            {
                ErrorManager.OnError(new Exception(string.Format("Exception occurred at {0}: {1}", Request.Path, ex.ToString())));
                return BadRequest(ex.ToString());
            }
        }
    }
}

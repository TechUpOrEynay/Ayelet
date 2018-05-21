using Ayellet.Dal;
using Ayellet.Entities;
using System;
using System.Collections;
using System.Collections.Generic;

namespace Ayellet.Bl
{
    public class AreaBl
    {
        AreaDal _areaDal;

             public AreaBl()
        {
            _areaDal = new AreaDal();
        }
        public IList<Area> GetAreas()
        {
            return _areaDal.GetAreas();
        }
    }
}

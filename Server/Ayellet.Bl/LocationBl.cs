using Ayellet.Dal;
using Ayellet.Entities;
using System;
using System.Collections;
using System.Collections.Generic;


namespace Ayellet.Bl
{
   public class LocationBl
    {
        LocationDal _locationDal;
        public LocationBl()
        {
            _locationDal = new LocationDal();
        }

        public Location GetLocationById(int id)
        {
            return _locationDal.GetLocationById(id);
        }
        public IList<Location> GetLocations()
        {
            return _locationDal.GetLocations();
        }
    }
}

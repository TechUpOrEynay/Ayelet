using System;
using System.Collections.Generic;
using System.Linq;
using Ayellet.Entities;
namespace Ayellet.Dal
{
    public class LocationDal
    {
        public Location GetLocationById(int id)
        {
            using (AyelletEntities context = new AyelletEntities())
            {
                return context.Location.FirstOrDefault(l => l.ID == id);
            }
        }
        public IList<Location> GetLocations()
        {
            using (AyelletEntities context = new AyelletEntities())
            {
                return context.Location.ToList();
            }
        }
    }
}

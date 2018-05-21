using Ayellet.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ayellet.Dal
{
   public class AreaDal
    {
        public List<Area> GetAreas()
        {
            using (AyelletEntities context = new AyelletEntities())
            {
                return context.Area.ToList();
            }
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using Ayellet.Entities;
namespace Ayellet.Dal
{
    public class RelatedPersonDal
    {
        public RelatedPerson GetRelatedPersonById(int id)
        {
            using (AyelletEntities context = new AyelletEntities())
            {
                if (id > 0)
                {
                    var fromDB = context.RelatedPerson.FirstOrDefault(x => x.ID == id);


                    if (fromDB != null)
                        return fromDB;
                   
                }
                return null;
            }
        }
        public IList<RelatedPerson> GetRelatedPerson()
        {
            using (AyelletEntities context = new AyelletEntities())
            {
                return context.RelatedPerson.ToList();
            }
        }
    }
}

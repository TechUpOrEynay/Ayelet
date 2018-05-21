using Ayellet.Dal;
using Ayellet.Entities;
using System;
using System.Collections;
using System.Collections.Generic;

namespace Ayellet.Bl
{
    public class RelatedPersonBl
    {
        RelatedPersonDal _relatedPerson;
        public RelatedPersonBl()
        {
            _relatedPerson = new RelatedPersonDal();
        }

        public RelatedPerson GetRelatedPersonById(int id)
        {
            return _relatedPerson.GetRelatedPersonById(id);
        }
        public IList<RelatedPerson> GetRelatedPerson()
        {
            return _relatedPerson.GetRelatedPerson();
        }
    }
}

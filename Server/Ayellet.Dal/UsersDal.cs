using System;
using System.Collections.Generic;
using System.Linq;
using Ayellet.Entities;

namespace Ayellet.Dal
{
    public class UsersDal
    {
        public Boolean Login(string userName, string password)
        {
            using (AyelletEntities context = new AyelletEntities())
            {
                var fromDB = context.User.FirstOrDefault(x => x.UserName == userName && x.Password == password);
                if (fromDB != null)
                    return true;
                return false;
            }
        }
        public IList<User> GetUsers()
        {
            using (AyelletEntities context = new AyelletEntities())
            {
                return context.User.ToList();
            }
        }
    }
}


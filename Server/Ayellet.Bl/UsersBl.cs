using Ayellet.Dal;
using Ayellet.Entities;
using System;
using System.Collections;
using System.Collections.Generic;

namespace Ayellet.Bl
{
    public class UsersBl
    {
        UsersDal _usersDal;

        public UsersBl()
        {
            _usersDal = new UsersDal();
        }
        public Boolean Login(string userName, string password)
        { return _usersDal.Login(userName, password); }
        public IList<User> GetUsers()
        { return _usersDal.GetUsers(); }
    }
}


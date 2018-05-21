using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ayellet.Entities.Models
{
    public class AllDetailsProjects
    {
        public string NameProject { get; set; }
        public Nullable<System.DateTime> Date { get; set; }
        public string Details { get; set; }
        public string NameArea { get; set; }
        public int IdPoject { get; set; }
        public int IdArea { get; set; }
        public string RoleVolunteer { get; set; }
        public int IdProbectVolunteer { get; set; }
        public int IdContact { get; set; }

    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ayellet.Entities.Models
{
   public class ModelInterstedDetails
    {
        public string NameProject { get; set; }
        public Nullable<System.DateTime> Date { get; set; }
        public string Details { get; set; }
        public int IdPoject { get; set; }
        public string RoleInterested { get; set; }
        public int IdProbectIntersted { get; set; }
        public int IdContact { get; set; }
    }
}

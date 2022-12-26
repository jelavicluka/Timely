using System;
using System.Collections;
using System.Collections.Generic;
using System.Drawing.Drawing2D;
using System.Linq;
using System.Threading.Tasks;

namespace Timely.Models
{
    public class Counter
    {
        public int Id { get; set; }
        public DateTime startTime { get; set; }
        public DateTime stopTime { get; set; }
        public string projectName { get; set; }
        public string duration { get; set; }    

    }
}

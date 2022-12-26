using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Timely.Models
{
    public class CounterContext:DbContext
    {
        public CounterContext(DbContextOptions<CounterContext> options) : base(options)
        {

        }

        public DbSet<Counter> Counters { get; set; }
    }
}

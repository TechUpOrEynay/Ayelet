using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Ayellet.Model
{
    public partial class AyelletContext : DbContext
    {
        public virtual DbSet<Contact> Contact { get; set; }

        public AyelletContext(DbContextOptions<AyelletContext> options)
    : base(options)
        {

        }

      

//        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
//        {
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
//            optionsBuilder.UseSqlServer(@"Server=I-ROX-158;Database=Ayellet;Trusted_Connection=True;");
//        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Contact>(entity =>
            {
                entity.Property(e => e.Name).HasMaxLength(50);

                entity.Property(e => e.Tel).HasMaxLength(50);
            });
        }
    }
}
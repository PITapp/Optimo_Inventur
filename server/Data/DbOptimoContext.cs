using System.Reflection;
using System.Linq;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

using OptimoInventur.Models.DbOptimo;

namespace OptimoInventur.Data
{
    public partial class DbOptimoContext : Microsoft.EntityFrameworkCore.DbContext
    {
        private readonly IHttpContextAccessor httpAccessor;

        public DbOptimoContext(IHttpContextAccessor httpAccessor, DbContextOptions<DbOptimoContext> options):base(options)
        {
            this.httpAccessor = httpAccessor;
        }

        public DbOptimoContext(IHttpContextAccessor httpAccessor)
        {
            this.httpAccessor = httpAccessor;
        }

        partial void OnModelBuilding(ModelBuilder builder);

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<OptimoInventur.Models.DbOptimo.Base>()
                  .HasOne(i => i.BaseAnreden)
                  .WithMany(i => i.Bases)
                  .HasForeignKey(i => i.AnredeID)
                  .HasPrincipalKey(i => i.AnredeID);
            builder.Entity<OptimoInventur.Models.DbOptimo.BaseKontakte>()
                  .HasOne(i => i.Base)
                  .WithMany(i => i.BaseKontaktes)
                  .HasForeignKey(i => i.BaseID)
                  .HasPrincipalKey(i => i.BaseID);
            builder.Entity<OptimoInventur.Models.DbOptimo.Benutzer>()
                  .HasOne(i => i.Base)
                  .WithMany(i => i.Benutzers)
                  .HasForeignKey(i => i.BaseID)
                  .HasPrincipalKey(i => i.BaseID);
            builder.Entity<OptimoInventur.Models.DbOptimo.InventurArtikel>()
                  .HasOne(i => i.InventurBasis)
                  .WithMany(i => i.InventurArtikels)
                  .HasForeignKey(i => i.InventurID)
                  .HasPrincipalKey(i => i.InventurID);
            builder.Entity<OptimoInventur.Models.DbOptimo.InventurBasis>()
                  .HasOne(i => i.InventurBasisStatus)
                  .WithMany(i => i.InventurBases)
                  .HasForeignKey(i => i.LagerortStatus)
                  .HasPrincipalKey(i => i.LagerortStatus);
            builder.Entity<OptimoInventur.Models.DbOptimo.InventurErfassung>()
                  .HasOne(i => i.InventurArtikel)
                  .WithMany(i => i.InventurErfassungs)
                  .HasForeignKey(i => i.ArtikelID)
                  .HasPrincipalKey(i => i.ArtikelID);
            builder.Entity<OptimoInventur.Models.DbOptimo.Protokoll>()
                  .HasOne(i => i.Base)
                  .WithMany(i => i.Protokolls)
                  .HasForeignKey(i => i.BaseID)
                  .HasPrincipalKey(i => i.BaseID);

            builder.Entity<OptimoInventur.Models.DbOptimo.Protokoll>()
                  .Property(p => p.Gelesen)
                  .HasDefaultValueSql("0");

            builder.Entity<OptimoInventur.Models.DbOptimo.VwBase>()
                  .Property(p => p.BaseID)
                  .HasDefaultValueSql("0");

            builder.Entity<OptimoInventur.Models.DbOptimo.VwBaseAlle>()
                  .Property(p => p.BaseID)
                  .HasDefaultValueSql("0");

            builder.Entity<OptimoInventur.Models.DbOptimo.VwBaseKontakte>()
                  .Property(p => p.BaseID)
                  .HasDefaultValueSql("0");

            builder.Entity<OptimoInventur.Models.DbOptimo.VwBenutzerBase>()
                  .Property(p => p.BenutzerID)
                  .HasDefaultValueSql("0");

            builder.Entity<OptimoInventur.Models.DbOptimo.VwBenutzerRollen>()
                  .Property(p => p.BenutzerID)
                  .HasDefaultValueSql("0");

            builder.Entity<OptimoInventur.Models.DbOptimo.VwInventurArtikel>()
                  .Property(p => p.ArtikelID)
                  .HasDefaultValueSql("0");

            builder.Entity<OptimoInventur.Models.DbOptimo.VwInventurArtikel>()
                  .Property(p => p.AnzahlErfasst)
                  .HasDefaultValueSql("0");

            builder.Entity<OptimoInventur.Models.DbOptimo.VwInventurErfassung>()
                  .Property(p => p.ErfassungID)
                  .HasDefaultValueSql("0");

            builder.Entity<OptimoInventur.Models.DbOptimo.VwInventurLagerorte>()
                  .Property(p => p.InventurID)
                  .HasDefaultValueSql("0");

            builder.Entity<OptimoInventur.Models.DbOptimo.VwInventurLagerorte>()
                  .Property(p => p.AnzahlArtikel)
                  .HasDefaultValueSql("0");

            builder.Entity<OptimoInventur.Models.DbOptimo.VwInventurLagerorte>()
                  .Property(p => p.AnzahlErfasst)
                  .HasDefaultValueSql("0");

            this.OnModelBuilding(builder);
        }


        public DbSet<OptimoInventur.Models.DbOptimo.Base> Bases
        {
          get;
          set;
        }

        public DbSet<OptimoInventur.Models.DbOptimo.BaseAnreden> BaseAnredens
        {
          get;
          set;
        }

        public DbSet<OptimoInventur.Models.DbOptimo.BaseKontakte> BaseKontaktes
        {
          get;
          set;
        }

        public DbSet<OptimoInventur.Models.DbOptimo.Benutzer> Benutzers
        {
          get;
          set;
        }

        public DbSet<OptimoInventur.Models.DbOptimo.InfotexteHtml> InfotexteHtmls
        {
          get;
          set;
        }

        public DbSet<OptimoInventur.Models.DbOptimo.InventurArtikel> InventurArtikels
        {
          get;
          set;
        }

        public DbSet<OptimoInventur.Models.DbOptimo.InventurBasis> InventurBases
        {
          get;
          set;
        }

        public DbSet<OptimoInventur.Models.DbOptimo.InventurBasisStatus> InventurBasisStatuses
        {
          get;
          set;
        }

        public DbSet<OptimoInventur.Models.DbOptimo.InventurErfassung> InventurErfassungs
        {
          get;
          set;
        }

        public DbSet<OptimoInventur.Models.DbOptimo.Notizen> Notizens
        {
          get;
          set;
        }

        public DbSet<OptimoInventur.Models.DbOptimo.Protokoll> Protokolls
        {
          get;
          set;
        }

        public DbSet<OptimoInventur.Models.DbOptimo.VwBase> VwBases
        {
          get;
          set;
        }

        public DbSet<OptimoInventur.Models.DbOptimo.VwBaseAlle> VwBaseAlles
        {
          get;
          set;
        }

        public DbSet<OptimoInventur.Models.DbOptimo.VwBaseKontakte> VwBaseKontaktes
        {
          get;
          set;
        }

        public DbSet<OptimoInventur.Models.DbOptimo.VwBaseOrte> VwBaseOrtes
        {
          get;
          set;
        }

        public DbSet<OptimoInventur.Models.DbOptimo.VwBasePlz> VwBasePlzs
        {
          get;
          set;
        }

        public DbSet<OptimoInventur.Models.DbOptimo.VwBenutzerBase> VwBenutzerBases
        {
          get;
          set;
        }

        public DbSet<OptimoInventur.Models.DbOptimo.VwBenutzerRollen> VwBenutzerRollens
        {
          get;
          set;
        }

        public DbSet<OptimoInventur.Models.DbOptimo.VwInventurArtikel> VwInventurArtikels
        {
          get;
          set;
        }

        public DbSet<OptimoInventur.Models.DbOptimo.VwInventurErfassung> VwInventurErfassungs
        {
          get;
          set;
        }

        public DbSet<OptimoInventur.Models.DbOptimo.VwInventurLagerorte> VwInventurLagerortes
        {
          get;
          set;
        }

        public DbSet<OptimoInventur.Models.DbOptimo.VwRollen> VwRollens
        {
          get;
          set;
        }
    }
}

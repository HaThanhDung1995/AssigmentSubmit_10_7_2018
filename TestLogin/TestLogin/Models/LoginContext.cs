namespace TestLogin.Models
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class LoginContext : DbContext
    {
        public LoginContext()
            : base("name=LoginContext")
        {
        }

        public virtual DbSet<Category> Categories { get; set; }
        public virtual DbSet<Customer> Customers { get; set; }
        public virtual DbSet<Login> Logins { get; set; }
        public virtual DbSet<Order> Orders { get; set; }
        public virtual DbSet<Product> Products { get; set; }
        public virtual DbSet<Store> Stores { get; set; }
        public virtual DbSet<sysdiagram> sysdiagrams { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Category>()
                .Property(e => e.Name)
                .IsUnicode(false);

            modelBuilder.Entity<Category>()
                .Property(e => e.NameVn)
                .IsUnicode(false);

            modelBuilder.Entity<Category>()
                .HasMany(e => e.Products)
                .WithOptional(e => e.Category)
                .WillCascadeOnDelete();

            modelBuilder.Entity<Customer>()
                .Property(e => e.Name)
                .IsUnicode(false);

            modelBuilder.Entity<Customer>()
                .Property(e => e.Addr)
                .IsUnicode(false);

            modelBuilder.Entity<Customer>()
                .Property(e => e.Phone)
                .IsUnicode(false);

            modelBuilder.Entity<Customer>()
                .HasMany(e => e.Orders)
                .WithOptional(e => e.Customer)
                .WillCascadeOnDelete();

            modelBuilder.Entity<Login>()
                .Property(e => e.Username)
                .IsUnicode(false);

            modelBuilder.Entity<Login>()
                .Property(e => e.Pass)
                .IsUnicode(false);

            modelBuilder.Entity<Order>()
                .Property(e => e.DateT)
                .IsUnicode(false);

            modelBuilder.Entity<Product>()
                .Property(e => e.Name)
                .IsUnicode(false);

            modelBuilder.Entity<Product>()
                .Property(e => e.Price)
                .IsUnicode(false);

            modelBuilder.Entity<Store>()
                .Property(e => e.Name)
                .IsUnicode(false);

            modelBuilder.Entity<Store>()
                .Property(e => e.Addr)
                .IsUnicode(false);

            modelBuilder.Entity<Store>()
                .HasMany(e => e.Products)
                .WithOptional(e => e.Store)
                .WillCascadeOnDelete();
        }
    }
}

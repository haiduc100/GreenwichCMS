using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GreenwichCMS.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace GreenwichCMS.Context
{
    public class GreenwichContext : DbContext
    {
        public GreenwichContext() { }
        public GreenwichContext(DbContextOptions<GreenwichContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Users>(entity =>
            {
                entity.HasKey(p => p.UserId);
                entity.Property(p => p.FirstName).HasMaxLength(255);
                entity.Property(p => p.LastName).HasMaxLength(255);
                entity.Property(p => p.Gender).HasMaxLength(6);
            });
            modelBuilder.Entity<Idea>(entity =>
            {
                entity.HasOne(p => p.User).WithMany();
                entity.HasOne(p => p.IdeaCategory).WithMany(p => p.Idea);
                entity.HasMany(p => p.Reactions).WithOne(p => p.Idea);
            });

            modelBuilder.Entity<IdeaCategory>(entity =>
            {
                entity.HasMany(p => p.Idea).WithOne(p => p.IdeaCategory).OnDelete(DeleteBehavior.Cascade);
                entity.HasIndex(p => p.Title).IsUnique();
            });

        }
        public DbSet<Users> Users { get; set; }
        public DbSet<Roles> Roles { get; set; }
        public DbSet<Idea> Idea { get; set; }
        public DbSet<Reaction> Reaction { get; set; }
        public DbSet<Comment> Comment { get; set; }
        public DbSet<IdeaCategory> IdeaCategory { get; set; }
        public DbSet<FileIdea> FileIdea { get; set; }
    }
}
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace bazar.Models;

public partial class BazarStoreContext : DbContext
{
    public BazarStoreContext()
    {
    }

    public BazarStoreContext(DbContextOptions<BazarStoreContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Dimension> Dimensions { get; set; }

    public virtual DbSet<Image> Images { get; set; }

    public virtual DbSet<Metum> Meta { get; set; }

    public virtual DbSet<Product> Products { get; set; }

    public virtual DbSet<Review> Reviews { get; set; }

    public virtual DbSet<Sale> Sales { get; set; }

    public virtual DbSet<Tag> Tags { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=tcp:healt-web.database.windows.net,1433;Initial Catalog=bazar;Persist Security Info=False;User ID=health;Password=$AltF4UliMar123#;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Dimension>(entity =>
        {
            entity.HasKey(e => e.ProductId).HasName("PK__dimensio__47027DF5C53DC3E0");

            entity.ToTable("dimensions");

            entity.Property(e => e.ProductId)
                .ValueGeneratedNever()
                .HasColumnName("product_id");
            entity.Property(e => e.Depth)
                .HasColumnType("decimal(5, 2)")
                .HasColumnName("depth");
            entity.Property(e => e.Height)
                .HasColumnType("decimal(5, 2)")
                .HasColumnName("height");
            entity.Property(e => e.Width)
                .HasColumnType("decimal(5, 2)")
                .HasColumnName("width");

            entity.HasOne(d => d.Product).WithOne(p => p.Dimension)
                .HasForeignKey<Dimension>(d => d.ProductId)
                .HasConstraintName("FK__dimension__produ__398D8EEE");
        });

        modelBuilder.Entity<Image>(entity =>
        {
            entity.HasKey(e => new { e.ProductId, e.Url }).HasName("PK__images__3AD505B4796105C6");

            entity.ToTable("images");

            entity.Property(e => e.ProductId).HasColumnName("product_id");
            entity.Property(e => e.Url)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("url");

            entity.HasOne(d => d.Product).WithMany(p => p.Images)
                .HasForeignKey(d => d.ProductId)
                .HasConstraintName("FK__images__product___44FF419A");
        });

        modelBuilder.Entity<Metum>(entity =>
        {
            entity.HasKey(e => e.ProductId).HasName("PK__meta__47027DF5F6E49E23");

            entity.ToTable("meta");

            entity.Property(e => e.ProductId)
                .ValueGeneratedNever()
                .HasColumnName("product_id");
            entity.Property(e => e.Barcode)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("barcode");
            entity.Property(e => e.CreatedAt)
                .HasColumnType("datetime")
                .HasColumnName("createdAt");
            entity.Property(e => e.QrCode)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("qrCode");
            entity.Property(e => e.UpdatedAt)
                .HasColumnType("datetime")
                .HasColumnName("updatedAt");

            entity.HasOne(d => d.Product).WithOne(p => p.Metum)
                .HasForeignKey<Metum>(d => d.ProductId)
                .HasConstraintName("FK__meta__product_id__4222D4EF");
        });

        modelBuilder.Entity<Product>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__products__3213E83FA55F535A");

            entity.ToTable("products");

            entity.Property(e => e.Id)
                .ValueGeneratedNever()
                .HasColumnName("id");
            entity.Property(e => e.AvailabilityStatus)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("availabilityStatus");
            entity.Property(e => e.Brand)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("brand");
            entity.Property(e => e.Category)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("category");
            entity.Property(e => e.Description)
                .HasColumnType("text")
                .HasColumnName("description");
            entity.Property(e => e.DiscountPercentage)
                .HasColumnType("decimal(5, 2)")
                .HasColumnName("discountPercentage");
            entity.Property(e => e.MinimumOrderQuantity).HasColumnName("minimumOrderQuantity");
            entity.Property(e => e.Price)
                .HasColumnType("decimal(10, 2)")
                .HasColumnName("price");
            entity.Property(e => e.Rating)
                .HasColumnType("decimal(3, 2)")
                .HasColumnName("rating");
            entity.Property(e => e.ReturnPolicy)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("returnPolicy");
            entity.Property(e => e.ShippingInformation)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("shippingInformation");
            entity.Property(e => e.Sku)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("sku");
            entity.Property(e => e.Stock).HasColumnName("stock");
            entity.Property(e => e.Thumbnail)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("thumbnail");
            entity.Property(e => e.Title)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("title");
            entity.Property(e => e.WarrantyInformation)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("warrantyInformation");
            entity.Property(e => e.Weight)
                .HasColumnType("decimal(5, 2)")
                .HasColumnName("weight");
        });

        modelBuilder.Entity<Review>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__reviews__3213E83F705D9B31");

            entity.ToTable("reviews");

            entity.Property(e => e.Id)
                .ValueGeneratedNever()
                .HasColumnName("id");
            entity.Property(e => e.Comment)
                .HasColumnType("text")
                .HasColumnName("comment");
            entity.Property(e => e.Date)
                .HasColumnType("datetime")
                .HasColumnName("date");
            entity.Property(e => e.ProductId).HasColumnName("product_id");
            entity.Property(e => e.Rating).HasColumnName("rating");
            entity.Property(e => e.ReviewerEmail)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("reviewerEmail");
            entity.Property(e => e.ReviewerName)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("reviewerName");

            entity.HasOne(d => d.Product).WithMany(p => p.Reviews)
                .HasForeignKey(d => d.ProductId)
                .OnDelete(DeleteBehavior.Cascade)
                .HasConstraintName("FK__reviews__product__3F466844");
        });

        modelBuilder.Entity<Sale>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__sales__3213E83F14C5A7FB");

            entity.ToTable("sales");

            entity.Property(e => e.Id)
                .ValueGeneratedNever()
                .HasColumnName("id");
            entity.Property(e => e.ProductId).HasColumnName("product_id");
            entity.Property(e => e.Quantity).HasColumnName("quantity");
            entity.Property(e => e.SaleDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime")
                .HasColumnName("sale_date");
            entity.Property(e => e.TotalPrice)
                .HasColumnType("decimal(10, 2)")
                .HasColumnName("total_price");

            entity.HasOne(d => d.Product).WithMany(p => p.Sales)
                .HasForeignKey(d => d.ProductId)
                .HasConstraintName("FK__sales__product_i__48CFD27E");
        });

        modelBuilder.Entity<Tag>(entity =>
        {
            entity.HasKey(e => new { e.ProductId, e.Tag1 }).HasName("PK__tags__5AC37C35C0260F50");

            entity.ToTable("tags");

            entity.Property(e => e.ProductId).HasColumnName("product_id");
            entity.Property(e => e.Tag1)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("tag");

            entity.HasOne(d => d.Product).WithMany(p => p.Tags)
                .HasForeignKey(d => d.ProductId)
                .HasConstraintName("FK__tags__product_id__3C69FB99");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}

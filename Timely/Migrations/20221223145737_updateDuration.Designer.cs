﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Timely.Models;

#nullable disable

namespace Timely.Migrations
{
    [DbContext(typeof(CounterContext))]
    [Migration("20221223145737_updateDuration")]
    partial class updateDuration
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.1")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("Timely.Models.Counter", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("projectName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("startTime")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("stopTime")
                        .HasColumnType("datetime2");

                    b.HasKey("Id");

                    b.ToTable("Counters");
                });
#pragma warning restore 612, 618
        }
    }
}

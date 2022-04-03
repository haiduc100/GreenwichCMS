using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace GreenwichCMS.Migrations
{
    public partial class fixIdea : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FinalClosureDate",
                table: "Idea");

            migrationBuilder.DropColumn(
                name: "FirstClosureDate",
                table: "Idea");

            migrationBuilder.AddColumn<string>(
                name: "Department",
                table: "Users",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "FinalClosureDate",
                table: "IdeaCategory",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "FirstClosureDate",
                table: "IdeaCategory",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Department",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "FinalClosureDate",
                table: "IdeaCategory");

            migrationBuilder.DropColumn(
                name: "FirstClosureDate",
                table: "IdeaCategory");

            migrationBuilder.AddColumn<DateTime>(
                name: "FinalClosureDate",
                table: "Idea",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "FirstClosureDate",
                table: "Idea",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }
    }
}

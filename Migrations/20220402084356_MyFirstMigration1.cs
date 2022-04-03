using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace GreenwichCMS.Migrations
{
    public partial class MyFirstMigration1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "FileIdea",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    IdeaId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    FilePath = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FileIdea", x => x.Id);
                    table.ForeignKey(
                        name: "FK_FileIdea_Idea_IdeaId",
                        column: x => x.IdeaId,
                        principalTable: "Idea",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_FileIdea_IdeaId",
                table: "FileIdea",
                column: "IdeaId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "FileIdea");
        }
    }
}

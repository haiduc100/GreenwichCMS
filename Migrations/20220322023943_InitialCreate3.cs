using Microsoft.EntityFrameworkCore.Migrations;

namespace GreenwichCMS.Migrations
{
    public partial class InitialCreate3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Idea_IdeaCategory_IdeaCategoryId",
                table: "Idea");

            migrationBuilder.AddForeignKey(
                name: "FK_Idea_IdeaCategory_IdeaCategoryId",
                table: "Idea",
                column: "IdeaCategoryId",
                principalTable: "IdeaCategory",
                principalColumn: "IdeaCategoryId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Idea_IdeaCategory_IdeaCategoryId",
                table: "Idea");

            migrationBuilder.AddForeignKey(
                name: "FK_Idea_IdeaCategory_IdeaCategoryId",
                table: "Idea",
                column: "IdeaCategoryId",
                principalTable: "IdeaCategory",
                principalColumn: "IdeaCategoryId",
                onDelete: ReferentialAction.Restrict);
        }
    }
}

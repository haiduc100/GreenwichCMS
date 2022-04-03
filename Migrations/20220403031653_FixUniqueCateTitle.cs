using Microsoft.EntityFrameworkCore.Migrations;

namespace GreenwichCMS.Migrations
{
    public partial class FixUniqueCateTitle : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Title",
                table: "IdeaCategory",
                type: "nvarchar(450)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_IdeaCategory_Title",
                table: "IdeaCategory",
                column: "Title",
                unique: true,
                filter: "[Title] IS NOT NULL");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_IdeaCategory_Title",
                table: "IdeaCategory");

            migrationBuilder.AlterColumn<string>(
                name: "Title",
                table: "IdeaCategory",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)",
                oldNullable: true);
        }
    }
}

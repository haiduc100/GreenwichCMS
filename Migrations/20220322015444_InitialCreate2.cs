using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace GreenwichCMS.Migrations
{
    public partial class InitialCreate2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Comment_Users_ReplyFor",
                table: "Comment");

            migrationBuilder.DropForeignKey(
                name: "FK_IdeaCategory_Idea_IdeaId",
                table: "IdeaCategory");

            migrationBuilder.DropIndex(
                name: "IX_IdeaCategory_IdeaId",
                table: "IdeaCategory");

            migrationBuilder.RenameColumn(
                name: "ReplyFor",
                table: "Comment",
                newName: "ReplyBy");

            migrationBuilder.RenameIndex(
                name: "IX_Comment_ReplyFor",
                table: "Comment",
                newName: "IX_Comment_ReplyBy");

            migrationBuilder.AlterColumn<bool>(
                name: "Privacy",
                table: "Idea",
                type: "bit",
                nullable: false,
                defaultValue: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "IdeaCategoryId",
                table: "Idea",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Idea_IdeaCategoryId",
                table: "Idea",
                column: "IdeaCategoryId");

            migrationBuilder.AddForeignKey(
                name: "FK_Comment_Users_ReplyBy",
                table: "Comment",
                column: "ReplyBy",
                principalTable: "Users",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Idea_IdeaCategory_IdeaCategoryId",
                table: "Idea",
                column: "IdeaCategoryId",
                principalTable: "IdeaCategory",
                principalColumn: "IdeaCategoryId",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Comment_Users_ReplyBy",
                table: "Comment");

            migrationBuilder.DropForeignKey(
                name: "FK_Idea_IdeaCategory_IdeaCategoryId",
                table: "Idea");

            migrationBuilder.DropIndex(
                name: "IX_Idea_IdeaCategoryId",
                table: "Idea");

            migrationBuilder.DropColumn(
                name: "IdeaCategoryId",
                table: "Idea");

            migrationBuilder.RenameColumn(
                name: "ReplyBy",
                table: "Comment",
                newName: "ReplyFor");

            migrationBuilder.RenameIndex(
                name: "IX_Comment_ReplyBy",
                table: "Comment",
                newName: "IX_Comment_ReplyFor");

            migrationBuilder.AlterColumn<string>(
                name: "Privacy",
                table: "Idea",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(bool),
                oldType: "bit");

            migrationBuilder.CreateIndex(
                name: "IX_IdeaCategory_IdeaId",
                table: "IdeaCategory",
                column: "IdeaId");

            migrationBuilder.AddForeignKey(
                name: "FK_Comment_Users_ReplyFor",
                table: "Comment",
                column: "ReplyFor",
                principalTable: "Users",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_IdeaCategory_Idea_IdeaId",
                table: "IdeaCategory",
                column: "IdeaId",
                principalTable: "Idea",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}

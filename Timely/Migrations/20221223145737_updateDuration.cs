using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Timely.Migrations
{
    /// <inheritdoc />
    public partial class updateDuration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "duration",
                table: "Counters");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "duration",
                table: "Counters",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}

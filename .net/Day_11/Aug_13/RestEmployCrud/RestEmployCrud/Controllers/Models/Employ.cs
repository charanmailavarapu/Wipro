using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RestEmployCrud.Controllers.Models
{
    public class Employ
    {
        [Key]
        [Column("Empno")]
        public int Empno { get; set; }
        [Column("name")]
        public string? Name { get; set; }
        [Column("gender")]
        public string? Gender { get; set; }
        [Column("dept")]
        public string? Dept { get; set; }
        [Column("desig")]
        public string? Desig { get; set; }
        [Column("basic")]
        public decimal Basic { get; set; }
    }
}

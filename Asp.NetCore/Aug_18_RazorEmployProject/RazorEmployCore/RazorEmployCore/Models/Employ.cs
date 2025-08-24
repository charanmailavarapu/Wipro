using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RazorEmployCore.Models
{
    public class Employ
    {
        [Key]
        [Column("Empno")]
            
        public int Empno { get; set; }

        [Column("name")]
        [Required(ErrorMessage = "Name is required")]
        [StringLength(12, ErrorMessage = "Name cannot exceed 12 characters")]
        public string? Name { get; set; }

        [Column("gender")]
        [Required(ErrorMessage = "Gender is required")]
        [RegularExpression("^(MALE|FEMALE)$", ErrorMessage = "Gender must be Male, Female, or Other")]

        public string? Gender { get; set; }

        [Column("dept")]
        [Required(ErrorMessage = "Department is required")]
        [StringLength(10, ErrorMessage = "Department cannot exceed 10 characters")]

        public string? Dept { get; set; }

        [Column("desig")]

        public string? Desig { get; set; }

        [Column("basic")]
        [Required(ErrorMessage = "Basic Salary is required")]
        [Range(5000,200000, ErrorMessage = "Basic Salary must be between 5000 and 200000")]
        public decimal Basic { get; set; }

    }
}

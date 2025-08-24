using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace RazorBankProject.Models
{
    public class Account
    {
        [Key]
        [Column("AccountNo")]

        public int AccountNo { get; set; }

        [Column("FirstName")]
        [Required(ErrorMessage = "Required")]
        [StringLength(12, ErrorMessage ="Name is required.")]
        public string? FirstName { get; set; }

        [Column("LastName")]
        [Required(ErrorMessage = "Required")]
        [StringLength(12, ErrorMessage = "Name is required.")]
        public string? LastName { get; set; }

        [Column("City")]
        [Required(ErrorMessage = "Required")]
        [StringLength(10)]
        public string? City { get; set; }

        [Column("State")]
        [Required(ErrorMessage = "Required")]
        [StringLength(10)]
        public string? State { get; set; }

        [Column("Amount")]
        [Required(ErrorMessage = "Required")]
        [Range(5000,200000)]
        public decimal Amount { get; set; }

        [Column("AccountType")]
        [Required(ErrorMessage = "Required")]
        [StringLength(10)]
        public string? AccountType { get; set; }

        [Column("CheqFacil")]
        [Required(ErrorMessage = "Required")]
        [StringLength(10)]
        public string? CheqFacil { get; set; }
    }
}

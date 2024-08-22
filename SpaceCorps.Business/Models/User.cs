using System.ComponentModel.DataAnnotations;

namespace SpaceCorps.Business.Models;

public class User
{
    [Key]
    public int Id { get; set; }

    public Guid Guid { get; set; } = new Guid();
    [Required]
    public string Username { get; set; } = null!;
}
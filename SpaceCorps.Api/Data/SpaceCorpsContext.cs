using Microsoft.EntityFrameworkCore;
using SpaceCorps.Business.Models;

namespace SpaceCorps.Api.Data;

public class SpaceCorpsContext(DbContextOptions<SpaceCorpsContext> options): DbContext(options)
{
    public DbSet<User> Users { get; set; } = null!;
    
}
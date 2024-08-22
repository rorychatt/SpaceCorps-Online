using Microsoft.EntityFrameworkCore;

namespace SpaceCorps.Api.Data;

public class SpaceCorpsContext(DbContextOptions<SpaceCorpsContext> options): DbContext(options)
{

}
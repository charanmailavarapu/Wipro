using RestEmployBackUp.Models;

namespace RestEmployBackUp.Services
{
    public interface IEmployService
    {
        Task<IEnumerable<Employ>> ShowEmployAsync();
        Task<Employ?> SearchByEmpnoAsync(int id);
        Task<string> AddEmployAsync(Employ employ);
    }
}

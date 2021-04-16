using System.Threading.Tasks;

namespace es.efor.PryBase.Imports.Model.Services.ImportServices
{
    public interface IImportService
    {
        /// <summary>
        /// Import Employees
        /// </summary>
        /// <returns></returns>
        Task<bool> ImportEmployees(string path);
    }
}

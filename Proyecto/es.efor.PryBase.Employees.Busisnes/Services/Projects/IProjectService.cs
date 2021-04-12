using es.efor.PryBase.Infraestructure.Database;
using es.efor.Utilities.General;
using es.efor.Utilities.Linq.Models.Filters;
using es.efor.Utilities.Linq.Models.Sorts;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace es.efor.PryBase.Employees.Business.Services.Projects
{
    public interface IProjectService
    {
        Task<Project> AddEditAsync(Project data, bool commit = true);
        Task<Project> DeleteAsync(int numero, bool commit = true);
        Task<Project> GetByIdAsync(int numero);
        CollectionList<Project> GetCollectionList(IEnumerable<FilterCriteria> filters = null, int pageIndex = 0, int pageSize = 0, IEnumerable<SortCriteria> orderBy = null);
        IEnumerable<Project> GetList(IEnumerable<FilterCriteria> filters = null, int pageIndex = 0, int pageSize = 0, IEnumerable<SortCriteria> orderBy = null);
        Task<Project> Insert(Project data, bool commit = true);
        Task<Project> Update(Project data, bool commit = true);
    }
}
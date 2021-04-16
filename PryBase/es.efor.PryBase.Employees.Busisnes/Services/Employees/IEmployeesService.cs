using es.efor.PryBase.Infraestructure.Database;
using es.efor.Utilities.General;
using es.efor.Utilities.Linq.Models.Filters;
using es.efor.Utilities.Linq.Models.Sorts;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace es.efor.PryBase.Employees.Business.Services.Employees
{
    public interface IEmployeesService
    {
        Task<Employee> DeleteAsync(int id, bool commit = true);
        Task<Employee> GetByIdAsync(int id);
        CollectionList<Employee> GetCollectionList(IEnumerable<FilterCriteria> filters = null, int pageIndex = 0, int pageSize = 0, IEnumerable<SortCriteria> orderBy = null);
        CollectionList<Employee> GetCollectionListB();
        IEnumerable<Employee> GetCollectionListCompleta();
        IEnumerable<Employee> GetList(IEnumerable<FilterCriteria> filters = null, int pageIndex = 0, int pageSize = 0, IEnumerable<SortCriteria> orderBy = null);
        Task<Employee> InsertAsync(Employee data, bool commit = true);
        Task<Employee> UpdateAsync(Employee data, bool commit = true);
        IEnumerable<Employee> GetComboList(string filtro);

    }
}
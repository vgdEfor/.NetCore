using es.efor.PryBase.Data.ServiceContext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using es.efor.Utilities.General;
using es.efor.PryBase.Data.Context;
using es.efor.Utilities.Linq.Models.Filters;
using es.efor.Utilities.Linq.Models.Sorts;
using es.efor.PryBase.Infraestructure.Database;


namespace es.efor.PryBase.Employees.Business.Services.Employees
{
    public class EmployeesService : BaseDBservice, IEmployeesService
    {
        #region Constructor
        public EmployeesService(PryBaseContext pbc) : base(pbc)
        {

        }
        #endregion

        #region GET
        /// <summary>
        /// Busca un empleado en la BD
        /// </summary>
        /// <param name="id">ID del empleado a buscar</param>
        /// <returns>Devuelve los datos del empleado buscado</returns>
        public virtual async Task<Employee> GetByIdAsync(int id)
        {
            return db.Employees.Find(id);
        }


        private IQueryable<Employee> GetQueryable(IEnumerable<FilterCriteria> filters = null)
        {
            return db.Employees.EforWhere(filters);

        }

        /// <summary>
        /// Consulta la lista de empleados de la BD. Aplica los filtros de la datatable
        /// </summary>
        /// <returns>Devuelve una lista con todos los empleados</returns>
        public IEnumerable<Employee> GetList(
        IEnumerable<FilterCriteria> filters = null, int pageIndex = 0, int pageSize = 0, IEnumerable<SortCriteria> orderBy = null)
        {
            return GetQueryable(filters).EforOrderBy(orderBy).EforPaginate(pageIndex, pageSize).ToList();
        }


        //get collection list completa, es diferente para que desde project pueda coger la lista
        public IEnumerable<Employee> GetCollectionListCompleta()
        {

            return db.Employees.ToList();
        }

        public CollectionList<Employee> GetCollectionListB()
        {
            CollectionList<Employee> result = new CollectionList<Employee>();
            IEnumerable<Employee> listaEmpleados = GetCollectionListCompleta();
            result.Items = listaEmpleados;

            return result;
        }

        /// <summary>
        /// Consulta la lista de empleados de la BD
        /// </summary>
        /// <returns>Devuelve una lista con todos los empleados</returns>
        public CollectionList<Employee> GetCollectionList(IEnumerable<FilterCriteria> filters = null, int pageIndex = 0, int pageSize = 0, IEnumerable<SortCriteria> orderBy = null)
        {

            var result = new CollectionList<Employee>()
            {
                Total = GetQueryable(filters).Count()
            };

            if (result.Total == 0) return result;

            result.Items = GetList(filters, pageIndex, pageSize, orderBy);
            return result;
        }

        /// <summary>
        /// Lista de empleados filtrados por nombre Contains
        /// </summary>
        /// <param name="filtro"> filtro para contains en name</param>
        /// <returns>Lista de empleados filtrados </returns>
        public IEnumerable<Employee> GetComboList(string filtro)
        {
            return db.Employees.Where(x => x.Name.ToLower()
                .Contains(filtro == null ? string.Empty : filtro.ToLower())).ToList();
        }

        #endregion

        #region INSERT UPDATE DELETE
        /// <summary>
        /// Crea un nuevo empleado en la BD
        /// </summary>
        /// <param name="data">Datos del nuevo empleado</param>
        /// <param name="commit">Establece si se hara un commit en la BD</param>
        /// <returns>Devuelve los datos del nuevo empleado</returns>
        public virtual async Task<Employee> InsertAsync(Employee data, bool commit = true)
        {
            // Añadimos el empleado a la BD
            Employee newEmployee = db.Add(data).Entity;

            // Guardamos los cambios
            if (commit)
            {
                await db.SaveChangesAsync();
            }

            return newEmployee;
        }

        /// <summary>
        /// Busca al antiguo empleado en la BD y actualiza sus datos
        /// </summary>
        /// <param name="data">Datos del nuevo empleado</param>
        /// <param name="commit">Establece si se hara un commit en la BD</param>
        /// <returns>Devuelve los datos del nuevo empleado</returns>
        public virtual async Task<Employee> UpdateAsync(Employee data, bool commit = true)
        {
            // Buscamos el antiguo empleado
            var oldEmployee = await GetByIdAsync(data.Id);

            // Actualizamos sus datos
            oldEmployee.Name = data.Name;
            oldEmployee.Surname = data.Surname;
            oldEmployee.Dbirth = data.Dbirth;
            oldEmployee.Dstart = data.Dstart;
            oldEmployee.Position = data.Position;

            // Guardamos los cambios
            if (commit)
            {
                await db.SaveChangesAsync();
            }

            return oldEmployee;
        }
        /// <summary>
        /// Borra un empleado de la BD
        /// </summary>
        /// <param name="id">ID del empleado a borrar</param>
        /// <param name="commit">Establece si se hara un commit en la BD</param>
        /// <returns>Devuelve los datos del antiguo empleado</returns>
        public virtual async Task<Employee> DeleteAsync(int id, bool commit = true)
        {
            // Buscamos el empleado 
            var oldEmployee = await GetByIdAsync(id);

            // Borramos el empleado de la BD
            db.Remove(oldEmployee);

            // Guardamos los cambios
            if (commit)
            {
                await db.SaveChangesAsync();
            }

            return oldEmployee;
        }
        #endregion
    }

}

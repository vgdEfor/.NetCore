
using es.efor.PryBase.Data.Context;
using es.efor.PryBase.Infraestructure.Database;
using es.efor.PryBase.Data.ServiceContext;
//using es.efor.PryBase.Employees.Businesss.Services.Projects;
using es.efor.Utilities.General;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using es.efor.Utilities.Linq.Models.Filters;
using es.efor.Utilities.Linq.Models.Sorts;

namespace es.efor.PryBase.Employees.Business.Services.Projects
{
    public class ProjectService : BaseDBservice, IProjectService
    {
        public ProjectService(PryBaseContext pbc) : base(pbc)
        {

        }

        #region ADD, EDIT, DELETE
        public async Task<Project> Insert(Project data, bool commit = true)
        {
            //db.Projects.Add(data);
            var newEntity = db.Add(data).Entity;
            try
            {
                
                if (commit)
                {
                    await SaveChangesAsync().ConfigureAwait(false);
                }
            }catch(Exception e)
            {

            }
            return newEntity;
        }

        public virtual async Task<Project> AddEditAsync(Project data, bool commit = true)
        {
            var oldEntity = await GetByIdAsync(data.Id).ConfigureAwait(false);
            if (oldEntity == null) return await Insert(data, commit).ConfigureAwait(false);

            return await Update(data, commit).ConfigureAwait(false);
        }

        public async Task<Project> DeleteAsync(int numero, bool commit = true)
        {

            var latest = await GetByIdAsync(numero).ConfigureAwait(false);

            db.Remove(latest);
            try
            {
                if (commit)
                {
                    await db.SaveChangesAsync().ConfigureAwait(false);
                }

            }
            catch (Exception e)
            {

            }
            return latest;
        }

        public async Task<Project> Update(Project data, bool commit = true)
        {
            var old = await GetByIdAsync(data.Id);

            //falta ver qué hay que se puede modificar y qué no
            old.Name = data.Name;
            old.PriorityType = data.PriorityType;

            
            //old.Responsable = data.Responsable;
            old.ResponsableId = data.ResponsableId;
            old.Dend = data.Dend;
            old.Dstart = data.Dstart;

            if (commit)
            {
                await SaveChangesAsync();
            }

            return old;
        }

        #endregion

        #region LIST
        //public IEnumerable<Project> GetList()
        //{

        //    List<Project> listado = db.Projects.ToList();

        //    return listado;
        //}

        //public CollectionList<Project> GetCollectionList()
        //{
        //    CollectionList<Project> listado = new CollectionList<Project>();
        //    IEnumerable<Project> listaEmpleados = GetList();
        //    listado.Items = listaEmpleados;

        //    return listado;

        //}

        private IQueryable<Project> GetQueryable(IEnumerable<FilterCriteria> filters = null)
        {
            return db.Projects.EforWhere(filters);

        }

        /// <summary>
        /// Consulta la lista de empleados de la BD
        /// </summary>
        /// <returns>Devuelve una lista con todos los empleados</returns>
        public IEnumerable<Project> GetList(
        IEnumerable<FilterCriteria> filters = null, int pageIndex = 0, int pageSize = 0, IEnumerable<SortCriteria> orderBy = null)
        {
            return GetQueryable(filters).EforOrderBy(orderBy).EforPaginate(pageIndex, pageSize).ToList();
        }
        /// <summary>
        /// Consulta la lista de empleados de la BD
        /// </summary>
        /// <returns>Devuelve una lista con todos los empleados</returns>
        public CollectionList<Project> GetCollectionList(IEnumerable<FilterCriteria> filters = null, int pageIndex = 0, int pageSize = 0, IEnumerable<SortCriteria> orderBy = null)
        {

            var result = new CollectionList<Project>()
            {
                Total = GetQueryable(filters).Count()
            };

            if (result.Total == 0) return result;

            result.Items = GetList(filters, pageIndex, pageSize, orderBy);

            return result;
        }

        #endregion

        #region GET
        public async Task<Project> GetByIdAsync(int numero)
        {
            return await db.Projects.FindAsync(numero).ConfigureAwait(false);
        }

        #endregion

    }
}

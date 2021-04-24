using AutoMapper;
using es.efor.OnBoarding.Business.DTO.EnterpriseDTOs;
using es.efor.OnBoarding.Business.DTO.UsersDTOs;
using es.efor.OnBoarding.Data.Entities;
using es.efor.OnBoarding.Data.OnboardingEjercicioContext;
using es.efor.Utilities.General;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace es.efor.OnBoarding.Business.Services.EnterpriseServices
{
    public class EnterpriseService : IEnterpriseService
    {
        #region Contructor y propiedades privadas
        private readonly OnboardingEjercicio2Context _dbContext;
        private readonly IMapper _mapper;

        public EnterpriseService(OnboardingEjercicio2Context dbContext, IMapper mapper)
        {
            this._dbContext = dbContext;
            this._mapper = mapper;
        }

        #endregion

        public async Task<EnterpriseDTO> Get(int Id)
        {
            Empresas Enterpise = await this._dbContext.Empresas.AsNoTracking().FirstOrDefaultAsync(x => x.Id == Id);
            return this._mapper.Map<EnterpriseDTO>(Enterpise);
        }

        public async Task<EnterpriseDTO> Get(string Enterpise)
        {
            Empresas EnterpiseDb = await this._dbContext.Empresas.AsNoTracking().FirstOrDefaultAsync(x => x.Nombre.Equals(Enterpise));
            return this._mapper.Map<EnterpriseDTO>(EnterpiseDb);
        }

        public async Task<CollectionList<EnterpriseGridDTO>> Datatable(EnterpriseFilterDTO enterpriseFilterDTO,
           int pageIndex, int pageSize, string sortName, bool sortDescending)
        {
            
            IQueryable<Empresas> query = _dbContext.Empresas.Include(u => u.Responsable);

            if (enterpriseFilterDTO.Id > 0)
                query = query.Where(u => u.Id == enterpriseFilterDTO.Id);
            if (!string.IsNullOrWhiteSpace(enterpriseFilterDTO.Name))
                query = query.Where(u => u.Nombre.Contains(enterpriseFilterDTO.Name));
            if (!string.IsNullOrWhiteSpace(enterpriseFilterDTO.Cif))
                query = query.Where(u => u.Cif.Contains(enterpriseFilterDTO.Cif));
            if (!string.IsNullOrWhiteSpace(enterpriseFilterDTO.RaxonSocial))
                query = query.Where(u => u.RazonSocial.Contains(enterpriseFilterDTO.RaxonSocial));
            if (enterpriseFilterDTO.Active.HasValue)
                query = query.Where(u => u.Activo == enterpriseFilterDTO.Active);
            if (enterpriseFilterDTO.ResponsableId > 0)
                query = query.Where(u => u.ResponsableId == enterpriseFilterDTO.ResponsableId);

            if (sortName != null)
            {
                switch (sortName)
                {
                    case nameof(EnterpriseGridDTO.Name):
                        query = sortDescending ? query.OrderByDescending(u => u.Nombre) : query.OrderBy(u => u.Nombre);
                        break;
                    case nameof(EnterpriseGridDTO.Cif):
                        query = sortDescending ? query.OrderByDescending(u => u.Cif) : query.OrderBy(u => u.Cif);
                        break;
                    case nameof(EnterpriseGridDTO.RaxonSocial):
                        query = sortDescending ? query.OrderByDescending(u => u.RazonSocial) : query.OrderBy(u => u.RazonSocial);
                        break;
                    case nameof(EnterpriseGridDTO.Active):
                        query = sortDescending ? query.OrderByDescending(u => u.Activo) : query.OrderBy(u => u.Activo);
                        break;
                    case nameof(EnterpriseGridDTO.ResponsableId):
                        query = sortDescending ? query.OrderByDescending(u => u.ResponsableId) : query.OrderBy(u => u.ResponsableId);
                        break;

                }
            }

            List<Empresas> enterpriseList = await query.EforPaginate(pageIndex, pageSize).AsNoTracking().ToListAsync();

            CollectionList<EnterpriseGridDTO> result = new CollectionList<EnterpriseGridDTO>();
            result.Items = _mapper.Map<List<EnterpriseGridDTO>>(enterpriseList);
            result.Total = await query.CountAsync();

            return result;
        }

        /// <summary>
        /// </summary>
        /// <returns></returns>
        public async Task<List<EnterpriseDTO>> EnterpriseList()
        {
            List<Empresas> listEnterpriseDB = await this._dbContext.Empresas.AsNoTracking().ToListAsync();
            //List<EnterpriseDTO> listEnterpriseDTO = null;
            /* foreach (Empresas empresa in listEnterpriseDB)
             {
                 listEnterpriseDTO.Add(this._mapper.Map<EnterpriseDTO>(empresa));
             } */

            return _mapper.Map<List<EnterpriseDTO>>(listEnterpriseDB);
        }

        public async Task<List<EnterpriseDTO>> List(string name)
        {
            name ??= "";
            List<Empresas> listEnterpriseDB = await _dbContext.Empresas
                .Where(x => x.Nombre.Contains(name))
                .AsNoTracking().ToListAsync();
            return _mapper.Map<List<EnterpriseDTO>>(listEnterpriseDB);
        }

        public async Task<bool> Delete(int id)
        {
            Empresas EnterpiseDb = await _dbContext.Empresas.FirstOrDefaultAsync(u => u.Id == id);

            if (EnterpiseDb != null)
            {
                _dbContext.Empresas.Remove(EnterpiseDb);
                await _dbContext.SaveChangesAsync();
                return true;
            }

            return false;
        }

        public async Task<bool> Set(EnterpriseDTO Enterprise)
        {
            Empresas EnterpriseDb;
            if (Enterprise.Responsable.EnterpriseId == Enterprise.Id)
            {
                if (Enterprise.Id > 0)
                {
                    EnterpriseDb = await _dbContext.Empresas.FirstOrDefaultAsync(u => u.Id == Enterprise.Id);
                    if (EnterpriseDb != null)
                    {
                        _mapper.Map<EnterpriseDTO, Empresas>(Enterprise, EnterpriseDb);
                        await _dbContext.SaveChangesAsync();
                        return true;
                    }
                }
                else
                {
                    EnterpriseDb = _mapper.Map<Empresas>(Enterprise);
                    await _dbContext.Empresas.AddAsync(EnterpriseDb);
                    await _dbContext.SaveChangesAsync();
                    return true;
                }
            }

            return false;
        }

        #region Funciones privadas
        private string GetMd5Hash(string input)
        {
            string hash = "";
            using (MD5 md5Hash = MD5.Create())
            {
                // Convert the input string to a byte array and compute the hash.
                byte[] data = md5Hash.ComputeHash(Encoding.UTF8.GetBytes(input));
                StringBuilder sBuilder = new StringBuilder();
                for (int i = 0; i < data.Length; i++)
                {
                    sBuilder.Append(data[i].ToString("x2"));
                }
                hash = sBuilder.ToString();
            }
            return hash;
        }
        #endregion
    }
}

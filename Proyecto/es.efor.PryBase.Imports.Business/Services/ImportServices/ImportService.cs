using AutoMapper;
using es.efor.PryBase.Data.Context;
using es.efor.PryBase.Data.Database;
using es.efor.PryBase.Infraestructure.DTO.LogImportsDTOs;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace es.efor.PryBase.Imports.Model.Services.ImportServices
{
    public class ImportService : IImportService
    {
        #region Propiedades privadas
        private PryBaseContext _NexusContext;
        private readonly IMapper _Mapper;
        private readonly ILogger _Logger;
        #endregion

        #region Constructor
        public ImportService(PryBaseContext NexusContext, IMapper mapper, ILogger<ImportService> logger)
        {
            this._NexusContext = NexusContext;
            this._Mapper = mapper;

            this._Logger = logger;
        }

        public Task<bool> ImportEmployees(string path)
        {
            return null;
        }
        #endregion

        #region Miembros de IImportService
        /// <summary>
        /// Import employees
        /// Save in DB.
        /// Save log in DB.
        /// </summary>
        /// <param name="path">User to save</param>
        /// <returns>Status of the task</returns>
        /*public async Task<bool> ImportEmployees(string path)
        {
            bool Result = false;
            string observations = String.Empty;
            string lineErrors = String.Empty;
            List<FileInfo> errorFiles = new List<FileInfo>();

            int totalLines = 0;
            int okLines = 0;
            int errorLines = 0;

            try
            {
                //Read Files
                DirectoryInfo dir = new DirectoryInfo(path);
                if (!dir.Exists)
                {
                    observations += "No existe la ruta especificada '" + dir.FullName + "'\n";
                    Result = false;
                }
                else
                {
                    if (dir.GetFiles().Length == 0)
                    {
                        observations += "No existen documentos en la ruta especificada '" + dir.FullName + "'\n";
                        Result = false;
                    }
                    else
                    {
                        try
                        {
                            //Para controlar que se eliminen registros importados anteriormente pero que ahora no se han importado,
                            //indicaremos todos los actuales correctos como eliminados y una vez que recorra el csv si existen en la base de datos
                            //se desmarcarán de eliminados.
                            List<Employees> employeesDB = _NexusContext.Employees.Where(x => x.Delete == null || x.Delete == false).ToList();
                            foreach(Employees employee in employeesDB)
                            {
                                employee.Delete = true;
                                _NexusContext.Update(employee);
                            }

                            _NexusContext.SaveChanges();
                        }
                        catch (Exception ex)
                        {
                            observations += "Error en base de datos al actualizar los campos para el control de registros eliminados. '" + ex.Message + " '\n";
                            Result = false;
                        }

                        int totalFiles = dir.GetFiles().Length;
                        int numFiles = 0;

                        foreach (FileInfo file in dir.GetFiles())
                        {
                            if (file.Extension != ".csv")
                                continue;

                            bool errorFile = false;
                            numFiles++;

                            totalLines = 0;
                            okLines = 0;
                            errorLines = 0;

                            using (var reader = new StreamReader(file.FullName))
                            {
                                while (!reader.EndOfStream)
                                {
                                    totalLines++;

                                    var line = reader.ReadLine();
                                    if (!line.Contains("|"))
                                    {
                                        observations += "Fichero con formato inválido. Por favor, revise que los datos están separados con el simbolo '|'.\n";
                                        throw new Exception();
                                    }
                                    var values = line.Split('|');

                                    EmployeeDTO newEmployee = new EmployeeDTO();
                                    newEmployee.Name = values[0];
                                    newEmployee.Surname = values[1];
                                    newEmployee.NIF = values[2];
                                    if (!String.IsNullOrEmpty(values[3]))
                                        newEmployee.BirthDate = DateTime.Parse(values[3]);
                                    newEmployee.Department = values[4];
                                    newEmployee.Telephone = values[5];
                                    newEmployee.Address = values[6];
                                    newEmployee.Headquarters = values[7];

                                    try
                                    {
                                        //VALIDACIONES
                                        if (String.IsNullOrEmpty(newEmployee.NIF) || newEmployee.NIF.Trim().Length > 10)
                                            throw new Exception();
                                        if (String.IsNullOrEmpty(newEmployee.Department))
                                            throw new Exception();
                                        if (newEmployee.Telephone.Trim().Length > 10)
                                            throw new Exception();
                                    }
                                    catch (Exception)
                                    {
                                        //Guardo fichero en una lista de ficheros erroneos
                                        if (!errorFiles.Contains(file))
                                            errorFiles.Add(file);

                                        lineErrors += " - Linea Erronea: " + line + "\n";

                                        errorFile = true;
                                        errorLines++;
                                        okLines--;

                                        continue;
                                    }

                                    //Compruebo si existe en base de datos
                                    Employees employeeDB = _NexusContext.Employees.SingleOrDefault(x => x.Nif == newEmployee.NIF && x.Department == newEmployee.Department);
                                    if (employeeDB == null)
                                    {
                                        newEmployee.Delete = false;
                                        Employees _employeeDb = _Mapper.Map<EmployeeDTO, Employees>(newEmployee);
                                        _NexusContext.Add<Employees>(_employeeDb);
                                    }
                                    else
                                    {
                                        employeeDB.Name = newEmployee.Name;
                                        employeeDB.Surname = newEmployee.Surname;
                                        employeeDB.BirthDate = newEmployee.BirthDate;
                                        employeeDB.Telephone = newEmployee.Telephone;
                                        employeeDB.Address = newEmployee.Address;
                                        employeeDB.Headquarters = newEmployee.Headquarters;
                                        employeeDB.Delete = false;
                                        _NexusContext.Update<Employees>(employeeDB);
                                    }

                                    okLines++;
                                }
                            }

                            if ((numFiles == totalFiles) && (errorFiles.Count > 0))
                                throw new Exception();

                            if (!errorFile)
                            {
                                //Guardo en base de datos si ha ido bien
                                Result = await _NexusContext.SaveChangesAsync() > 0;

                                observations += "Fichero '" + file.FullName + "' procesado sin errores.\n";
                                observations += " - Lineas procesadas: " + okLines.ToString() + "\n";

                                //Move file to Processed Folder
                                string dirPath = path + "\\PROCESSED";
                                DirectoryInfo dirProcessed = new DirectoryInfo(dirPath);
                                if (!dirProcessed.Exists)
                                    dirProcessed.Create();

                                string newFileName = Path.GetFileNameWithoutExtension(file.Name) + "_" + DateTime.Now.ToString().Replace(":", "").Replace(" ", "").Replace("/", "").Trim() + file.Extension;
                                string newFileFullPath = Path.Combine(dirPath, newFileName);
                                var localFile = new FileInfo(newFileFullPath);
                                if (!localFile.Exists)
                                    file.MoveTo(newFileFullPath);
                            }
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                //Move file to Error Folder
                string dirPath = path + "\\PROCESSED_WITH_ERROR";
                DirectoryInfo dirError = new DirectoryInfo(dirPath);
                if (!dirError.Exists)
                    dirError.Create();

                foreach (FileInfo file in errorFiles)
                {
                    string newFileName = Path.GetFileNameWithoutExtension(file.Name) + "_" + DateTime.Now.ToString().Replace(":", "").Replace(" ", "").Replace("/", "").Trim() + file.Extension;
                    string newfileFullPath = Path.Combine(dirPath, newFileName);
                    var localFile = new FileInfo(newfileFullPath);
                    if (!localFile.Exists)
                        file.MoveTo(newfileFullPath);

                    observations += "Fichero '" + file.FullName + "' procesado con errores.\n";
                    observations += lineErrors + "\n";
                }

                observations += ex.Message;

                this._Logger.LogError("ImportService.ImportFiles.SaveFiles - Error: " + ex.Message);
                Result = false;
            }


            //INSERT log
            try
            {
                LogImportDTO log = new LogImportDTO()
                {
                    Id = 0,
                    Module = new Infraestructure.DTO.PermissionsDTOs.ModuleDTO() { Id = 3, Name = "RRHH" },
                    Date = DateTime.Now,
                    Status = Result == true ? "OK" : "ERROR",
                    Observations = observations
                };
                LogImports _logImportDb = _Mapper.Map<LogImportDTO, LogImports>(log);
                _NexusContext.Add<LogImports>(_logImportDb);
                _NexusContext.SaveChanges();
            }
            catch (Exception ex)
            {
                _Logger.LogError("ImportService.ImportFiles.SaveLog - Error: " + ex.Message);
                Result = false;
            }

            return Result;
        }*/
        #endregion
    }
}

        
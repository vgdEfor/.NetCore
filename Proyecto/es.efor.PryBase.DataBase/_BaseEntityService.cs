using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

using es.efor.PryBase.Data.Context;

namespace es.efor.PryBase.DataBase
{
    public class _BaseEntityService
    {
        protected PryBaseContext db;



        public _BaseEntityService()
        {
            db = new PryBaseContext();
  
        }

        public void SaveChanges()
        {
           
        }
        //public async Task SaveChangesAsync()
        //{
        //    await db.SaveChangesAsync().ConfigureAwait(false);
        //}
    }
}

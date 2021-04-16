using es.efor.PryBase.Data.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace es.efor.PryBase.Data.ServiceContext
{
    public class BaseDBservice
    {


        protected readonly PryBaseContext db;

        public BaseDBservice(PryBaseContext pbc)
        {
            db = pbc;
        }

        public void SaveChanges()
        {
            db.SaveChanges();
        }

        public async Task SaveChangesAsync()
        {
            await db.SaveChangesAsync().ConfigureAwait(false);
        }

    }
}

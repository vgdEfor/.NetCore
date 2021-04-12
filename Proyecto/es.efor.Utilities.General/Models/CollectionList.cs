using System;
using System.Collections.Generic;
using System.Linq;

namespace es.efor.Utilities.General
{
    public class CollectionList<T>
    {
        private int? _Total;

        public int Total
        {
            get { return _Total.HasValue ? _Total.Value : Items.Count(); }
            set { _Total = value; }
        }

        public IEnumerable<T> Items { get; set; }

        public CollectionList()
        {
            Items = new List<T>();
        }
        public CollectionList(IEnumerable<T> itemsCollection, int? totalItems = null)
        {
            Items = itemsCollection;
            _Total = totalItems;
        }


        public CollectionList<TDestination> ConvertTo<TDestination>(Func<T, TDestination> converter)
        {
            var converted = new CollectionList<TDestination>()
            {
                Items = Items.Select(i => converter(i)).ToList(),
                Total = Total,
            };
            return converted;
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TestLogin.Models
{
    public class SubProduct2
    {
        public int Id { get; set; }

        
        public string Name { get; set; }

        
        public string Price { get; set; }

        public int? CategoryId { get; set; }

        public int? StoreId { get; set; }
    }
}
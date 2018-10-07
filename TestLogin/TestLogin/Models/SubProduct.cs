using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TestLogin.Models
{
    public class SubProduct
    {
        public int Id { get; set; }

        
        public string Name { get; set; }

        
        public string Price { get; set; }

        public string CategoryId { get; set; }

        public string StoreId { get; set; }
    }
}
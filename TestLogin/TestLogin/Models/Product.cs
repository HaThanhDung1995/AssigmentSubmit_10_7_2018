namespace TestLogin.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Product
    {
        public int Id { get; set; }

        [StringLength(50)]
        public string Name { get; set; }

        [StringLength(50)]
        public string Price { get; set; }

        public int? CategoryId { get; set; }

        public int? StoreId { get; set; }

        public virtual Category Category { get; set; }

        public virtual Store Store { get; set; }
    }
}

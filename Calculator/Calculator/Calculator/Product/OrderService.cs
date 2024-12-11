using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Calculator
{
    internal class OrderService
    {
        private readonly IProductRepository _productRepository;
        public OrderService(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        public Product GetProductById(int id)
        {
            return _productRepository.GetProductById(id);
        }
    }
}

import { useState } from 'react'; 
import { Table } from 'react-bootstrap';
import { MOCK_ORDERS } from '../../mock/orders-data';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './style.css';

export function MyOrdersList() {
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; 

  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = MOCK_ORDERS.slice(indexOfFirstItem, indexOfLastItem);

  
  const totalPages = Math.ceil(MOCK_ORDERS.length / itemsPerPage);

  
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="my-orders-card">
      <h4 className="section-title mb-5">My Order</h4>

      <div className="table-responsive">
        <Table borderless className="orders-table align-middle text-center">
          <thead>
            <tr>
              <th style={{ width: '15%' }}>Order id</th>
              <th style={{ width: '25%' }}>Products</th>
              <th style={{ width: '15%' }}>Date</th>
              <th style={{ width: '10%' }}>Amount</th>
              <th style={{ width: '15%' }}>Details</th>
              <th style={{ width: '15%' }}>Review</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((order, index) => (
              <tr key={index}>
                <td className="text-muted number-text">{order.id}</td>
                
                <td>
                  <div className="products-preview d-flex align-items-center justify-content-center gap-3">
                    <span className="arrow-icon"><FaChevronLeft size={12}/></span>
                    <div className="d-flex">
                        {order.products.slice(0, 1).map((img, i) => (
                            <img key={i} src={img} alt="product" className="order-product-img" />
                        ))}
                    </div>
                     <span className="arrow-icon"><FaChevronRight size={12}/></span>
                  </div>
                </td>
                
                <td className="text-muted number-text">{order.date}</td>
                <td className="amount-text">{order.amount}</td>
                
                <td>
                  <a href="#" className="action-link view-details">View details</a>
                </td>
                
                <td>
                  <a href="#" className="action-link review-order">Review order</a>
                </td>
              </tr>
            ))}
            {currentItems.length === 0 && (
                <tr><td colSpan="6" className="text-center py-4">No orders found.</td></tr>
            )}
          </tbody>
        </Table>
      </div>
      {totalPages > 1 && (
        <div className="d-flex justify-content-center mt-5">
            <div className="custom-pagination">
            <button 
                className="page-btn" 
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
            >
                &lt;
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                <button
                key={number}
                className={`page-btn ${currentPage === number ? 'active' : ''}`}
                onClick={() => handlePageChange(number)}
                >
                {number}
                </button>
            ))}

            <button 
                className="page-btn" 
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
            >
                &gt;
            </button>
            </div>
        </div>
      )}
    </div>
  );
}
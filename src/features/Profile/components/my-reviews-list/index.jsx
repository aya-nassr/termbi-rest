import { useState } from 'react';
import { MOCK_REVIEWS } from '../../mock/reviews-data';
import { FaStar, FaRegStar } from 'react-icons/fa'; // استيراد النجوم
import './style.css';

export function MyReviewsList() {
  // إعدادات الترقيم
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; 

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = MOCK_REVIEWS.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(MOCK_REVIEWS.length / itemsPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  // دالة مساعدة لرسم النجوم
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span key={index} className="star-icon">
        {index < rating ? <FaStar /> : <FaRegStar />}
      </span>
    ));
  };

  return (
    <div className="my-reviews-card">
      <h4 className="section-title mb-5">My Reviews</h4>

      <div className="reviews-container">
        {currentItems.map((review) => (
          <div key={review.id} className="review-item">
            {/* الصورة */}
            <div className="review-img-wrapper">
              <img src={review.image} alt="dish" className="review-img" />
            </div>

            {/* المحتوى */}
            <div className="review-content">
              <div className="review-header">
                <div className="review-stars">
                  {renderStars(review.rating)}
                </div>
                <span className="review-date">{review.date}</span>
              </div>
              
              <p className="review-text">
                {review.comment}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* الترقيم */}
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
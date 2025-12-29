import { useState } from "react";
import { Table } from "react-bootstrap";
import { MOCK_BOOKINGS } from "../../mock/bookings-data";
import "./style.css";

export function MyBookingsList() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = MOCK_BOOKINGS.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(MOCK_BOOKINGS.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="my-bookings-card">
      <h4 className="section-title mb-5">My bookings</h4>

      <div className="table-responsive">
        <Table borderless className="bookings-table align-middle text-center">
          <thead>
            <tr>
              <th style={{ width: "20%" }}>Booking ID</th>
              <th style={{ width: "20%" }}>Date</th>
              <th style={{ width: "15%" }}>Time</th>
              <th style={{ width: "15%" }}>Guests</th>
              <th style={{ width: "15%" }}>Status</th>
              <th style={{ width: "15%" }}>Details</th>
            </tr>
          </thead>
          <tbody>
            {/* 5. استخدام currentItems */}
            {currentItems.map((booking, index) => (
              <tr key={index}>
                <td className="text-muted number-text">{booking.id}</td>
                <td className="text-muted number-text">{booking.date}</td>

                <td className="fw-bold">{booking.time}</td>
                <td className="fw-bold">{booking.guests}</td>

                <td className={`status-text ${booking.status.toLowerCase()}`}>
                  {booking.status}
                </td>

                <td>
                  <a href="#" className="view-details-link">
                    View details
                  </a>
                </td>
              </tr>
            ))}
            {currentItems.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center py-4">
                  No bookings found.
                </td>
              </tr>
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

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (number) => (
                <button
                  key={number}
                  className={`page-btn ${
                    currentPage === number ? "active" : ""
                  }`}
                  onClick={() => handlePageChange(number)}
                >
                  {number}
                </button>
              )
            )}

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

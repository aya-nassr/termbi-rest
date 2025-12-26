import { Form, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { TimePicker } from "../time-picker";
import "./style.css";

export function ReservationForm({
  reservationType,
  date,
  setDate,
  time,
  setTime,
  startTime,
  setStartTime,
  endTime,
  setEndTime,
  guests,
  setGuests,
  tablesCount,
  setTablesCount,
  eventType,
  setEventType,
  decoration,
  setDecoration,
  notes,
  setNotes,
}) {
  const isTimeRange = reservationType === 3 || reservationType === 4;

  return (
    <div className="reservation-form-container">
      <Form>
        <Row>
          <Col md={5}>
            <Form.Group
              className="mb-4 d-flex align-items-center"
              controlId="bookingDate"
            >
              <Form.Label className="me-3 form-label-fixed">
                Booking date
              </Form.Label>
              <div className="flex-grow-1 custom-datepicker-wrapper">
                <DatePicker
                  selected={date}
                  onChange={(date) => setDate(date)}
                  placeholderText="Select Date"
                  className="custom-input w-100"
                  dateFormat="dd/MM/yyyy"
                  minDate={new Date()}
                />
              </div>
            </Form.Group>

            {isTimeRange ? (
              <Form.Group
                className="mb-4 d-flex align-items-center"
                controlId="bookingTimeRange"
              >
                <Form.Label className="me-3 form-label-fixed">
                  Booking Time
                </Form.Label>
                <div className="d-flex align-items-center gap-2 w-100">
                  <span className="text-muted small">From</span>
                  <div className="flex-grow-1">
                    <TimePicker
                      selectedTime={startTime}
                      onChange={setStartTime}
                    />
                  </div>
                  <span className="text-muted small">To</span>
                  <div className="flex-grow-1">
                    <TimePicker selectedTime={endTime} onChange={setEndTime} />
                  </div>
                </div>
              </Form.Group>
            ) : (
              <Form.Group
                className="mb-4 d-flex align-items-center"
                controlId="bookingTime"
              >
                <Form.Label className="me-3 form-label-fixed">
                  Booking Time
                </Form.Label>
                <div className="flex-grow-1">
                  <TimePicker selectedTime={time} onChange={setTime} />
                </div>
              </Form.Group>
            )}

           {/* تعديل قيم الـ Select لترسل الـ ID بدلاً من النص */}
{reservationType === 4 && (
  <>
    <Form.Group className="mb-4 d-flex align-items-center" controlId="eventType">
      <Form.Label className="me-3 form-label-fixed">Type of event</Form.Label>
      <Form.Select
        className="custom-input flex-grow-1"
        value={eventType}
        onChange={(e) => setEventType(e.target.value)}
      >
        <option value="">Select Event</option>
        <option value="1">Wedding</option>
        <option value="2">Birthday</option>
        <option value="3">Graduation</option>
        <option value="4">Party</option>
      </Form.Select>
    </Form.Group>

    <Form.Group className="mb-4 d-flex align-items-center" controlId="decoration">
      <Form.Label className="me-3 form-label-fixed">Decoration</Form.Label>
      <Form.Select
        className="custom-input flex-grow-1"
        value={decoration}
        onChange={(e) => setDecoration(e.target.value)}
      >
        <option value="">Select decoration</option>
        {/* يمكنكِ ترك الديكور كنص إذا كان السيرفر يقبله هكذا، 
            لكن الـ eventType يجب أن يكون رقماً */}
        <option value="Wedding décor">Wedding décor</option>
        <option value="Birthday décor">Birthday décor</option>
        <option value="Graduation décor">Graduation décor</option>
        <option value="Galaxy décor">Galaxy décor</option>
        <option value="Old Europe décor">Old Europe décor</option>
        <option value="Others">Others</option>
      </Form.Select>
    </Form.Group>
  </>
)}

            {reservationType === 2 && (
              <Form.Group
                className="mb-4 d-flex align-items-center"
                controlId="tablesNumber"
              >
                <Form.Label className="me-3 form-label-fixed">
                  Tables number
                </Form.Label>
                <Form.Select
                  className="custom-input flex-grow-1"
                  value={tablesCount}
                  onChange={(e) => setTablesCount(e.target.value)}
                >
                  <option value="">Select Number</option>
                  <option value="2">2 Tables</option>
                  <option value="3">3 Tables</option>
                  <option value="4">4 Tables</option>
                  <option value="5">5+ Tables</option>
                </Form.Select>
              </Form.Group>
            )}

            {/* Guests (للجميع) */}
            <Form.Group
              className="mb-4 d-flex align-items-center"
              controlId="guests"
            >
              <Form.Label className="me-3 form-label-fixed">Guests</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter number"
                className="custom-input flex-grow-1"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              />
            </Form.Group>
          </Col>

          <Col md={1}></Col>

          <Col md={6}>
            <Form.Group
              className="mb-4 h-100 d-flex flex-column"
              controlId="notes"
            >
              <Form.Label className="mb-2 fw-bold">Notes</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter your notes, important details or special request"
                className="custom-input flex-grow-1"
                style={{ minHeight: "150px", resize: "none" }}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

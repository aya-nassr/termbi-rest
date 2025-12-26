import { Container, Button } from 'react-bootstrap';
import { ReservationTypeCards } from '../components/reservation-type-cards';
import { ReservationForm } from '../components/reservation-form';
import { useReservation } from '../hooks/useReservation';
import './style.css';

export function ReservePage() {
  const { 
    reservationType, setReservationType, // استقبال النوع
    date, setDate,
    startTime, setStartTime, // الجديد
    endTime, setEndTime,
    eventType, setEventType,
    decoration, setDecoration,
    time, setTime,
    guests, setGuests,
    tablesCount, setTablesCount, // استقبال عدد الطاولات
    notes, setNotes,
    isValid,
    handleReservation
  } = useReservation();

  return (
    <div className="reserve-page-wrapper">
      <Container>
        <h2 className="page-title mb-5">
          <span className="text-danger">Reserve</span> Details
        </h2>

        {/* 1. نمرر الحالة ودالة التغيير للبطاقات */}
        <ReservationTypeCards 
            selectedId={reservationType} 
            onSelect={setReservationType} 
        />

        <div className="mt-5">
            {/* 2. نمرر النوع وعدد الطاولات للفورم */}
            <ReservationForm 
              reservationType={reservationType}
              date={date} setDate={setDate}
              time={time} setTime={setTime}
              startTime={startTime} setStartTime={setStartTime}
              endTime={endTime} setEndTime={setEndTime}
              guests={guests} setGuests={setGuests}
              tablesCount={tablesCount} setTablesCount={setTablesCount}
              eventType={eventType} setEventType={setEventType}
              decoration={decoration} setDecoration={setDecoration}
              notes={notes} setNotes={setNotes}
            />
        </div>

        <div className="text-center mt-5">
          <Button 
            // نضيف كلاس 'active' فقط إذا كانت البيانات صحيحة (لتغيير اللون للأحمر)
            className={`reserve-btn px-5 py-2 ${isValid ? 'active' : ''}`}
            
            // نقوم بتعطيل الزر (منع الضغط) إذا لم تكن البيانات صحيحة
            disabled={!isValid}
            
            onClick={handleReservation}
          >
            Reserve Now
          </Button>
        </div>

      </Container>
    </div>
  );
}
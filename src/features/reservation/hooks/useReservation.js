import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import ReservationService from "../services/api"; 
import { toast } from "react-hot-toast";

export function useReservation() {
  const queryClient = useQueryClient();

  // إعداد عملية الإرسال (Mutation)
  const createReservation = useMutation({
    mutationFn: (payload) => ReservationService.create(payload),
    onSuccess: () => {
      // تحديث قائمة الحجوزات في الخلفية بعد النجاح
      queryClient.invalidateQueries(["reservations"]);
      toast.success("تم الحجز بنجاح! شكراً لك.");
      // هنا يمكن تصفير الفورم إذا أردتِ
    },
    onError: (error) => {
      const errorMessage = error?.message || "حدث خطأ أثناء إتمام الحجز";
      
      // رسائل خطأ مخصصة باللغة العربية
      if (errorMessage.includes("tables are not enough")) {
        toast.error("عذراً، لا توجد طاولات متاحة في هذا الوقت. جرب وقتاً آخر أو قلل عدد الضيوف.");
      } else if (errorMessage.includes("past date")) {
        toast.error("لا يمكن الحجز في تاريخ سابق. اختر تاريخاً مستقبلياً.");
      } else {
        toast.error(errorMessage);
      }
      
      console.error("Reservation Error Details:", error);
    },
  });

  // --- الحالات (States) ---
  const [restaurantId, setRestaurantId] = useState(8);
  const [reservationType, setReservationType] = useState(1);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [guests, setGuests] = useState("");
  const [tablesCount, setTablesCount] = useState("");
  const [eventType, setEventType] = useState(""); // سيخزن الـ ID (1, 2, 3, 4)
  const [decoration, setDecoration] = useState("");
  const [notes, setNotes] = useState("");

  // التحقق من صحة البيانات قبل الإرسال
  const isValid = () => {
    if (!date || !guests) return false;
    
    if (reservationType === 4) {
      return startTime && endTime && eventType && decoration;
    } else if (reservationType === 3) {
      return startTime && endTime;
    } else if (reservationType === 2) {
      return time && tablesCount;
    } else {
      return time;
    }
  };

  // الدالة الأساسية لإرسال الحجز
  const handleReservation = () => {
    if (isValid()) {
      // بناء الكائن (Payload) حسب متطلبات السيرفر الدقيقة
      const payload = {
        restaurant_admin_id: Number(restaurantId), // قابل للتعديل
        type: Number(reservationType),
        date: date instanceof Date ? date.toISOString().split('T')[0] : date,
        from: reservationType === 1 || reservationType === 2 ? time : startTime,
        guests: String(guests), // API expects string
        notes: notes || null // API expects null for empty notes
      };

      // إضافة الحقول المطلوبة حسب نوع الحجز
      if (reservationType === 2) {
        payload.tables = String(tablesCount); // API expects "tables" not "tables_count"
      }
      
      if (reservationType === 3 || reservationType === 4) {
        payload.to = endTime;
      }
      
      if (reservationType === 4) {
        payload.event_type_id = Number(eventType);
        payload.decoration = decoration;
      }

      console.log("إرسال البيانات النهائية:", payload);
      createReservation.mutate(payload);
    } else {
      toast.error("يرجى إكمال جميع الحقول المطلوبة");
    }
  };

  return {
    restaurantId, setRestaurantId,
    reservationType, setReservationType,
    date, setDate,
    time, setTime,
    startTime, setStartTime,
    endTime, setEndTime,
    guests, setGuests,
    tablesCount, setTablesCount,
    eventType, setEventType,
    decoration, setDecoration,
    notes, setNotes,
    isValid: isValid(),
    handleReservation,
    isLoading: createReservation.isPending, // استخدام الحالات الجديدة لـ React Query
  };
}
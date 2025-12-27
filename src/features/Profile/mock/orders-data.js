// src/features/profile/mock/orders-data.js

// استيراد صور مؤقتة (يمكنك استخدام صورك)
import food1 from '../../../assets//img/dashboard.jpg'; 

export const MOCK_ORDERS = [
  {
    id: "11236587267",
    products: [food1, food1], // مصفوفة صور للمنتجات
    date: "20-07-2024",
    amount: "500$",
    status: "Delivered"
  },
  {
    id: "11236587268",
    products: [food1],
    date: "21-07-2024",
    amount: "150$",
    status: "Delivered"
  },
  {
    id: "11236587269",
    products: [food1, food1, food1],
    date: "22-07-2024",
    amount: "320$",
    status: "Delivered"
  },
  {
    id: "11236587270",
    products: [food1],
    date: "25-07-2024",
    amount: "50$",
    status: "Delivered"
  },
    {
    id: "11236587271",
    products: [food1],
    date: "25-07-2024",
    amount: "50$",
    status: "Delivered"
  },
];
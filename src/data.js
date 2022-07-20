import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';
import React from 'react';
const sublinks = [
  {
    page: 'Hizmetler',
    links: [
      { label: 'EFT/Havale', icon: <FaCreditCard />, url: '/hizmetler' },
      { label: 'FAST 7/24', icon: <FaCreditCard />, url: '/hizmetler' },
      { label: 'Western Union', icon: <FaCreditCard />, url: '/hizmetler' },
    ],
  },
  {
    page: 'Geliştiriciler',
    links: [
      { label: 'Eklentiler', icon: <FaBook />, url: '/hizmetler' },
      { label: 'Kütüphaneler', icon: <FaBook />, url: '/hizmetler' },
      { label: 'Ödemeler', icon: <FaBook />, url: '/hizmetler' },
      { label: 'Yardım', icon: <FaBook />, url: '/hizmetler' },
    ],
  },
  {
    page: 'Şirketimiz',
    links: [
      { label: 'Hakkımızda', icon: <FaBriefcase />, url: '/sirketler' },
      { label: 'Müşteriler', icon: <FaBriefcase />, url: '/sirketler' },
    ],
  },
];

export default sublinks;

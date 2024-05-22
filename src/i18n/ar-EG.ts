import { LocaleTranslations } from '@/i18n/schema';

const enAR: LocaleTranslations = {
  common: {
    branch: 'الفرع',
    date: 'التاريخ',
    details: 'الوقت',
    time: 'تفاصيل',
  },
  nav: {
    home: 'الرئيسية',
    prices: 'الأسعار',
    sales: 'كلم المبيعات',
    track: 'تتبع شحنتك',
    login: 'تسجيل الدخول',
  },
  tracking: {
    page: {
      delvieryAddress: 'عنوان التسليم',
      estimatedDeliveryDate: 'موعد التسليم خلال',
      lastUpdate: 'أخر تحديث',
      provider: 'إسم التاجر',
      sampleAddress: '١٠ صلاح سالم، أرض الجولف، مدينة نصر، Cairo',
      shipmentCanceled: 'تم إلغاء الشحنة',
      shipmentDelivered: 'تم تسليم الشحنة',
      shipmentNotDelivered: 'لم يتم تسليم الشحنة',
      shipmentDetails: 'تفاصيل الشحنة',
      shipmentNumber: 'رقم الشحنة',
      troubleshootButton: 'إبلاغ عن مشكلة',
      troubleshootQuestion: 'هل يوجد مشكلة في شحنتك ؟!',
      shipmentCreated: 'تم إنشاء الشحنة',
      shipmentReceived: 'تم إستلام الشحنة من التاجر',
      delivered: 'تم التسليم',
      outForDelivery: 'الشحنة خرجت للتسليم',
    },
    hub: {
      'Beni Suef Hub': 'بني سويف',
      'Cairo Sorting Facility': 'مستودع بوسطة',
      'El-Mansoura Hub': 'المنصورة',
      'FM & Reverse Hub': 'مركز FM & Reverse' 
    },
    reason: {
      'Uncovered Zone': 'العنوان خارج نطاق الخدمة',
      'Cancellation - The customer refuses to give the shipment to the star':
        'تم إلغاء الشحنة لأنك رفضت تسليم الشحنة إلى مندوبنا',
    },
    state: {
      AVAILABLE_FOR_PICKUP: 'الشحنة متاحة للاستلام',
      CANCELLED: 'تم إلغاء الشحنة',
      DELIVERED: 'تم التسليم',
      DELIVERY_FAILED: 'لم يتم تسليم الشحنة',
      IN_TRANSIT: 'في مرحلة النقل',
      NOT_YET_SHIPPED: 'الشحنة لم يتم شحنها بعد',
      OUT_FOR_DELIVERY: 'الشحنة خرجت للتسليم',
      PACKAGE_RECEIVED: 'تم إستلام الشحنة',
      TICKET_CREATED: 'تم إنشاء الشحنة',
      WAITING_FOR_CUSTOMER_ACTION: 'في انتظار إجراء العميل',
    },
  },
};

export default enAR;

"use client";

import { useState } from "react";
import { FiX } from "react-icons/fi";
import SuccessModal from "./SuccessModal";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

interface ModalProps {
  title: string;
  onClose: () => void;
  onSubmit?: () => void;  // حالا ساپورت می‌کنه
}

interface FormData {
  name: string;
  birthDate: string;
  email: string;
  whatsapp: string;
  country: string;
  education: string;
  currentJob: string;
  previousJob: string;
  english: string;
  french: string;
  rejectionHistory: string;
  travelHistory: string;
  additional: string;
}

interface FormSectionProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

/* ---- Form (Step 1) ---- */
function FormSection({ formData, setFormData }: FormSectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
      <input className="input" placeholder="نام و نام خانوادگی"
        value={formData.name}
        onChange={e => setFormData({ ...formData, name: e.target.value })} />

      <div className="relative">
        <DatePicker
          calendar={persian}
          locale={persian_fa}
          calendarPosition="bottom-right"
          inputClass="input text-right w-full"
          placeholder="تاریخ تولد"
          format="YYYY/MM/DD"
          value={formData.birthDate}
          onChange={date =>
            setFormData({ ...formData, birthDate: date?.format?.("YYYY/MM/DD") || "" })
          }
        />
      </div>

      <input type="email" className="input" placeholder="ایمیل"
        value={formData.email}
        onChange={e => setFormData({ ...formData, email: e.target.value })} />

      <input type="tel" className="input text-left ltr" placeholder="+989..."
        value={formData.whatsapp}
        onChange={e => setFormData({ ...formData, whatsapp: e.target.value })} />

      <input className="input" placeholder="کشور محل سکونت"
        value={formData.country}
        onChange={e => setFormData({ ...formData, country: e.target.value })} />

      <input className="input" placeholder="آخرین مدرک تحصیلی"
        value={formData.education}
        onChange={e => setFormData({ ...formData, education: e.target.value })} />

      <input className="input" placeholder="شغل فعلی"
        value={formData.currentJob}
        onChange={e => setFormData({ ...formData, currentJob: e.target.value })} />

      <input className="input" placeholder="شغل قبلی"
        value={formData.previousJob}
        onChange={e => setFormData({ ...formData, previousJob: e.target.value })} />

      <select className="input" value={formData.english}
        onChange={e => setFormData({ ...formData, english: e.target.value })}>
        <option>سطح زبان انگلیسی</option>
        <option>A1</option><option>A2</option>
        <option>B1</option><option>B2</option>
        <option>C1</option><option>C2</option>
      </select>

      <select className="input" value={formData.french}
        onChange={e => setFormData({ ...formData, french: e.target.value })}>
        <option>سطح زبان فرانسوی</option>
        <option>A1</option><option>A2</option>
        <option>B1</option><option>B2</option>
        <option>C1</option><option>C2</option>
      </select>

      <input className="input col-span-2" placeholder="سابقه ریجکتی از کشورها"
        value={formData.rejectionHistory}
        onChange={e => setFormData({ ...formData, rejectionHistory: e.target.value })} />

      <input className="input col-span-2" placeholder="کشورهای سفر رفته"
        value={formData.travelHistory}
        onChange={e => setFormData({ ...formData, travelHistory: e.target.value })} />

      <textarea className="input col-span-2 h-[90px]" placeholder="توضیحات تکمیلی"
        value={formData.additional}
        onChange={e => setFormData({ ...formData, additional: e.target.value })} />
    </div>
  );
}

/* ---- Payment (Step 2) ---- */
function PaymentSection() {
  return (
    <div className="flex flex-col gap-4 text-sm text-right">
      <div className="pay-option"> ایران (زرین‌پال آنلاین)</div>

      <div className="pay-option flex flex-col items-start text-right">
        <span className="font-medium"> خارج از ایران (پی‌پال)</span>
        <p className="text-xs text-gray-600">
          لطفاً مبلغ 157.5 دلار را ارسال کنید به:
          <br />
          <strong className="ltr">salarsk2@gmail.com</strong>
        </p>
      </div>

      <div className="pay-option flex flex-col items-start text-right">
        <span className="font-medium"> کارت به کارت</span>
        <p className="text-xs text-gray-600">
          شماره کارت:
          <br />
          <strong className="ltr">6274-1212-0938-7927</strong>
        </p>
      </div>

      <div className="pay-option flex flex-col items-start text-right">
        <span className="font-medium"> کانادا (E-Transfer)</span>
        <p className="text-xs text-gray-600">
          ایمیل:
          <br />
          <strong className="ltr">dejavuvisa1@gmail.com</strong>
        </p>
      </div>

      <div className="pay-option"> امارات</div>
      <div className="pay-option"> کارت اعتباری (Credit Card)</div>
    </div>
  );
}

export default function Modal({ title, onClose, onSubmit }: ModalProps) {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    birthDate: "",
    email: "",
    whatsapp: "",
    country: "",
    education: "",
    currentJob: "",
    previousJob: "",
    english: "",
    french: "",
    rejectionHistory: "",
    travelHistory: "",
    additional: "",
  });

  const isConsult = title.includes("مشاوره تخصصی");

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:4000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          formType: isConsult ? "consultation" : "evaluation",
        }),
      });

      const data = await res.json();
      if (data.success) {
        onClose();
        setShowSuccessModal(true);
        onSubmit?.(); // اگر پاس داده باشی اجرا میشه
      } else {
        alert("❌ ارسال ناموفق بود");
      }
    } catch (error) {
      console.error("❌ خطا:", error);
      alert("ارتباط با سرور برقرار نشد!");
    }
  };

  const handleNext = () => {
    if (isConsult) {
      if (step === 1) {
        setStep(2);
      } else if (step === 2) {
        handleSubmit();
      }
    } else {
      handleSubmit();
    }
  };

  return (
    <>
      {/* MODAL */}
      <div className="fixed inset-0 bg-black/50 flex items-center md:items-start justify-center z-40 p-4 md:pt-[80px]">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-[420px] 
                        max-h-[90vh] md:max-h-[75vh] overflow-y-auto relative flex flex-col">
          
          <button
            onClick={onClose}
            className="absolute top-4 left-4 text-gray-500 hover:text-gray-800"
          >
            <FiX size={22} />
          </button>

          <h2 className="text-lg font-bold text-right mt-6 mb-6 px-5">
            {isConsult && step === 2 ? "بخش پرداخت" : title}
          </h2>

          <div className="px-5 pb-6 flex-1 overflow-y-auto">
            {step === 1 && <FormSection formData={formData} setFormData={setFormData} />}
            {isConsult && step === 2 && <PaymentSection />}
          </div>

          <div className="p-4 border-t border-gray-200 bg-white sticky bottom-0">
            <button
              onClick={handleNext}
              className="w-full py-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-400 
                         text-white font-semibold hover:opacity-90 transition"
            >
              {isConsult
                ? step === 1
                  ? "ادامه به پرداخت"
                  : "ثبت نهایی"
                : "تأیید و ثبت مشخصات"}
            </button>
          </div>
        </div>
      </div>

      {/* SUCCESS MODAL */}
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        modalType={isConsult ? "consultation" : "evaluation"}
      />
    </>
  );
}
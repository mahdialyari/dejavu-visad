"use client";

import React from 'react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  modalType: 'evaluation' | 'consultation';
}

const SuccessModal: React.FC<SuccessModalProps> = ({ 
  isOpen, 
  onClose, 
  modalType 
}) => {
  if (!isOpen) return null;

  const messages = {
    evaluation: {
      title: 'Free Evaluation',
      message: 'Thank you for choosing our free evaluation service. Your information has been registered and our team will contact you within 72 hours. We wish you success.',
      additionalMessage: null
    },
    consultation: {
      title: 'Specialized Consultation',
      message: 'Thank you for choosing our specialized consultation service. Your information has been registered and our team will contact you within 72 hours. We wish you success.',
      additionalMessage: 'Please send your payment receipt to this WhatsApp number:',
      whatsappNumber: '+16042239900'
    }
  };

  const { title, message, additionalMessage } = messages[modalType];
  const whatsappNumber = modalType === 'consultation' ? messages[modalType].whatsappNumber : null;

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                    bg-white shadow-xl rounded-xl p-6 w-full max-w-[380px] z-50 text-center">
      <div className="text-5xl text-green-500 mb-4">✅</div>

      <h3 className="text-xl font-bold text-gray-800 mb-4">
        {title}
      </h3>

      <p className="text-gray-700 mb-4 leading-relaxed">
        {message}
      </p>

      {additionalMessage && (
        <div className="mb-4">
          <p className="text-red-500 font-bold text-sm mb-2">
            {additionalMessage}
          </p>
          {whatsappNumber && (
            <p className="text-blue-500 font-bold text-lg dir-ltr">
              {whatsappNumber}
            </p>
          )}
        </div>
      )}

      <button
        onClick={onClose}
        className="w-full py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-400 
                   text-white font-semibold hover:opacity-90 transition"
      >
        Close
      </button>
    </div>
  );
};

export default SuccessModal;
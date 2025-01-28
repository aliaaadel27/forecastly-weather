import React from 'react';
import { AlertCircle } from 'lucide-react';

export const ErrorMessage = ({ message }) => {
  return (
    <div className="alert alert-danger d-flex align-items-center" role="alert">
      <AlertCircle size={20} className="me-2" />
      <span>{message}</span>
    </div>
  );
};

import React from "react";
import { Alert } from "react-bootstrap";

interface ErrorMessageProps {
  errorMessage: string;
}

const ErrorMessage = ({ errorMessage }: ErrorMessageProps) => {
  return <Alert security="error">{errorMessage}</Alert>;
};

export default ErrorMessage;

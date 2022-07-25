import { useEffect } from 'react';

type AlertProps = {
    type: string
    msg: string
    removeAlert: () => void
    list: void
}

export default function Alert ({ type, msg, removeAlert, list }: AlertProps) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list]);
  return <p className={`alert alert-${type}`}>{msg}</p>;
};


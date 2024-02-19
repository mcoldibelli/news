import { useEffect, useState } from 'react';

function HeaderDate() {
  const [today, setToday] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setToday(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatDate = (date: Date) => date.toLocaleString('pt-br');

  return (
    <span>
      {formatDate(today)}
    </span>
  );
}

export default HeaderDate;

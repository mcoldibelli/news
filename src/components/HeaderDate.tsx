import { useEffect, useState } from 'react';

function HeaderDate() {
  const [today, setToday] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setToday(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span>
      {today && today.toLocaleString('pt-br')}
    </span>
  );
}

export default HeaderDate;

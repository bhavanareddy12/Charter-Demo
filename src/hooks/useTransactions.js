import { useState, useEffect } from 'react';
import logger from '../logger';

const useTransactions = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/data/transactions.json');
        if (!res.ok) logger.error('Network error');
        const json = await res.json();
        setData(json);
      } catch (error) {
        logger.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading };
};

export default useTransactions;
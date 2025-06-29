import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Table from '../../components/Table/Table';
import Select from '../../components/Select/Select';
import Pagination from '../../components/Pagination/Pagination';
import useTransactions from '../../hooks/useTransactions';
import { calculateRewardPoints } from '../../utils/helpers';
import { months, years, columns } from './constants';
import { Container, Title, Text } from './Customer.styles';

function CustomerTransactions() {
  const { id } = useParams();
  const { data = [], loading } = useTransactions();

  const [transactions, setTransactions] = useState([]);
  const [month, setMonth] = useState('0');
  const [year, setYear] = useState(new Date().getFullYear());
  const [msg, setMsg] = useState('');
  const [totalRewards, setTotalRewards] = useState(0);
  const [monthlyRewards, setMonthlyRewards] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  useEffect(() => {
    if (loading || !data.length) return;

    const customer = data.find(d => d.customerId === id);
    if (!customer) {
      setTransactions([]);
      setMsg('No transactions found');
      return;
    }

    let txs = customer.transactions.map(tx => ({
      ...tx,
      rewards: calculateRewardPoints(tx.amount)
    }));

    // Filter logic
    if (month === '0') {
      const today = new Date();
      const start = new Date(today.getFullYear(), today.getMonth() - 2, 1);
      const end = new Date(today.getFullYear(), today.getMonth() + 1, 0);
      txs = txs.filter(tx => {
        const date = new Date(tx.date);
        return date >= start && date <= end;
      });
      setTotalRewards(0);
    } else {
      txs = txs.filter(tx => {
        const date = new Date(tx.date);
        return (
          date.getFullYear() === +year &&
          date.getMonth() + 1 === +month
        );
      });
      const monthTotal = txs.reduce((sum, tx) => sum + tx.rewards, 0);
      setMonthlyRewards(monthTotal);
    }

    const total = customer.transactions.reduce(
      (sum, tx) => sum + calculateRewardPoints(tx.amount),
      0
    );
    setTotalRewards(total);
    setTransactions(txs);
    setMsg(txs.length ? '' : 'No transactions found');
  }, [data, id, month, year, loading]);

  const paginatedData = transactions.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <Container>
      <Title>{id} Transactions</Title>
      <Select options={months} value={month} onChange={e => setMonth(e.target.value)} />
      <Select
        options={years}
        value={year}
        disable={month === '0'}
        onChange={e => setYear(e.target.value)}
      />
      {totalRewards > 0 && <Text>Total Rewards: {totalRewards}</Text>}
      {monthlyRewards > 0 && <Text>Monthly Rewards: {monthlyRewards}</Text>}
      <Table data={paginatedData} columns={month === '0' ? columns.slice(0, 3) : columns} />
      {msg && <Text>{msg}</Text>}
      {transactions.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalItems={transactions.length}
          pageSize={pageSize}
          onPageChange={setCurrentPage}
        />
      )}
    </Container>
  );
}

export default CustomerTransactions;

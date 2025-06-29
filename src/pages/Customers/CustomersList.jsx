import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Table from '../../components/Table/Table';
import Pagination from '../../components/Pagination/Pagination';
import useTransactions from '../../hooks/useTransactions';
import { Container, Title } from './Customer.styles'

function CustomersList() {

    const navigate = useNavigate();
    const { data = [], loading } = useTransactions();

    const [customers, setCustomers] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 5;

    const columns = [
        {label: 'customer Id',key: 'customerId'}]

    useEffect(()=>{
        if(!loading && Array.isArray(data)){
            setCustomers(data)
        }
    },[loading,data])

    const handleClick = (data) => {
        navigate(`/customers/${data.customerId}/transactions`);
    }

    const paginatedData = customers.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );
    

    return (
        <Container>
            <Title>Customers</Title>
            <Table data={paginatedData} columns={columns} handleClick={handleClick}/>
            {customers.length > 0 &&<Pagination
            currentPage={currentPage}
            totalItems={customers.length}
            pageSize={pageSize}
            onPageChange={(page) => setCurrentPage(page)}
            />}
        </Container>
    );
}

export default CustomersList
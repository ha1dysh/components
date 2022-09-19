import { Table, Thead, Tr } from './Transactions.styled';

export default function Transactions({ transactions }) {
  console.log(transactions);

  return (
    <Table>
      <Thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </Thead>

      <tbody>
        {transactions.map(e => (
          <Tr key={e.id}>
            <td>{e.type}</td>
            <td>{e.amount}</td>
            <td>{e.currency}</td>
          </Tr>
        ))}
      </tbody>
    </Table>
  );
}

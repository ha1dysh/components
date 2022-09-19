import { Table, Thead, Tr } from './Transactions.styled';

export default function Transactions({ transactions }) {
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
        {transactions.map(({ id, type, amount, currency }) => (
          <Tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </Tr>
        ))}
      </tbody>
    </Table>
  );
}

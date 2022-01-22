import PropTypes from "prop-types";
import {TransactionTable, TableHeadItem, TableData} from './TransactionHistory.styled'

export default function TransactionHistory({ items }) {
  return (<TransactionTable>
    <thead>
    <tr>
      <TableHeadItem>Type</TableHeadItem>
      <TableHeadItem>Amount</TableHeadItem>
      <TableHeadItem>Currency</TableHeadItem>
    </tr>
  </thead>

  <tbody>
      {items.map(({ id, type, amount, currency }) =>  ( <tr key={id} >
        <TableData>{type}</TableData>
        <TableData>{amount}</TableData>
        <TableData>{currency}</TableData>
      </tr>))}
  </tbody>
  </TransactionTable>
    
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
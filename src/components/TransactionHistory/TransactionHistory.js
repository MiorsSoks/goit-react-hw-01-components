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
      {items.map(item =>  ( <tr key={item.id} >
        <TableData>{item.type}</TableData>
        <TableData>{item.amount}</TableData>
        <TableData>{item.currency}</TableData>
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
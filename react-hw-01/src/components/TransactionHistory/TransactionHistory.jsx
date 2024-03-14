import css from "./TransactionHistory.module.css"
import clsx from "clsx"

const TransactionHistory = props => {
  return (
    <>
      <table className={css.table}>
        <thead>
          <tr className={css.tr}>
            <th className={css.th}>Type</th>
            <th className={css.th}>Amount</th>
            <th className={css.th}>Currency</th>
          </tr>
        </thead>

        <tbody>
            {props.items && props.items.map((transaction) => {
                return <tr className={css.transAction} key={transaction.id}>
                    <td className={`${css.td} ${css.tdName}`}>{transaction.type}</td>
                    <td className={css.td}>{transaction.amount}</td>
                    <td className={css.td}>{transaction.currency}</td>
                </tr>
            })}
        </tbody>
      </table>
    </>
  );
};

export default TransactionHistory;

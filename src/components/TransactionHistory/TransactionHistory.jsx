import React from "react";
import PropTypes from "prop-types";
import styles from "./TransactionHistory.module.css";

const TransactionHistory = (props) => {
    return (
        <table className = {styles.transaction_history}>
        <thead className = {styles.wrapper}>
          <tr>
            <th className = {styles.title}>Type</th>
            <th className = {styles.title}>Amount</th>
            <th className = {styles.title}>Currency</th>
          </tr>
        </thead>
  
        <tbody>
          {props.transactionData.map((unit) => {
            return (
              <tr key={unit.id}>
                <td className = {styles.text}>{unit.type}</td>
                <td className = {styles.text}>{unit.amount}</td>
                <td className = {styles.text}>{unit.currency}</td>
              </tr>
            )
          }
        )
        }
        </tbody>
      </table>
    )
}

TransactionHistory.propTypes = {
  transactionData: PropTypes.array.isRequired
}

export default TransactionHistory
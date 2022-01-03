import React from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

const Statistics = (props) => {
    return (
        <section className={styles.statistics}>
            <h2 className={styles.title}>{props.title}</h2>

            <ul className={styles.stat_list}>
            { props.statData.map(sData => (
                <li key={sData.id} className={styles.item}>
                    <span className={styles.label}>{sData.label}</span>
                    <span className={styles.percentage}>{sData.percentage}%</span>
                </li>
            ))}
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    statData: PropTypes.array.isRequired
}

export default Statistics;
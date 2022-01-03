import React from "react";
import PropTypes from "prop-types";
import styles from "./FriendList.module.css";

const FriendListItem = (props) => {

    const statusOfFriend = [styles.status];
    if (props.isOnline === true) {
        statusOfFriend.push(styles.status__active)
    }
    else {
        statusOfFriend.push(styles.status__inactive)
    }

    return (<li className = {styles.item}>
        <span className = {statusOfFriend.join(' ')}></span>
        <img className = {styles.avatar} src = {props.avatar} alt = "User avatar" width = "48" />
        <p className = {styles.name}>{props.name}</p>
    </li>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

export default FriendListItem;
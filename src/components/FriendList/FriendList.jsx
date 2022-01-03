import React from "react";
import PropTypes from "prop-types";
import styles from "./FriendList.module.css";
import FriendListItem from "./FriendListItem.jsx";

const FriendList = (props) => {
    return (<ul className={styles.friendList}>
        {props.listOfFriends.map((item) => {
            return (<FriendListItem
            key = {item.id}
            name = {item.name}
            avatar = {item.avatar}
            isOnline = {item.isOnline}
            />)
        })}
        </ul>
    )
}

FriendList.propTypes = {
    listOfFriends: PropTypes.array.isRequired
}

export default FriendList;
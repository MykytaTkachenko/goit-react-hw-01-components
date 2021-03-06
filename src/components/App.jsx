import React from "react";
import Profile from "./Profile/Profile.jsx";
import Statistics from "./Statistics/Statistics.jsx";
import FriendList from "./FriendList/FriendList.jsx";
import TransactionHistory from "./TransactionHistory/TransactionHistory.jsx";
import profileData from "../data/user.json";
import statisticsData from "../data/data.json";
import friendsData from "../data/friends.json";
import transactionData from "../data/transactions.json";

const App = () => {
    return (
        <>
            <Profile
                username = {profileData.username}
                tag = {profileData.tag}
                location = {profileData.location}
                avatar = {profileData.avatar}
                stats = {profileData.stats}
            />

            <Statistics
                title = "Upload stats"
                statData = {statisticsData}
            />
            <Statistics 
                statData = {statisticsData}
            />

            <FriendList
                listOfFriends = {friendsData}
            />

            <TransactionHistory
                transactionData = {transactionData}
            />
        </>
    );
}

export default App;
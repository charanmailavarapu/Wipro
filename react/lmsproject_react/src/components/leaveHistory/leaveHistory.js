import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';

const LeaveHistory = ()  => {

    const [lh, setLeaveHistory] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            let eid = localStorage.getItem("empId");
            if(!eid) return;
            try{
            const response = await
                axios.get(`https://localhost:7238/api/LeaveHistories?empId=${eid}`);
            setLeaveHistory(response.data);
        }catch (error) {
            console.error("Error fetching leave history:", error);
        }
    };
        fetchData();
    }, []);

    return (
        <div>
            <table border="3" align="center">
                <thead>
                <tr>
                    <th>Leave Id</th>
                    <th>Employee Id</th>
                    <th>Leave Start Date</th>
                    <th>Leave End Date</th>
                    <th>No Of Days</th>
                    <th>Leave Status</th>
                    <th>Leave Reason</th>
                    <th>Manager Comments</th>
                </tr>
                </thead>
                <tbody>
                {lh.map((item) =>
                    <tr key={item.leaveId}>
                        <td>{item.leaveId}</td>
                        <td>{item.empId}</td>
                        <td>{item.leaveStartDate}</td>
                        <td>{item.leaveEndDate}</td>
                        <td>{item.noOfDays}</td>
                        <td>{item.leaveStatus}</td>
                        <td>{item.leaveReason}</td>
                        <td>{item.managerComments}</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    )
}

export default LeaveHistory;
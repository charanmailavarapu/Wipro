import axios from 'axios';
import React, { Component, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LeaveHistory from '../leaveHistory/leaveHistory';

const DashBoard = () => {

    const navigate = useNavigate();
    // const [empId, setEmpId] = useState(0)
    // const [mgrId, setMgrId] = useState(0)
    const [employData, setEmployData] = useState({})
    const [managerData, setManagerData] = useState({})
    const [error, setError] = useState("");

    const applyLeave = () => {
        navigate("/applyLeave");
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const empIdValue = localStorage.getItem("empId");
                const mgrIdValue = localStorage.getItem("mgrId");

                if (!empIdValue) {
                    setError("Employee ID not found in local storage.");
                }

                const empId = parseInt(empIdValue);
                const mgrId = mgrIdValue && mgrIdValue !== "null" ? parseInt(mgrIdValue) : null;

                const requests = [
                    axios.get(`https://localhost:7238/api/Employees/${empId}`)
                ]

                if (mgrId) {
                    requests.push(
                        axios.get(`https://localhost:7238/api/Employees/${mgrId}`)
                    )
                }

                const responses = await Promise.all(requests);
                setEmployData(responses[0].data);
                if (mgrId && responses[1]) {
                    setManagerData(responses[1].data);
                }
            } catch (err) {
                console.error(err);
                setError("Failed to load data. Please try again later.");
            }
        };

        fetchData();
    }, [])
    return (
        <div>
            <table border="3" align="center">
                <thead>
                    <tr>
                        <th>My Data</th>
                        <th>My Manager Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            Employ Id : <b>{employData.empId}</b> <br />
                            Employ Name : <b>{employData.employName}</b> <br />
                            Manager Id : <b>{employData.mgrId}</b> <br />
                            Leave Avail : <b>{employData.leaveAvail}</b> <br />
                            Date of Birth:{" "}
                            <b>{new Date(employData.dateOfBirth).toLocaleDateString()}</b> <br />
                            Email : <b>{employData.email}</b> <br />
                            Mobile : <b>{employData.mobile}</b>
                        </td>
                        <td>
                            Employ Id : <b>{managerData.empId}</b> <br />
                            Employ Name : <b>{managerData.employName}</b> <br />
                            Manager Id : <b>{managerData.mgrId}</b> <br />
                            Leave Avail : <b>{managerData.leaveAvail}</b> <br />
                            Date of Birth:{" "}
                            <b>{new Date(managerData.dateOfBirth).toLocaleDateString()}</b> <br />
                            Email : <b>{managerData.email}</b> <br />
                            Mobile : <b>{managerData.mobile}</b>
                        </td>
                    </tr>
                    <tr>
                        <th colSpan="2">
                            <LeaveHistory />
                        </th>
                    </tr>
                    <tr>
                        <th colSpan="2">
                            <input type="button" value="Apply Leave" onClick={applyLeave} />
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}

export default DashBoard;
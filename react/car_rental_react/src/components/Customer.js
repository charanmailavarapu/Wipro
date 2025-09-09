import { useState } from "react";
import CustomerService from "../services/CustomerService";

const Customer = () => {
    const [cars, setCars] = useState([]);
    const customerService = CustomerService();

    const show = async () => {
        try {
            const response = await customerService.adminDashBoard();
            setCars(response.data); // ✅ use response.data if Axios
        } catch (error) {
            console.error("Error fetching customers", error);
        }
    };

    return (
        <div>
            <table border="3" align="center">
                <thead>
                    <tr>
                        <th>Customer Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {cars.map((item) => (
                        <tr key={item.customerID}>
                            <td>{item.customerID}</td>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.email}</td>
                            <td>{item.phoneNumber}</td>


                        </tr>
                    ))}
                </tbody>
            </table>
            <input type="button" value="Show Customers" onClick={show} /> <br /><br />
        </div>
    );
};

export default Customer;
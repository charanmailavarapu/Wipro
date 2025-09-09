import { useState } from "react";
import VehicleService from "../services/VehicleService";

const Vehicle = () => {
    const [cars, setCars] = useState([]);
    const vehicleService = VehicleService();

    const show = async () => {
        try {
            const response = await vehicleService.adminDashBoard();
            setCars(response.data); // ✅ use response.data if Axios
        } catch (error) {
            console.error("Error fetching cars", error);
        }
    };

    return (
        <div>
            <table border="3" align="center">
                <thead>
                    <tr>
                        <th>Vehicle Id</th>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Year</th>
                        <th>Daily Rate</th>
                        <th>Status</th>
                        <th>Passenger Capacity</th>
                        <th>Engine Capacity</th>
                    </tr>
                </thead>
                <tbody>
                    {cars.map((item) => (
                        <tr key={item.vehicleID}>
                            <td>{item.vehicleID}</td>
                            <td>{item.make}</td>
                            <td>{item.model}</td>
                            <td>{item.year}</td>
                            <td>{item.dailyRate}</td>
                            <td>{item.status}</td>
                            <td>{item.passengerCapacity}</td>
                            <td>{item.engineCapacity}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
            <input type="button" value="Show Vehicle" onClick={show} /> <br /><br />
        </div>
    );
};

export default Vehicle;
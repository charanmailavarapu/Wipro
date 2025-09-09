import axios from "axios"
import AuthHeader from "./AuthHeader";

const VehicleService = () => {
    const adminDashBoard = async () => {
        try {
            // alert("Hi");
            const response = await axios.get("https://localhost:7266/api/Vehicles", {
            headers: AuthHeader()
        });
        console.log(response);
          return response;
        }
        catch (error) {
            alert(error);
        }
    }
    return {
        adminDashBoard
    }
}

export default VehicleService;
import axios from "axios"
import AuthHeader from "./AuthHeader";

const CustomerService = () => {
    const adminDashBoard = async () => {
        try {
            // alert("Hi");
            const response = await axios.get("https://localhost:7266/api/Customers", {
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

export default CustomerService;
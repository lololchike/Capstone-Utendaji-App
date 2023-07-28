import EmployeeHome from "./employeeHome";
import EditEmployee from "../componets/editEmployee";
import { useState } from "react";

const ManagerHome = () => {
const [showEditEmployeeModal, setShowEditEmployeeModal] = useState(false)
    return ( 
        <>
        <EmployeeHome 
        performanceTitle = "My Team Stats"
        staffName = "Temayo James"
        staffRole = "Manager"
        performanceHeading = "Your Team's Performance at a Glance"
        teamHeading = "Your Team: Team Pacific :- 16 Members"
        setShowEditEmployeeModal={setShowEditEmployeeModal}
        />
        {showEditEmployeeModal && <EditEmployee setShowEditEmployeeModal={setShowEditEmployeeModal} />}
        </>
     );
}
 
export default ManagerHome;
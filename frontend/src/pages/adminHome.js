import EmployeeHome from "./employeeHome";
import CreateUser from "../componets/createUser"
import { useState } from "react";


export const AdminHome = () => {
    const [showCreateForm, setShowCreateForm] = useState(false)
    
    const createWorker = ()=>{
        setShowCreateForm(true)
    }


    return ( 
        <>
        <EmployeeHome 
        isAdmin = {true}
        performanceTitle = "View All Teams"
        staffName = "Cameron Dey"
        staffRole = "Admin"
        performanceHeading = "All Teams"
        teamHeading = "All Teams"
        adminTeamButton = "Create Team"
        adminJobButton = "Create New User"
        showJobs = {createWorker}

        />
       {showCreateForm &&  <CreateUser setShowCreateForm = {setShowCreateForm}/>} 
        </>
     );
}
 
export default AdminHome;
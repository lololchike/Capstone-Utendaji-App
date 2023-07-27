const Performance = () => {
    const currentEmployee = JSON.parse(localStorage.getItem("currentUser"));

    
    return ( 
        <div id="middlegrid">
        <div className = "KPI-boxes">
            <h4>Handling Time </h4> 
            <h2>{currentEmployee.user.performance.HandlingTime}</h2>
            </div>
        <div className = "KPI-boxes">
        <h4>Revenue </h4> 
            <h2>{currentEmployee.user.performance.Revenue}</h2>
            </div>
        <div className = "KPI-boxes">
        <h4>MIA (Days) </h4> 
            <h2>{currentEmployee.user.performance.MIADays}</h2>
            </div>
        <div className = "KPI-boxes">
        <h4>Total Customers </h4> 
            <h2>{currentEmployee.user.performance.TotalCustomers}</h2>
            </div>
        <div className = "KPI-boxes">
        <h4>Propositions </h4> 
            <h2>{currentEmployee.user.performance.Propositions}</h2>
            </div>
        <div className = "KPI-boxes">
        <h4>Airtime </h4> 
            <h2>{currentEmployee.user.performance.Airtime}</h2>
            </div>
        <div className = "KPI-boxes">
        <h4>Devices</h4> 
            <h2>{currentEmployee.user.performance.Devices}</h2>
            </div>
        <div className = "KPI-boxes">
        <h4>Total Sales</h4> 
            <h2>{currentEmployee.user.performance.TotalSales}</h2>
            </div>
    </div>
     );
}
 
export default Performance;
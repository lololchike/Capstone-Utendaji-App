import "../css-files/editEmployee.css"

const EditEmployee = (props) => {

    return ( 
        <div id="editEmployeebdrop">
        <div id="editEmployee">
        <h4><p></p>
            Today's Stats for Elisa Marie
            
            <img src="close.PNG" id="cross" alt="" onClick={()=>props.setShowEditEmployeeModal(false)} />
        </h4>
        <label htmlFor="h">Handling Time</label>
            <input type="text" />
            <label htmlFor="r">Revenue</label>
            <input type="text" id="r"/>
            <label htmlFor="m">MIA</label>
            <input type="text" id="m" />
            <label htmlFor="c">Customers Served</label>
            <input type="text" id="c" />
            <label htmlFor="p">Propositions</label>
            <input type="text" id="p"/>
            <label htmlFor="a">Airtime</label>
            <input type="text" id="a" />
            <label htmlFor="d">Devices</label>
            <input type="text" id="d" />
            <label htmlFor="t">Total Sales</label>
            <input type="text" id="t" />
            <button id="sign-in-button">Save</button>
            
        </div>
        </div>
     );
}
 
export default EditEmployee;
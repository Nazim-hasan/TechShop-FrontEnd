import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import PayBonusEmp from './PayBonusEmp/PayBonusEmp';

const PaySalary = () => {
    // For Employee Show start
    const [employees, setEmployees] = useState([]);
    const [managers, setManagers] = useState([]);
    const [managerDetails, setManagerDetails] = useState({});
    const [refresh, setRefresh] = useState(0);
    const [refreshEmp, setRefreshEmp] = useState(0);
    const [refreshList, setRefreshList] = useState({});
   


   

    useEffect(() => {
        fetch('https://localhost:44352/api/Employee/All')
        .then(res => res.json())
        .then(result => setEmployees(result))
        }, [refreshList])
    // For Employee Show end
    // For Manager Show Start
    

     useEffect(() => {
          fetch('https://localhost:44352/api/Manager/All')
          .then(res => res.json())
          .then(result => setManagers(result))
          }, [refreshList])
    // For Manager Show end

    //Handle PayNow Emp
    const handlePayEmp = (id) =>{ 
        console.log(id);
        setRefreshEmp(id);
    }
    useEffect(() => {
        let objEmp;
        async function fetchMyAPIEmp(){
            const url=`https://localhost:44352/api/Employee/get/${refreshEmp}`;
            console.log(url);
            let response = await fetch(url);
            response = await response.json();
            console.log(response);
            objEmp={
                EId: response.EId,
                EName: response.EName,
                EPassword: response.EPassword,
                EEmail: response.EEmail,
                EAddress: response.EAddress,
                EPhone: response.EPhone,
                EPicture: response.EPicture,
                EBasicSalary: response.EBasicSalary,
                EFastiveBonus: response.EFastiveBonus,
                EPerformBonus: response.EPerformBonus,
                EStatus: "Paid"
            }
            // Update the status
            const urlUpdate=`https://localhost:44352/api/Employee/edit`;
            fetch(urlUpdate, {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(objEmp)
            })
            .then(res => res.json())
            .then(data => {
            alert(data);
            })
            alert("Paid Successfully");
            setRefreshList(objEmp);



            
            //console.log(objEmp);
        }
        fetchMyAPIEmp();
        setRefreshList(objEmp);
        }, [refreshEmp])



const [Exp,setExp]=useState();
useEffect(() => {
    fetch('https://localhost:44352/api/Expense/All')
    .then(res => res.json())
    .then(result => setExp(result))
    }, [Exp])


    
    //Handle PayNow Manager
    const handlePay = (id) =>
    { 
    fetch('https://localhost:44352/api/Expense/All')
    .then(res => res.json())
    .then(result => {
        console.log(id);
        let countSalary=0;
        // console.log(result);
        // console.log(result[0].SalaryExp);
        countSalary = parseInt(result[0].SalaryExp);
        console.log(parseInt(countSalary));
        fetch(`https://localhost:44352/api/Manager/get/${id}`)
        .then(res=>res.json())
        .then(res => {
            console.log(res.MBasicSalary);
            countSalary = countSalary+ parseInt(res.MBasicSalary);
            console.log(countSalary);
            let objExp = {
                ExpID: 1,
                SalaryExp: countSalary,
                UtilityExp: Exp.UtilityExp,
                ElectricityExp: Exp.ElectricityExp,
                RentExp: Exp.RentExp
            }
            
            const urlUpdate=`https://localhost:44352/api/Expense/edit`;
                fetch(urlUpdate, {
                method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(objExp)
                })
                .then(res => res.json())
                .then(data => {
                alert(data);
                })
                alert("Exp Added Successfully");
        })
    })
        
        setRefresh(id);
    }
    useEffect(() => {
        let obj;
        async function fetchMyAPI(){
            
            const url=`https://localhost:44352/api/Manager/get/${refresh}`;
            //console.log(url);
            let response = await fetch(url);
            response = await response.json();
           // console.log(response);
            obj={
                MId: response.MId,
                MName: response.MName,
                MPassword: response.MPassword,
                MEmail: response.MEmail,
                MAddress: response.MAddress,
                MPhone: response.MPhone,
                MPicture: response.MPicture,
                MBasicSalary: response.MBasicSalary,
                MFastiveBonus: response.MFastiveBonus,
                MPerformBonus: response.MPerformBonus,
                MStatus: "Paid"
            }
            //Update the status
            const urlUpdate=`https://localhost:44352/api/Manager/edit`;
            fetch(urlUpdate, {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
            })
            .then(res => res.json())
            .then(data => {
            alert(data);
            })
            alert("Paid Successfully");
            setRefreshList(obj);
            



            
            //console.log(obj);
            setManagerDetails(response);
            //console.log(managerDetails);
        }
        fetchMyAPI();
        setRefreshList(obj);
        }, [refresh])


    const [bonuses, setBonus] = useState([]);
    useEffect(() => {
        fetch('https://localhost:44352/api/Bonus/All')
        .then(res => res.json())
        .then(result => setBonus(result))
        }, [])



    return (
        <div>
            <Row>
                <Col md={12}>
                    {/* ----------------Employee Table Added Here------------------*/}
                    <div className="table-responsive">
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Contact</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Status</th>
                    <th scope="col">Pay</th>
                    <th scope="col">Pay Bonus</th>
                    <th scope="col">Role</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        Object.keys(employees).length !==0 && 
                        employees.map(employee=>
                            <tr key={employee.EId}>
                                <th scope="row">{employee.EId}</th>
                                <td>{employee.EName}</td>
                                <td>{employee.EPhone}</td>
                                <td>{employee.EBasicSalary}</td>
                                <td>{employee.EStatus}</td>
                                
                                <td>
                                {
                                        (employee.EStatus === 'Not Paid') &&
                                        <button onClick={()=>handlePayEmp(employee.EId)} className="btn btn-success p-1 me-2  btn-sm">Pay Now</button>
                                    }</td>
                                
                                

                                <td><PayBonusEmp EmpID={employee.EId}></PayBonusEmp></td>
                                <td>Employee</td>

                                
                            </tr>
                            )
                    }
                    {
                        Object.keys(managers).length !==0 && 
                        managers.map(manager=>
                            <tr key={manager.MId}>
                                <th scope="row">{manager.MId}</th>
                                <td>{manager.MName}</td>
                                <td>{manager.MPhone}</td>
                                <td>{manager.MBasicSalary}</td>
                                <td>{manager.MStatus}</td>
                                <td>
                                {
                                        (manager.MStatus === 'Not Paid') &&
                                        <button onClick={()=>handlePay(manager.MId)} className="btn btn-success p-1 me-2  btn-sm">Pay Now</button>
                                    }
                                    </td>
                                <td>
                                    
                                    <p className="text-danger">Not Applicable</p>
                                    </td>
                                <td>Manager</td>

                                
                            </tr>
                            )
                    }
                </tbody>
            </table>
            </div>
            {/* Employee Table Ends Here  */}
                </Col>
                {/* <Col md={6}></Col> */}
            </Row>
        </div>
    );
};

export default PaySalary;
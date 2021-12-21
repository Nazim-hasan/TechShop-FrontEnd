import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
const PayBonusEmp = (props) => {
    const [isOpenAddEmp, setIsOpenAddEmp] = React.useState(false);
    const { register, handleSubmit, formState: { errors } ,reset} = useForm();
    const [value, setValue] = useState('');
    const handleChange = (e) => {
        setValue(e.target.value);
      };
      

    const [bonuses, setBonus] = useState([]);
    useEffect(() => {
        fetch('https://localhost:44352/api/Bonus/All')
        .then(res => res.json())
        .then(result => setBonus(result))
        }, [isOpenAddEmp])





    const showAddEmpModal = () => {
    reset();
    setIsOpenAddEmp(true);
    fetch(`https://localhost:44352/api/Employee/get/${props.EmpID}`)
.then(res=>res.json())
.then(res => {
    console.log(res);
    //reset();
})
    };
    const hideAddEmpModal = () => {
    setIsOpenAddEmp(false);
    };
    const onSubmit = data =>{
    console.log(data);
    
    alert("Added Done");
    hideAddEmpModal();
    }
    return (
        <div>
            <td><button className="btn btn-primary p-1 me-2  btn-sm" onClick={showAddEmpModal}>Pay Bonus</button></td>
            <>
               <Modal show={isOpenAddEmp} onHide={hideAddEmpModal} >
                  <Modal.Header>
                     <Modal.Title>Give Bonus</Modal.Title>
                     <button onClick={hideAddEmpModal} type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </Modal.Header>
                  <Modal.Body>
                  <div className="d-flex justify-content-center">
                    <div>

                    <select className="form-select" value={value} onChange={handleChange}>
                        {
                            bonuses.map(bonus=>
                                <option value={bonus.BonusAmount}>{bonus.BonusType}</option>
                            )
                        }
                    </select>
                    <br />
                    <button className="btn btn-primary my-2 ms-3">Pay {value}</button>
                    </div>
    </div>
                  </Modal.Body>
                  </Modal>
            </>
        </div>
    );
};

export default PayBonusEmp;
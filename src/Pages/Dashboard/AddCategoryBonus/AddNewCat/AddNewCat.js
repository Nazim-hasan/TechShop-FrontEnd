import React from 'react';
import { Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AddNewCat = () => {
    const [isOpenAddEmp, setIsOpenAddEmp] = React.useState(false);
    const { register, handleSubmit, formState: { errors } ,reset} = useForm();
    

    const showAddEmpModal = () => {
        reset();
        setIsOpenAddEmp(true);
        
        }
        
        const hideAddEmpModal = () => {
        setIsOpenAddEmp(false);
        }


        const onSubmit = data =>{
        console.log(data);
        const url=`https://localhost:44352/api/Bonus/add`;
    fetch(url, {
    method: 'POST',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
    alert("Added");
    })
    alert("Added Done");
    hideAddEmpModal();
        }


    return (
        <div>
            <button className="btn btn-danger mb-3" onClick={showAddEmpModal}>Add New Bonus Category</button>
            <>
               <Modal show={isOpenAddEmp} onHide={hideAddEmpModal} >
                  <Modal.Header>
                     <Modal.Title>Add Bonus Category</Modal.Title>
                     <button onClick={hideAddEmpModal} type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </Modal.Header>
                  <Modal.Body>
                  <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="BonusType" className="form-label mt-2">Bonus Type</label>
                        <input className="form-control" id="BonusType" {...register("BonusType", { required: true })} placeholder="" />

                        <label htmlFor="BonusAmount" className="form-label mt-2">Bonus Amount</label>
                        <input className="form-control" id="BonusAmount" {...register("BonusAmount", { required: true })} placeholder="" />

                        <p className="text-center mt-2">
                           <input className="btn btn-success my-2" type="submit" value="Add New Bonus"/>
                        </p>
                        
                    </form>
                  </Modal.Body>
                  </Modal>
            </>
        </div>
    );
};

export default AddNewCat;
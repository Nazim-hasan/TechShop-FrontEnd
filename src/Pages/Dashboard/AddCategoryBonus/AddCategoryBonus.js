import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './AddCategoryBonus.css';
import AddNewCat from './AddNewCat/AddNewCat';
const AddCategoryBonus = () => {

    const [bonuses, setBonus] = useState([]);
    useEffect(() => {
        fetch('https://localhost:44352/api/Bonus/All')
        .then(res => res.json())
        .then(result => setBonus(result))
        }, [bonuses])
    return (
        <Container className="d-flex align-items-center">
            <div class="container">
    <div class="row">
        <div class="col-md-offset-1 col-md-10"  style={{margin :"40px auto"}}>
            <div class="panel">
                <div class="panel-heading">
                    <div class="row">
                        <div className="col col-sm-3 col-xs-12" >
                            <h5 class="title">Bonus</h5>
                        </div>
                    </div>
                </div>
                <div class="panel-body table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Bonus Type</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                     Object.keys(bonuses).length !== 0 &&
                     bonuses.map(bonus =>
                     <tr key={bonus.BonusId}>
                                <td>{bonus.BonusId}</td>
                                <td>{bonus.BonusType}</td>
                                <td>{bonus.BonusAmount}</td>
                    </tr>
                     )}
                        </tbody>
                        
                    </table>
                    <div className="d-flex justify-content-center">
                        <AddNewCat></AddNewCat>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</div>
</Container>
    );
};

export default AddCategoryBonus;
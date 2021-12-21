import React, { useEffect, useState } from 'react';
import './Expense.css';
const Expense = () => {
    const [expenses,setExpenses]=useState({});
    useEffect(() => {
        fetch('https://localhost:44352/api/Expense/All')
        .then(res => res.json())
        .then(result => setExpenses(result[0]))
        }, [expenses])
    return (
        <div class="col-md-10 ">
    <div class="row ">
        <div class="col-xl-3 col-lg-6">
            <div class="card l-bg-cherry">
                <div class="card-statistic-3 p-4">
                    <div class="card-icon card-icon-large"><i class="fas fa-shopping-cart"></i></div>
                    <div class="mb-4">
                        <h5 class="card-title mb-0">Salary Expense</h5>
                    </div>
                    <div class="row align-items-center mb-2 d-flex">
                        <div class="col-8">
                            <h2 class="d-flex align-items-center mb-0">
                                {expenses.SalaryExp}
                            </h2>
                        </div>
                        <div class="col-4 text-right">
                            <span> <i class="fa fa-arrow-up"></i></span>
                        </div>
                    </div>
                    <div class="progress mt-1 " data-height="8" style={{height: '8px'}}>
                        <div class="progress-bar l-bg-cyan" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"  style={{width: '8px'}}></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-lg-6">
            <div class="card l-bg-blue-dark">
                <div class="card-statistic-3 p-4">
                    <div class="card-icon card-icon-large"><i class="fas fa-users"></i></div>
                    <div class="mb-4">
                        <h5 class="card-title mb-0">Utility Expense</h5>
                    </div>
                    <div class="row align-items-center mb-2 d-flex">
                        <div class="col-8">
                            <h2 class="d-flex align-items-center mb-0">
                            {expenses.UtilityExp}
                            </h2>
                        </div>
                        <div class="col-4 text-right">
                            <span><i class="fa fa-arrow-up"></i></span>
                        </div>
                    </div>
                    <div class="progress mt-1 " data-height="8" style={{height: '8px'}}>
                        <div class="progress-bar l-bg-green" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"   style={{width: '8px'}}></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-lg-6">
            <div class="card l-bg-green-dark">
                <div class="card-statistic-3 p-4">
                    <div class="card-icon card-icon-large"><i class="fas fa-ticket-alt"></i></div>
                    <div class="mb-4">
                        <h5 class="card-title mb-0">Elec Expense</h5>
                    </div>
                    <div class="row align-items-center mb-2 d-flex">
                        <div class="col-8">
                            <h2 class="d-flex align-items-center mb-0">
                            {expenses.ElectricityExp}
                            </h2>
                        </div>
                        <div class="col-4 text-right">
                            <span><i class="fa fa-arrow-up"></i></span>
                        </div>
                    </div>
                    <div class="progress mt-1 " data-height="8" style={{height: '8px'}}>
                        <div class="progress-bar l-bg-orange" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"   style={{width: '8px'}}></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-lg-6">
            <div class="card l-bg-orange-dark">
                <div class="card-statistic-3 p-4">
                    <div class="card-icon card-icon-large"><i class="fas fa-dollar-sign"></i></div>
                    <div class="mb-4">
                        <h5 class="card-title mb-0">Rent Expense</h5>
                    </div>
                    <div class="row align-items-center mb-2 d-flex">
                        <div class="col-8">
                            <h2 class="d-flex align-items-center mb-0">
                            {expenses.RentExp}
                            </h2>
                        </div>
                        <div class="col-4 text-right">
                            <span><i class="fa fa-arrow-up"></i></span>
                        </div>
                    </div>
                    <div class="progress mt-1 " data-height="8" style={{height: '8px'}}>
                        <div class="progress-bar l-bg-cyan" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"   style={{width: '8px'}}></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    );
};

export default Expense;
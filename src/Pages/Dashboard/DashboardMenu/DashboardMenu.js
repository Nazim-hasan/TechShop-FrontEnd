import React from 'react';
import { FaBars, FaUser, FaUserEdit } from "react-icons/fa";
import { Link, Switch, useRouteMatch } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import AddCategoryBonus from '../AddCategoryBonus/AddCategoryBonus';
import ComplainBox from '../ComplainBox/ComplainBox';
import DashboardHome from '../DashboardHome/DashboardHome';
import Expense from '../Expense/Expense';
import ManageEmployee from '../ManageEmployee/ManageEmployee';
import ManageManager from '../ManageManager/ManageManager';
import MyProfile from '../MyProfile/MyProfile';
import PaySalary from '../PaySalary/PaySalary';


const DashboardMenu = () => {
    let { path, url } = useRouteMatch();
    const {user,logOut,admin}=useAuth();
    
    return (


            <div className="container-fluid">
                <div className="row flex-nowrap">
                <div className='dashboard'>
                    <div className="dashboard-nav">
                    <header>
                        
                        <Link to={`${url}`} className="brand-logo"><span>BRAND</span></Link></header>
                         <nav className="dashboard-nav-list">
                             <Link to={`${url}/dashboardHome`} className="dashboard-nav-item"><i><FaUser/></i> Dashboard </Link>
                             <Link to={`${url}/profiles`} className="dashboard-nav-item"><i><FaUser/></i> Profile </Link>
                             <Link to={`${url}/employee`} className="dashboard-nav-item"><i><FaUserEdit/></i>Employee </Link>
                             <Link to={`${url}/managers`} className="dashboard-nav-item"><i><FaUserEdit/></i>Manager </Link>

                             <Link to={`${url}/paySalary`} className="dashboard-nav-item"><i><FaUserEdit/></i>Give Salary </Link>

                             <Link to={`${url}/addBonusCate`} className="dashboard-nav-item"><i><FaUserEdit/></i>Bonus Category</Link>

                             <Link to={`${url}/expense`} className="dashboard-nav-item"><i><FaUserEdit/></i>Expense</Link>

                             
                             <Link to={`${url}/complainBox`} className="dashboard-nav-item"><i><FaUserEdit/></i>Complain Box</Link>



                              <div className="nav-item-divider"></div>
                              <Link to={`${url}`} className="dashboard-nav-item">
                              <i className="fas fa-sign-out-alt"></i> Logout
                              </Link>
                         </nav>
                    </div>

                    <div className='dashboard-app' style={{marginTop :"0px"}}>
                         <header className='dashboard-toolbar'>
                              <a href="#!" className="menu-toggle"><i ><FaBars/></i></a>
                         </header>
                         <div className='dashboard-content'>
                              
                         
                    <div className="col py-3">
                        <Switch>
                            <AdminRoute exact path={`${path}/dashboardHome`}>
                            <DashboardHome></DashboardHome>
                            </AdminRoute>
                            <AdminRoute path={`${path}/profiles`}>
                            <MyProfile></MyProfile>
                            </AdminRoute>
                            <AdminRoute path={`${path}/employee`}>
                            <ManageEmployee></ManageEmployee>
                            </AdminRoute>
                            <AdminRoute path={`${path}/managers`}>
                                <ManageManager></ManageManager>
                            </AdminRoute>
                            <AdminRoute path={`${path}/paySalary`}>
                                <PaySalary></PaySalary>
                            </AdminRoute>
                            <AdminRoute path={`${path}/addBonusCate`}>
                                <AddCategoryBonus></AddCategoryBonus>
                            </AdminRoute>
                            <AdminRoute path={`${path}/expense`}>
                                <Expense></Expense>
                            </AdminRoute>
                            <AdminRoute path={`${path}/complainBox`}>
                                <ComplainBox></ComplainBox>
                            </AdminRoute>

                            {/* Admin Route  */}
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    );
};

export default DashboardMenu;
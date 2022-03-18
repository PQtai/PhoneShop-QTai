import React from 'react';
import clsx from 'clsx';
import { useFormik } from 'formik';
import * as Yup from 'yup';




import style from './Register.module.scss'
const Register = ({
    setOverlay,
    displayFormRegister,
    setDisplayFormRegister,
    setDisplayFormLogin
}) => {


    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            password: "",
            confirmedPassword: ""
        },
        validationSchema: Yup.object({
            name: Yup.string()
            .required("Trường này không được để trống")
            .min(2, "Tên tài khoản phải từ 2 ký tự"),
            email: Yup.string()
            .required("Trường này không được để trống")
            .matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, "Email không hợp lệ"),
            password: Yup.string()
            .required("Trường này không được để trống")
            .matches(
                /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, 
                "Chiều dài tối thiểu 8 ký tự,ít nhất một chữ cái viết hoa,một chữ cái viết thường,một chữ số và một ký tự đặc biệt"
            ),
            confirmedPassword: Yup.string()
            .required("Trường này không được để trống")
            .oneOf([Yup.ref("password"), null], "Mật khẩu không trùng khớp"),
            phone: Yup.string()
            .required("Trường này không được để trống")
            .matches(/(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/, "Số điện thoại không hợp lệ"),
        }),
        onSubmit: (values) => {
            fetchApi(values);
        }
    });
    const fetchApi = (datas) => {
        const axios = require('axios');
        return axios.post('https://lap-center.herokuapp.com/api/register',datas)
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
    }
    return (
        <div className={clsx(style.Register , {
            [style.displayFormRegister] : displayFormRegister
        })} >
            <form onSubmit={formik.handleSubmit} >
                <div className={clsx(style.formControls)} >
                    <h2 className={clsx(style.registerControl)} >Register</h2>
                    <span 
                    onClick={() => {
                        setDisplayFormRegister(false);
                        setDisplayFormLogin(true);
                    }}
                    className={clsx(style.loginControl)} 
                    >Login</span>
                </div>
                <div className={clsx(style.formGroup)} >
                    <label htmlFor="name" >Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        placeholder="Nhập vào tên của bạn"
                    ></input>
                    {formik.errors.name && (
                        <p className={clsx(style.errorMsg)}>{formik.errors.name}</p>
                    )}
                </div>
                <div className={clsx(style.formGroup)} >
                    <label htmlFor="email" >Email</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        placeholder="Nhập vào Email của bạn"
                    ></input>
                    {formik.errors.email && (
                        <p className={clsx(style.errorMsg)}>{formik.errors.email}</p>
                    )}
                </div>
                <div className={clsx(style.formGroup)} >
                    <label htmlFor="phone" >Phone</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        placeholder="Nhập vào số điện thoại của bạn"
                    ></input>
                    {formik.errors.phone && (
                        <p className={clsx(style.errorMsg)}>{formik.errors.phone}</p>
                    )}
                </div>
                <div className={clsx(style.formGroup)} >
                    <label htmlFor="password" >Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        placeholder="Nhập vào mật khẩu của bạn"
                    ></input>
                    {formik.errors.password && (
                        <p className={clsx(style.errorMsg)}>{formik.errors.password}</p>
                    )}
                </div>
                <div className={clsx(style.formGroup)} >
                    <label htmlFor="confirmedPassword" >Confirm password</label>
                    <input
                        type="password"
                        id="confirmedPassword"
                        name="confirmedPassword"
                        value={formik.values.confirmedPassword}
                        onChange={formik.handleChange}
                        placeholder="Xác nhận lại mật khẩu của bạn"
                    ></input>
                    {formik.errors.confirmedPassword && (
                        <p className={clsx(style.errorMsg)}>{formik.errors.confirmedPassword}</p>
                    )}
                </div>
                <div className={clsx(style.btnControl)} >
                    <button
                    type="button"
                    onClick={() => {
                        setOverlay(false);
                        setDisplayFormRegister(false);
                        formik.resetForm();
                    }}
                    className={clsx(style.btn, style.btnCancel)}
                    >Cancel</button>
                    <button 
                    type='submit'
                    className={clsx(style.btn, style.btnContinue)
                    }>Continue</button>
                </div>
            </form>
        </div>
    )
}

export default Register

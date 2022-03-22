import React,{useEffect}  from 'react';
import clsx from 'clsx';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PhoneIphoneTwoToneIcon from '@mui/icons-material/PhoneIphoneTwoTone';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';


import style from './Login.module.scss'
const Login = ({
    overlay,
    setOverlay,
    displayFormLogin,
    setDisplayFormLogin,
    setDisplayFormRegister,
    setIsLoading,
    setOpenNotification,
    setNotificationMessage,
    setMessage,
    setCheckLogin,
}) => {
    useEffect(() => {
        formik.resetForm();
    },[overlay , displayFormLogin])
    const formik = useFormik({
    initialValues: {
        phone: "",
        password: ""
    },
    validationSchema: Yup.object({
        phone: Yup.string()
        .required("Trường này không được để trống")
        .matches(/(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/, "Số điện thoại không hợp lệ"),
        password: Yup.string()
        .required("Trường này không được để trống")
        .matches(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, 
            "Chiều dài tối thiểu 8 ký tự,ít nhất một chữ cái viết hoa,một chữ cái viết thường,một chữ số và một ký tự đặc biệt"
            )
        }),
        onSubmit: (values) => {
            setIsLoading(true);
            fetchApi(values);
        }
    });
    const fetchApi = (datas) => {
        const axios = require('axios');
        return axios.post('https://lap-center.herokuapp.com/api/login',{
            username: datas.phone,  
            password: datas.password,
        })
            .then(function (response) {
                localStorage.setItem("customerName", response.data.userName);
                localStorage.setItem("userId", response.data.userId);
                localStorage.setItem("isAdmin", response.data.isAdmin);
                formik.resetForm();
                setIsLoading(false);
                setOverlay(false);
                displayFormLogin?setDisplayFormLogin(false):setDisplayFormRegister(false);
                setOpenNotification(true);
                setNotificationMessage("success");
                setMessage("Đăng nhập thành công!");
                setCheckLogin(true);
            })
            .catch(function (error) {
                setIsLoading(false);
                setOpenNotification(true);
                setNotificationMessage("error");
                setMessage("Tài khoản hoặc mật khẩu không đúng!")
            });
    }
    return (
        <div className={clsx(style.Login , {
            [style.displayFormLogin] : displayFormLogin
        })} >
            <form onSubmit={formik.handleSubmit} >
                <div className={clsx(style.formControls)} >
                    <h2 className={clsx(style.LoginControl)} >Login</h2>
                    <div className={clsx(style.logo)} >
                        <PhoneIphoneTwoToneIcon className={clsx(style.logoIcon)} />
                        <h2 className={clsx(style.logoTitle)}>Q T S</h2>
                    </div>
                    <span 
                    onClick={() => {
                        setDisplayFormLogin(false);
                        setDisplayFormRegister(true);
                    }}
                    className={clsx(style.registerControl)} 
                    >Register</span>
                </div>
                <div className={clsx(style.formGroup)} >
                    <label htmlFor="phone" >Phone</label>
                    <input
                        type="text"
                        id="phoneLogin"
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
                        id="passwordLogin"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        placeholder="Nhập vào mật khẩu của bạn"
                    ></input>
                    {formik.errors.password && (
                        <p className={clsx(style.errorMsg)}>{formik.errors.password}</p>
                    )}
                </div>
                <div className={clsx(style.btnControl)} >
                    <button
                    type="button"
                    onClick={() => {
                        setOverlay(false);
                        setDisplayFormLogin(false);
                        formik.resetForm();
                    }}
                    className={clsx(style.btn, style.btnCancel)}
                    >Cancel</button>
                    <button 
                    type='submit'
                    className={clsx(style.btn, style.btnLogin)
                    }>Login</button>
                </div>
                <div className={clsx(style.forgotPassword)}>Quên mật khẩu</div>
                <div className={clsx(style.loginWith)}>
                    <p>Login with :</p>
                    <ul className={clsx(style.loginList)}>
                        <li className={clsx(style.loginItem)} >
                            <FacebookIcon/>
                            <span>Facebook</span>
                        </li>
                        <li className={clsx(style.loginItem)} >
                            <GoogleIcon/>
                            <span>Google</span>
                        </li>
                        <li className={clsx(style.loginItem)} >
                            <AppleIcon/>
                            <span>Apple</span>
                        </li>
                    </ul>
                </div>
            </form>
        </div>
    )
}

export default Login;

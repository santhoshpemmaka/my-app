import React, {useState} from "react";
import "./Login.scss";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useData} from "../Context/Context";

const Login = () => {
	const [phonenumber, setPhonenumber] = useState();
	const navigation = useNavigate();
	const {state, dispatch} = useData();
	const btnHandler = async () => {
		try {
			const response = await axios.post(
				"https://staging.fastor.in/v1/pwa/user/register",
				{
					phone: phonenumber,
					dial_code: "+91",
				}
			);
			if (response.status === 200 || response.status === 201) {
				dispatch({type: "SENT_NUMBER", payload: phonenumber});
				navigation("/verification");
			} else {
				throw new Error("Failed to get otp request");
			}
		} catch (error) {
			console.log("Err", error);
		}
	};
	return (
		<div className='login-container'>
			<h1>Login</h1>
			<p>Welcome back!</p>
			<p>Please login to continue</p>

			<div className='btn-compoment'>
				<h3>Mobile Number</h3>
				<input
					type='number'
					value={phonenumber}
					onChange={(e) => setPhonenumber(e.target.value)}
					placeholder='Enter Mobile Number'
				/>
			</div>
			<button onClick={() => btnHandler()}>Request OTP</button>
		</div>
	);
};

export default Login;

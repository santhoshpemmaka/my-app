import React, {useState} from "react";
import {useData} from "../Context/Context";
import {useNavigate} from "react-router-dom";
import "./verification.scss";
import axios from "axios";

const Verification = () => {
	const [otpNumber, setoptNumber] = useState({
		firstNumber: "",
		secondNumber: "",
		thirdNumber: "",
		fourthNumber: "",
		fifthNumber: "",
		sixthNumber: "",
	});
	const navigation = useNavigate();
	const {state, dispatch} = useData();
	const btnHandler = async () => {
		try {
			let response = await axios.post(
				"https://staging.fastor.in/v1/pwa/user/login",
				{
					phone: "9818979450",
					otp: "123456",
					dial_code: "+91",
				}
			);
			console.log(response);
			if (response.status === 200 || response.status === 201) {
				localStorage.setItem("token", response.data.data.token);
				navigation("/products");
			}
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<div className='verification-container'>
			<h2>Verification code</h2>
			<p>
				We have sent the code verification to you Mobile Number +91
				{state.phoneNumber}{" "}
			</p>
			<div className='input-container'>
				<input
					type='number'
					value={otpNumber.firstNumber}
					onChange={(e) =>
						setoptNumber((prev) => ({...prev, firstNumber: e.target.value}))
					}
				/>
				<input
					type='number'
					value={otpNumber.secondNumber}
					onChange={(e) =>
						setoptNumber((prev) => ({...prev, secondNumber: e.target.value}))
					}
				/>
				<input
					type='number'
					value={otpNumber.thirdNumber}
					onChange={(e) =>
						setoptNumber((prev) => ({...prev, thirdNumber: e.target.value}))
					}
				/>
				<input
					type='number'
					value={otpNumber.fourthNumber}
					onChange={(e) =>
						setoptNumber((prev) => ({...prev, fourthNumber: e.target.value}))
					}
				/>
				<input
					type='number'
					value={otpNumber.fifthNumber}
					onChange={(e) =>
						setoptNumber((prev) => ({...prev, fifthNumber: e.target.value}))
					}
				/>
				<input
					type='number'
					value={otpNumber.sixthNumber}
					onChange={(e) =>
						setoptNumber((prev) => ({...prev, sixthNumber: e.target.value}))
					}
				/>
			</div>
			<button onClick={() => btnHandler()}>Continue</button>
		</div>
	);
};

export default Verification;

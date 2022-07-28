import {createContext, useContext, useReducer} from "react";

const DataContext = createContext({});

const initialState = {
	otpNumber: "",
	products: [],
	phoneNumber: "",
};

const reducerFunction = (state = initialState, action) => {
	switch (action.type) {
		case "SENT_NUMBER": {
			return {
				...state,
				phoneNumber: action.payload,
			};
		}
		case "PRODUCTS": {
			console.log("pr", action.payload);
			return {
				...state,
				products: action.payload,
			};
		}
		default: {
			return state;
		}
	}
};

const DataProvider = ({children}) => {
	const [state, dispatch] = useReducer(reducerFunction, initialState);
	return (
		<DataContext.Provider value={{state, dispatch}}>
			{children}
		</DataContext.Provider>
	);
};

const useData = () => useContext(DataContext);

export {DataProvider, useData};

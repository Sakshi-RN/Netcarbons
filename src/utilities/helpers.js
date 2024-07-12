import { Dimensions, ToastAndroid, Alert,Platform } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const { width, height } = Dimensions.get("window");

export const dynamicSize = (val, byWidth = false) => {
	return RFValue(parseFloat(val), byWidth ? width : height)
};

export const dynamicValue = (iosVersion) => {
	if(iosVersion == 16){
	
		let val = 35
		return val;
	}
};

export const followReturn = (data, userId)=>{
	data = data.filter((item) => item == userId);

	if(data ?.length  === 0){

		return false
	}else{

		return true
	}
}

export const blockUserReturn = (data, userId)=>{
	data = data.filter((item) => item == userId);

	if(data ?.length  === 0){
	
		return false
	}else{
	
		return true
	}
}

export const muteUserReturn = (data, userId)=>{
	data = data.filter((item) => item == userId);

	if(data ?.length  === 0){
	
		return false
	}else{
	
		return true
	}
}

export const bookmarkCheckReturn = (data, userId)=>{
	data = data.filter((item) => item == userId);

	if(data ?.length  === 0){

		return false
	}else{
	
		return true
	}
}

export const generateColor = () => {
	let letters = 'BCDEF'.split('');
	let color = '#';
	for (let i = 0; i < 6; i++ ) {
		color += letters[Math.floor(Math.random() * letters.length)];
	}
	return color;
};

export const showErrorMessage = (msg) => {
	if (typeof msg == "string") {
		showAlert("Oops!", msg);
		return;
	}
};
export const showSuccessMessage = (msg) => {
	if (typeof msg == "string") {
		showAlert("Success!", msg);
		return;
	}
};

export const showAlert = (key = "Success", value) => {
	Platform.OS == "ios" ? Alert.alert(key, value) : Toast(value);
};

export const Toast = (message) => {
	ToastAndroid.showWithGravityAndOffset(
		message,
		ToastAndroid.SHORT,
		ToastAndroid.BOTTOM,
		25,
		50
	);
};

export function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export const confirmAlert = (object) => {
	Alert.alert(object?.title, object.message, [
	  {
		text: object.cancel || 'cancel',
		onPress: () => console.log("Cancel Pressed"),
		style: "cancel"
	  },
	  { text: object.ok || 'ok', onPress: object.callBack }
	])
}

export const carbonType = (index)=>{
	if(index == 0){
		return "high";
	}else if(index == 1){
		return "medium"
	}else if(index == 2){
		return "low";
	}
}

export const exactCarbonValue = (index)=>{
	
	if(index == 0){
		return 1.15;
	}else if(index == 1){
		return 1.0
	}else if(index == 2){
		return 0.85;
	}
}



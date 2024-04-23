import { uploadPhoto, createUser } from "./utils.js";

export default async function handleProfileSignup() {
	try {
		const allItems = await Promise.all([uploadPhoto(), createUser()]);
		let result = "";
		for (const item of allItems) {
			if (item.body) result += item.body + " ";
			if (item.firstName) result += item.firstName + " ";
			if (item.lastName) result += item.lastName;
		}
		console.log(result);
	} catch (err) {
		console.log("Signup system offline");
	}
}


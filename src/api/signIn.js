import { getUsersByEmail, createUser } from "./db.js";


async function signInUser(email, password){
    try{
        const users = await getUsersByEmail(email);

        if (users.length === 0) {
            console.log('User not found!');
            return { success: false, message: 'User not found' };
        }

        const user = users[0];
        
        if(user.password === password){
            console.log('User signed in succesfully.');
            return { success: true, user};
        }else{
            console.log('Invalid password!');
            return { success: false, message: 'Invalid password.'};
        }
    } catch(error){
        console.error('Error signing in:', error);
        return { success: false, message: 'Server Error.'};
    }
}

async function signUpUser(userData) {
    try {
        const data = await createUser(userData);
        console.log('User signed up successfully:', data);
        return data;
    } catch (error) {
        console.error('Error during sign-up:', error);
        return null;
    }
}


export{
    signInUser,
    signUpUser,
}






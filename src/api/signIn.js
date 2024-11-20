
async function signInUser(email, password){
    try{
        const encodedMail = encodeURIComponent(email);
        const url = `http://localhost:3000/users?email=${encodedMail}`
        const response = await fetch(url);
        let user = await response.json();
        user = user[0];
        if(user.length === 0){
            console.log('User not found!');
            return { success: false, message: 'User not found'};
        }
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
        const response = await fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            throw new Error('User signup failed');
        }

        const data = await response.json();
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






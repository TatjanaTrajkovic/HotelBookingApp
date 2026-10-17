// Locally the app talks to JSON Server. On GitHub Pages there is no server,
// so rooms and users are loaded from data/data.json and changes are kept in
// the browser's localStorage instead.

const API_URL = 'http://localhost:3000';
const STORAGE_KEY = 'hotelBookingData';
const useJsonServer = ['localhost', '127.0.0.1'].includes(window.location.hostname);

async function loadLocalData(){
    const saved = localStorage.getItem(STORAGE_KEY);
    if(saved){
        return JSON.parse(saved);
    }
    const dataUrl = new URL('../../data/data.json', import.meta.url);
    const response = await fetch(dataUrl);
    const data = await response.json();
    saveLocalData(data);
    return data;
}

function saveLocalData(data){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

async function getRooms(){
    if(useJsonServer){
        const response = await fetch(`${API_URL}/rooms`);
        return response.json();
    }
    const data = await loadLocalData();
    return data.rooms;
}

async function updateRoom(id, changes){
    if(useJsonServer){
        await fetch(`${API_URL}/rooms/${id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(changes)
        });
        return;
    }
    const data = await loadLocalData();
    const room = data.rooms.find(room => room.id === id);
    Object.assign(room, changes);
    saveLocalData(data);
}

async function getUsersByEmail(email){
    if(useJsonServer){
        const response = await fetch(`${API_URL}/users?email=${encodeURIComponent(email)}`);
        return response.json();
    }
    const data = await loadLocalData();
    return data.users.filter(user => user.email === email);
}

async function getUser(id){
    if(useJsonServer){
        const response = await fetch(`${API_URL}/users/${id}`);
        return response.json();
    }
    const data = await loadLocalData();
    return data.users.find(user => user.id === id);
}

async function createUser(userData){
    if(useJsonServer){
        const response = await fetch(`${API_URL}/users`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(userData)
        });
        if(!response.ok){
            throw new Error('User signup failed');
        }
        return response.json();
    }
    const data = await loadLocalData();
    const newUser = { ...userData, id: Date.now().toString() };
    data.users.push(newUser);
    saveLocalData(data);
    return newUser;
}

async function updateUser(id, changes){
    if(useJsonServer){
        await fetch(`${API_URL}/users/${id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(changes)
        });
        return;
    }
    const data = await loadLocalData();
    const user = data.users.find(user => user.id === id);
    Object.assign(user, changes);
    saveLocalData(data);
}

export {
    getRooms,
    updateRoom,
    getUsersByEmail,
    getUser,
    createUser,
    updateUser,
}

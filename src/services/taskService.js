import axios from 'axios';

// const API_URL = 'http://localhost:5000/api/tasks';
//Production_URL
const API_URL = 'https://task-manager-backend-2-n3r9.onrender.com/api/tasks';


export const getTasks = async () => {
    try {
        const response = await axios.get(API_URL);  
        return response.data;
    } catch (error) {
        console.error('Error fetching tasks:', error);
        throw error;
    }
};

export const createTask = async(taskData)=>{
    try {
        const response=await axios.post(API_URL, taskData);
        return response.data;
    }catch (error){
        console.error('Error creating task:', error);
        throw error;
    }
}
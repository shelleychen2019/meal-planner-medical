import axios from 'axios'

const api2 = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertMeal = payload => api2.post(`/meal`, payload)
export const getAllMeals = () => api2.get(`/meals`)
export const updateMealById = (id, payload) => api2.put(`/meal/${id}`, payload)
export const deleteMealById = id => api2.delete(`/meal/${id}`)
export const getMealById = id => api2.get(`/meal/${id}`)
export const getMealsByDiet = cuisine => api2.get(`/mealsearch/${cuisine}`)

const apis = {
    insertMeal,
    getAllMeals,
    updateMealById,
    deleteMealById,
    getMealById,
    getMealsByDiet
}

export default apis
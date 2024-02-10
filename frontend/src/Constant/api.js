import { get, post, put, del } from  '../Helper/axiosSetup';

const api = {
    student: {
        list: () => get(`/student`),
        get: (id) => get(`/student/${id}`),
        delete: (id) => del(`/student/delete/${id}`),
        create: (data) => post(`/student/create`, data),
        update: (data, id) => put(`/student/update/${id}`, data),
    },
}

export default api;
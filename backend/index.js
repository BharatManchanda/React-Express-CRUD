const express = require('express')
const connnect = require('./Util/connnection')
const StudentController = require('./Controllers/StudentController');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

app.get('/student', StudentController.index);
app.get('/student/:id', StudentController.show);
app.post('/student/create', StudentController.create);
app.put(`/student/update/:id`, StudentController.update);
app.delete(`/student/delete/:id`, StudentController.destroy);

app.listen(8000, () => {
    connnect.moongoDB();
    console.log(`Server Run on http://localhost:8000/`);
})
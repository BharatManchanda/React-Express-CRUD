const Student = require('../Models/Student')

async function index(request, response) {
    try {
        let students = await Student.Student.find()
        return response.json(students)
    } catch (error) {
        return response.status(422).json({
            message: error
        })
    }
}

async function create(request, response) {
    try {
        const {name, email, phone, address_line_1, address_line_2, city, state, zip_code} = request.body;
        const data = await Student.Student.create({
            name,
            email,
            phone,
            address_line_1,
            address_line_2,
            city,
            state,
            zip_code
        });
        return response.json(data);
    } catch (error) {
        return response.status(422).json({
            message: error,
        });
    }
}

async function update(request, response) {
    try {
        let {name, email, phone, address_line_1, address_line_2, city, state, zip_code} = request.body;
        let {id} = request.params;

        let data = await Student.Student.findByIdAndUpdate(id, {
            name,
            email,
            phone,
            address_line_1,
            address_line_2,
            city,
            state,
            zip_code,
        });
        return response.json(data);
    } catch (error) {
        return response.status(404).json({
            "message": error,
        });
    }
}

async function destroy(request, response) {
    try {
        const {id} = request.params;
        await Student.Student.findByIdAndDelete(id);
        return  response.json({
            "message": "Delete Successfully",
        });
    } catch (error) {
        return  response.status(422).json({
            "message": error,
        });
    }
}

async function show(request, response) {
    try {
        let {id} = request.params;
        let res = await Student.Student.findById(id);
        return response.json(res);
    } catch (error) {
        return response.status(422).json({});
    }
}

module.exports = {
    index,
    create,
    update,
    destroy,
    show,
};
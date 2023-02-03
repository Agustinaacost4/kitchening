const courses = require('../data/courses.json')
module.exports = {
    listado : (req,res) => {
        return res.render('courses/listado', {
            title: "Lista de cursos",
            courses
        });
    },
   detalleProducto : (req,res) => {
    const { id } = req.params;

    const course = detalleProducto.find(course = course.id === +id);
        return res.render("courses/detalleProducto",{
                title : "Detalle del curso",
                courses
            });
        },
        add : (req,res) => {
            return res.render('courses/productAdd',{
              chefs
            });
          }
}

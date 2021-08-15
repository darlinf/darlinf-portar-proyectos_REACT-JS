# Portal proyectos
This is an application for the management of end-of-degree projects for students. This application has a public part for anyone to access the projects and a private part for their management. The private part has an authentication system with three roles which are administrator, teacher and student.

The public part of the application allows access to anyone who wants to see all student projects and allows downloading the documentation for that project.

Administration role
If you log in as an administrator you can create users of the teacher role and you can also delete users of the teacher role.

Teacher role
If you log in as a teacher you can manage everything related to your students. For example, enabling or disabling your students 'credentials, managing your students' projects and allowing these projects to be visible in the public part of the application.

Student role
If you register as a student, you must wait for your teacher to enable their credentials to be able to log into the application. Once you log in as a student within the application, you can publish your projects for your teacher to evaluate them.

![Portal proyectos homepage image](https://darlinf.github.io/asset/images/portar%20proyecto.png)


## Technology used

Frontend 
  * material-ui
  * axios
  * formik
  * react
  * react-router-dom
  * rxjs
  * yup

Backend
  https://github.com/darlinf/portar-proyectos-api

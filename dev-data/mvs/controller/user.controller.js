export class UserController {
    static  getAllUsers = (req, res,) => {
       res.json({
         message: 'get all users rout'
       });
     };
    static createUser = (req, res) => {
       res.json({
         message: 'get create user rout',
       });
     };
    static getUserByID = (req, res) => {
       res.json({
         message: 'get user by id rout',
       });
     };
     static updateUserID = (req, res) => {
       res.json({
         message: 'get updete user by id rout',
       });
     };
     static deleteUserID = (req, res) => {
       res.json({
         message: 'delete user by id rout',
       });
     };
   }
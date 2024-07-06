import {Router} from "express";
import {
    getUsers,
    login,
    register,
    updateProfile,
    updateStatus,
  } from '../controllers/User.js';

import auth from '../middleware/auth.js';

const userRouter=Router();
userRouter.post('/register',register)
userRouter.post('/login', login);
userRouter.patch('/updateProfile', auth, updateProfile);
userRouter.patch('/updateProfile', auth, updateProfile);



export default userRouter;



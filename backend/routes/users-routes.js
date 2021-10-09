import express from 'express';
import { check } from 'express-validator';
import { createUser, loginUser, uploadImage, getImages } from '../controllers/users-controllers';

const router = express.Router();


router.post('/register',
 [
    check('full_name').isLength({min: 3, max: 50}).withMessage('full name be of 3 characters and above'),
    check('user_email', 'email must be valid').isEmail().withMessage('email exists, please enter a new one'),
    check('user_password').isLength({min: 5}).withMessage('Password must have a minimum length of 5'),
  ],
   createUser);

 router.post('/login', loginUser)

 router.post('/upload-image/:user_id', uploadImage)

 router.get("/profile-image/:user_id", getImages)
 


export default router

  
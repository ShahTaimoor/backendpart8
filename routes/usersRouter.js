const express = require('express')

// Create instance of express router

const userRouter = express.Router()

// ! Getting all users

userRouter.get('/', (req,res)=>{
       res.json({
    status:'Succes',
message:'user fetched'
})

})

// ! Getting a user

userRouter.get('/:id', (req,res)=>{
       res.json({
    status:'Succes',
message:'user fetched'
})

})

// !update user

userRouter.put('/:id', (req,res)=>{
       res.json({
    status:'Succes',
message:'Welcome To'
})

})

// !delete user

userRouter.delete('/:id', (req,res)=>{
       res.json({
    status:'Succes',
message:'User Deleted'
})

})

module.exports = userRouter


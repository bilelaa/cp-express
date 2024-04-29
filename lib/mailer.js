const { text } = require("express")
const nodemailer = require("nodemailer")
module.exports = async function sender(data){
    try {
        require("dotenv").config()
    
        const transporter = nodemailer.createTransport({
            
                host: process.env.SERVER ,
                port: process.env.PORT ,
                auth : {
                    user : process.env.EMAIL,
                    pass :process.env.PASSWORD
                }
            }

        )
        const option = {
            to :data.email,
            subject :data.subject ,
            text :"email to our service"
        }
transporter.sendMail(option,(error,info)=>{
    if (error){
        console.log(error)
    }else{
        console.log('email sent ', info.response);
        return info
    }
})
        
    } catch (error) {
        console.log(error)
        
    }
} 


import jwt from "jsonwebtoken";


const gentoken = (userId,res)=>{
    const token  = jwt.sign({userId},process.env.JWT_SECRECT,{
        expiresIn :'15d'
    });

    res.cookie("jwt",token,{
        maxAge: 15*24*60*60*1000,
        httpOnly: true,
        sameSite: "strict"
    });
}

export default gentoken;
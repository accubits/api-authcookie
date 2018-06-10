
const login = function login(req,res){
  
    if(req.body.username='test'&& req.body.password=='test'){
        console.log('valid login');
        //set the auth cookie 
        res.cookie('userToken',Math.random(),{ maxAge: 900000, httpOnly: true });
    }
   
    res.json({
        status:true,
        message:'login success'
    })
}

const logout = function logout(req,res){
    res.clearCookie("userToken");
    res.json({
        status:true,
        message:'Logout success'
    })
}

const protected = function protected(req,res){

    if(req.cookies.userToken){
        res.json({
            status:true,
            message:'User session valid',
            data:{
                name:'test',id:2
            }
        })
    }else{
        res.status(403).json({
            status:false,
            message:'You must login to access this resource'
        })
    }
}

module.exports={
    login,logout,protected
}
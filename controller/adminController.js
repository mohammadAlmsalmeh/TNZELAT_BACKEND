const fs = require("fs");
//read html files
let indexPage = fs.readFileSync("view/login.html","utf-8");
let homePage = fs.readFileSync("view/home.html","utf-8");
let sidebar = fs.readFileSync("view/sideBar.html","utf-8");
let categ = fs.readFileSync("view/categoryManagement.html","utf-8");
let card = fs.readFileSync("view/cardsManagement.html","utf-8");
//replace tages
homePage = homePage.replace("{%SIDEBAR%}",sidebar);
let categoryPage = homePage.replace("{%CONTENT%}",categ);
let cardsPage = homePage.replace("{%CONTENT%}",card);
//auth
exports.auth = (req,res,next)=>{
    console.log("auth");
    
    next();
};
//index
exports.index = (req,res)=>{
    let output = indexPage.replace("%MESSAGE_%","");
    res.end(output);
}
//check
exports.checkUser = (req,res)=>{
    console.log(req.body);
    let username = req.body.username;
    let password = req.body.password;
    if(username == "" || password == ""){
        let output = indexPage.replace("%MESSAGE_%"
        ,"<div class='alert alert-danger'>you must enter username and password</div>");
        res.end(output);
    }
    else if(username=="admin"&&password=="admin"){
        //load home page
        categoryPage = categoryPage.replace("{%CATEGMSG%}","");
        res.end(categoryPage);
        //be auth
    }
    else{
        let output = indexPage.replace("%MESSAGE_%","<div class='alert alert-danger'>wrong username or password</div>");
        res.end(output);
    }
}
//category
exports.category = (req,res)=>{
    let output = categoryPage.replace("{%CATEGMSG%}","");
    res.end(output);
};
exports.addCategory = (req,res)=>{
    console.log(req.body.categName);
    let output = categoryPage.replace("{%CATEGMSG%}","<div class='alert alert-success'>New categ added</div>");
    res.end(output);
};
exports.updateCategory = (req,res)=>{
    console.log(req.params.editCategName);
    let output = categoryPage.replace("{%CATEGMSG%}","<div class='alert alert-success'>Update success</div>");
    res.end(output);
};
exports.deleteCategory = (req,res)=>{
    
};
//cards
exports.cards = (req,res)=>{
    cardsPage = cardsPage.replace("{%CATEGMSG%}","");
    res.end(cardsPage);
};
exports.addCard = (req,res)=>{
    
};
exports.updateCard = (req,res)=>{
    
};
exports.deleteCard = (req,res)=>{
    
};
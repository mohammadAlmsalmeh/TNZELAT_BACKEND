
exports.getCategory = (req,res)=>{
    res.json({
        status:"success",
        data:["all","clothes","tools"]
    });
};
exports.getCards = (req,res)=>{
    res.json({
        status:"success",
        data:[
            {
                name:"chery",
                category:"cars",
                price:"500",
                image:"assets/images/car3.png",
                detail:"cheap",
                address:"alsabil"
            }
        ]
    });
};

//cards detail --
//name -- category -- price or discount -- image --detail -- address
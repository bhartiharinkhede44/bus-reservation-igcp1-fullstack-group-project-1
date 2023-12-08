import Search from "./../Model/search.js";

const postApiSearch = async (req , res)=>{
    const {to ,from, date } = req.body ;

    const search = new Search({
        to ,
        from,
         date 
    })
    try{
        const saveSearch = await search.save();
    
        res.status(201).json({
            success : true,
            data : saveSearch,
            message : "Search Successfully"
        })
    }catch(err){
        res.status(400).json({
            success : false,
            message : err.message
        })
    }
}

const getSearchApi = async (req , res)=>{
    try{
        const search = await Search.find()

        res.status(201).json({
        success : true,
        data : search ,
        message : "Successfuly fetched all reservation"
    })
    }catch(err){
        res.status(400).json({
            success : false , 
            message : err.message
        })
    }
    
}

const postSearchBuses= async (req, res) => {
    const { user,  to , from, date } = req.body;
    
    //create instance
    const search = new Search ({
        user,
        to ,
        from,
         date 
    })

    try {
        const saveSearch = await search.save();
        res.json({
            success: true,
            data: saveSearch,
            message: " Ticket fetched  successfully"
        });
    }
    catch(e){
        res.json({
            success: false,
            message: e.message,
        });
    }
};

const getSearchBuses=async (req,res)=>{

    const {_id}=req.params;

    const orders =  await Search.find({user:_id}).populate("user");
    orders.forEach((order)=>{
        order.user.password=undefined;
    })

    res.json({
        success: true,
        data: orders,
        message: "Order fetched successfully"
    });
}

export  { postApiSearch , getSearchApi,postSearchBuses,getSearchBuses }
import Blog from "./../Model/Blog.js";

const PostApiV1Blogs = async (req , res)=>{
    const {title ,location, image, description, rating } = req.body ;

    const blogs = new Blog({
        title ,
        location,
        image,
        description,
        rating,
    })
    try{
        const saveBlog = await blogs.save();
    
        res.status(201).json({
            success : true,
            data : saveBlog,
            message : "Blog Added successfully"
        })
    }catch(err){
        res.status(400).json({
            success : false,
            message : err.message
        })
    }
}

const GetApiV1Blogs = async (req , res)=>{
    try{
        const blogs = await Blog.find()

        res.status(201).json({
        success : true,
        data : blogs ,
        message : "Successfuly get all Blogs"
    })
    }catch(err){
        res.status(400).json({
            success : false , 
            message : err.message
        })
    }
    
}

export  { PostApiV1Blogs , GetApiV1Blogs }
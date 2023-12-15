import Search from "./../Model/search.js";
import Review from "./../Model/Review.js"

const postApiSearch = async (req, res) => {
    const {city,cities,pickupdate,} = req.body;
    
    if(!city || !cities || !pickupdate){
        return res.json({
            success:false,
            message:"All fields are required"
        })
    }
    const search = new Search({
        city,
        cities,
        pickupdate,
    })
    try {
        const saveSearch = await search.save();

        res.status(201).json({
            success: true,
            data: saveSearch,
            message: "Search Successfully"
        })
    } catch (err) {
        res.status(400).json({
            success: false,
            message: err.message
        })
    }
}

const getSearchApi = async (req, res) => {
    const allSearches =await Search.find();
    res.status(201).json({
        success: true,
        data: allSearches,
        message: "Successfuly fetched all reservation"
    })
}

const postSearchBuses = async (req, res) => {
    const { user, to, from, date } = req.body;

    //create instance
    const search = new Search({
        user,
        to,
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
    catch (e) {
        res.json({
            success: false,
            message: e.message,
        });
    }
};

const getSearchBuses = async (req, res) => {

    const { _id } = req.params;

    const orders = await Search.find({ user: _id }).populate("user");
    orders.forEach((order) => {
        order.user.password = undefined;
    })

    res.json({
        success: true,
        data: orders,
        message: "Order fetched successfully"
    });
}

const postApiReview = async (req, res) => {
    const {title,name,description,profession,emoji} = req.body;

    const review = new Review({
        title,
        name,
        description,
        profession,
        emoji
    })
    try {
        const saveReview = await review.save();

        res.status(201).json({
            success: true,
            data: saveReview,
            message: "Review added Successfully"
        })
    } catch (err) {
        res.status(400).json({
            success: false,
            message: err.message
        })
    }
}

const getApiReview = async (req, res) => {
    try {
        const search = await Review.find()

        res.status(201).json({
            success: true,
            data: search,
            message: "Successfuly fetched all Reviews."
        })
    } catch (err) {
        res.status(400).json({
            success: false,
            message: err.message
        })
    }
}


export { postApiSearch, getSearchApi, postSearchBuses, getSearchBuses,postApiReview,getApiReview }
exports.getPosts = (req,res,next)=> {
    res.status(200).json({
        posts:[{title: "Keh ke lunga"}]
    });
};

exports.createPosts = (req,res,next)=> {
   const title = req.body.title;
   const content = req.body.content;
   
    res.status(201).json({
        message:"Post created successfully",
        posts:[{title: title, content: content}]
    });
};




const  { Blog }  = require('../models/Blogs')

const homepage =(request,respnose)=>{
    if (request.method === 'GET') {
        Blog.find()
        .then(result=> respnose.render('index',{ result })
        )
        .catch( err =>console.log(err))
    }
}

const addBlog =(request,respnose)=>{
    if (request.method === 'GET') {
        respnose.render('post')
    }

    if (request.method === 'POST'  ){
    const blog = new Blog(request.body)
    blog.save()
        .then( result => respnose.redirect('/'))
        .catch( err => console.log(err))
    }
}

const deletePost =(request,respnose)=>{
    console.log(request.params.id, request.method)
   
    Blog.findByIdAndDelete({_id:request.params.id})
        .then( result => respnose.redirect('/'))
        .catch( err => console.log(err))
    
}
const updateBlog =(request,respnose)=>{
    if (request.method === 'GET') {
        Blog.findById(request.params.id)
        .then( result => {
            console.log(result)
            respnose.render('update',{result})})
        .catch( err => console.log(err))
        
    }

    if ( request.method === 'POST'){
        Blog.findOneAndUpdate(request.params.id)
        .then( result => {
                result.title = request.body.title;
                result.snippet = request.body.snippet;
                result.body = request.body.body;

                result.save()
                    .then( value=>
                        respnose.redirect('/'))
                    .catch ( err=> console.log(err))
            })
        .catch( err => console.log(err))
    }
   
    
}

module.exports={
    homepage,
    addBlog,
    deletePost,
    updateBlog
    
}



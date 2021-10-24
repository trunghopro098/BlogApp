
class NewsController {

        // Get /news
        index(req, res){
            res.render('news')
        }
        show(req,res){

            res.send("xin chao")
        }

}

module.exports = new NewsController;
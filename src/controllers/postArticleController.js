export const postArticle = (req, res) => {
  try {
      const article = {
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
      };
      res.json({
          data : article,
          message : "success"
      })
    } catch (err) {
      console.log(err);
      res.json({
        message: err,
      });
    }
}
/* 
export const postArticle = (req, res) => {
    try {
        const article = {
          title: req.body.title,
          author: req.body.author,
          body: req.body.author,
          image:req.body.image,
          date: req.body.author || Date.now(),
          tags: req.body.tags,
          approved: false
        };
        res.json({
            data : article,
            message : "success"
        })
      } catch (err) {
        console.log(err);
        res.json({
          message: err,
        });
      }
} */
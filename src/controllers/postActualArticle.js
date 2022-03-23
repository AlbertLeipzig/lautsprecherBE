export const postActualArticle = (req, res) => {
  try {
      const article = {
        articleTitle: req.body.articleTitle,
        author: req.body.author,
        body: req.body.body,
        date : Date.now(),
        image: req.body.image,
        tags: req.body.tags
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
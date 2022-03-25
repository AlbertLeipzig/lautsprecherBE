export const postHistoryArticle = (req, res) => {
  try {
      const article = {
        approved: false,
        articleTitle: req.body.articleTitle,
        author: req.body.author,
        body: req.body.body,
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
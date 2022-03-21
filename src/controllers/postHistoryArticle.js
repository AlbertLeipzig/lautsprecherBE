export const postHistoryArticle = (req, res) => {
  try {
      const article = {
        title: req.body.title,
        body: req.body.body,
        tags: req.body.tags,
        author: req.body.author,
        date : Date.now()
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
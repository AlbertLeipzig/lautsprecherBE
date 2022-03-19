export const postConcert = (req, res) => {
  try {
      const concert = {
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
      };
      res.json({
          data : concert,
          message : "success"
      })
    } catch (err) {
      console.log(err);
      res.json({
        message: err,
      });
    }
}
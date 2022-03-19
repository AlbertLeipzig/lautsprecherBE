export const postUser = (req, res) => {
    try {
        const user = {
          userName: req.body.userName,
          email: req.body.email,
          password: req.body.password,
        };
        res.json({
            data : user,
            message : "success"
        })
      } catch (err) {
        console.log(err);
        res.json({
          message: err,
        });
      }
}
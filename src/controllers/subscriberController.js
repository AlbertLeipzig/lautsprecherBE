export const postSubscriber = (req, res) => {
    try {
        const subscriber = {
          fname: req.body.fname,
          lname: req.body.lname,
          email: req.body.email,
          approved: false
        };
        res.json({
            data : subscriber,
            message : "success"
        })
      } catch (err) {
        console.log(err);
        res.json({
          message: err,
        });
      }
  }
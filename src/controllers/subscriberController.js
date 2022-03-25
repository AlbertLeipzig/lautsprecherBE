export const postSubscriber = (req, res) => {
    try {
        const subscriber = {
          fName: req.body.fName,
          lName: req.body.lName,
          mail: req.body.mail,
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
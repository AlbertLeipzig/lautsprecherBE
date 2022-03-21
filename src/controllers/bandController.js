export const postBand = (req, res) => {
    try {
        const band = {
          bandName: req.body.bandName,
          musicians: req.body.musicians,
          style: req.body.style,
          website: req.body.website,
          socialMedia: req.body.socialMedia,
          email: req.body.email,
          image: req.body.image,
          password: req.body.password,
          approved: false
        };
        res.json({
            data : band,
            message : "success"
        })
      } catch (err) {
        console.log(err);
        res.json({
          message: err,
        });
      }
}
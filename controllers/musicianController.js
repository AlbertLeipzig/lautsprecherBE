export const postMusician = (req, res) => {
    try {
        const musician = {
          fname: req.body.fname,
          lname: req.body.lname,
          instrument: req.body.instrument,
          style: req.body.style,
          website: req.body.website,
          email: req.body.email,
          socialMedia: req.body.socialMedia,
          bands: req.body.bands,
          image: req.body.image,
          password: req.body.password,
          approved: false
        };
        res.json({
            data : musician,
            message : "success"
        })
      } catch (err) {
        console.log(err);
        res.json({
          message: err,
        });
      }
}
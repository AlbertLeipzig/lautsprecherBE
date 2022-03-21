export const postTeamMember = (req, res) => {
    try {
        const musician = {
          fname: req.body.fname,
          lname: req.body.lname,
          position: req.body.position,
          website: req.body.website,
          email: req.body.email,
          socialMedia: req.body.socialMedia,
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
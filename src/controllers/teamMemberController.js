export const postTeamMember = (req, res) => {
    try {
        const teamMember = {
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
            data : teamMember,
            message : "success"
        })
      } catch (err) {
        console.log(err);
        res.json({
          message: err,
        });
      }
}
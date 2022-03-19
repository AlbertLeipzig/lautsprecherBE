export const postMusicbusiness = (req, res) => {
    try {
        const musicbusiness = {
          businessName: req.body.businessName,
          fname: req.body.fname,
          lname: req.body.lname,
          address: req.body.address,
          PLZ: req.body.PLZ,
          phone: req.body.phone,
          mail: req.body.mail,
          website: req.body.website,
          socialMedia: req.body.socialMedia,
          presentation: req.body.presentation,
          image: req.body.image,
          password: req.body.password,
          approved: false
        };
        res.json({
            data : musicbusiness,
            message : "success"
        })
      } catch (err) {
        console.log(err);
        res.json({
          message: err,
        });
      }
}
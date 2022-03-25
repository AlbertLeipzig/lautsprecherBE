export const postTeamMember = (req, res) => {
    try {
        const teamMember = {
          approved: false,
          fName: req.body.fName,
          lName: req.body.lName,
          mail: req.body.mail,
          image: req.body.image,
          password: req.body.password,
          phone: req.body.phone,
          role: req.body.role,
          socialMedia: {
            fb: req.body.fb,
            ig: req.body.ig,
            tw: req.body.tw,
            sc: req.body.sc,
            yt: req.body.yt,
            in: req.body.in,
            twitch: req.body.twitch
          },
          website: req.body.website
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
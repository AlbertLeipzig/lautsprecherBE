export const postMusicbusiness = (req, res) => {
    try {
        const musicbusiness = {
          address: {
            number: req.body.number,
            PLZ: req.body.PLZ,
            street: req.body.street
          },
          approved: false,
          image: req.body.image,
          inhaber: req.body.inhaber,
          mail: req.body.mail,
          businessName: req.body.businessName,
          phone: req.body.phone,
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
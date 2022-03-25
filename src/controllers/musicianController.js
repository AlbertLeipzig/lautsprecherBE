export const postMusician = (req, res) => {
    try {
        const musician = {
          approved: false,
          fName: req.body.fName,
          lName: req.body.lName,
          mail: req.body.mail,
          bands: req.body.bands,
          image: req.body.image,
          instruments: req.body.instruments,
          style: req.body.style,
          socialMedia: {
            fb: req.body.fb,
            ig: req.body.ig,
            tw: req.body.tw,
            sc: req.body.sc,
            yt: req.body.yt,
            in: req.body.in,
            twitch: req.body.twitch
          },
          webswite: req.body.website,
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
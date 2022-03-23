export const postMusician = (req, res) => {
    try {
        const musician = {
          approved: false,
          fName: req.body.fName,
          lName: req.body.lName,
          bands: req.body.bands,
          date: Date.now(),
          image: req.body.image,
          instruments: req.body.instruments,
          password: req.body.password,
          style: req.body.style,
          email: req.body.email,
          socialMedia: {
            fb: req.body.fb,
            ig: req.body.ig,
            tw: req.body.tw,
            sc: req.body.sc,
            yt: req.body.yt,
            in: req.body.in,
            twitch: req.body.twitch
          },
          website: req.body.website,
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
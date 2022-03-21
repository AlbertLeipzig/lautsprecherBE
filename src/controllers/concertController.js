export const postConcert = (req, res) => {
  try {
      const concert = {
        title: req.body.title,
        band: req.body.band,
        musician: req.body.musician,
        style: req.body.style,
        place: req.body.place,
        time: req.body.time,
        duration: req.body.duration,
        cost: req.body.cost,
        tickets: req.body.tickets,
        image: req.body.image,
        approved: false
      };
      res.json({
          data : concert,
          message : "success"
      })
    } catch (err) {
      console.log(err);
      res.json({
        message: err,
      });
    }
}
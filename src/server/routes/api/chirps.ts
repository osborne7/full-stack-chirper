import * as express from 'express';
import * as Chirps from '../../utilities/chirpstore';
let router = express.Router();

router.get('/:id?', (req, res, next) => {
    let id = req.params.id;
    if(id) {
        res.send(Chirps.GetChirp(id));

    } else {
        res.send(Chirps.GetChirps());

    }
});

router.post('/', (req, res, next) => {
    Chirps.CreateChirp((req.body));
    res.send(Chirps.GetChirps()); //remove, just for dev
    res.sendStatus(200);
});

router.put('/:id', (req, res) => {
    let id = req.params.id;
    Chirps.UpdateChirp(id, req.body);
    res.send(Chirps.GetChirps());
    res.sendStatus(200);
});

router.delete('/:id', (req, res) => {
    let id = req.params.id;
    Chirps.DeleteChirp(id);
    res.send(Chirps.GetChirps());
    res.sendStatus(200);
});

export default router;
// module.exports = router;
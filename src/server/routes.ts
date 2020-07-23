import * as express from 'express';
import db from './db'
const router = express.Router();

router.get('api/chirps/:id?', async (req, res) => {
    let id = req.params.id;
    if(id) {
        try {
            res.json(await db.Chirps.one(id))[0];
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    } else {
        try {
            res.json(await db.Chirps.all());
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }

    }
});

router.post('/api/chirps', async (req, res) => {
    try {
        let newChirp = await db.Chirps.createChirp(req.body.userid, req.body.text);
        res.json(newChirp);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.put('/api/chirps/:id', async (req, res) => {
    try {
        res.json(await db.Chirps.updateChirp(req.body.text, req.params.id));
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

router.delete('/api/chirps/:id', async (req, res) => {
    try {
        res.json(await db.Chirps.deleteChirp(req.params.id));
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

export default router;
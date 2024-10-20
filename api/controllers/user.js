import { db } from "../db.js";



export const getUsers = (_, res) => {
    const q = "SELECT * FROM usuarios";
    db.query(q, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        } else {
            return res.status(200).json(result);
        }
    });
}
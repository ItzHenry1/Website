import express, { Request, Response } from 'express';
import Forum from '../models/forum';

const router = express.Router();

router.get('/forums', async (req: Request, res: Response) => {
    try {
      const forums = await Forum.find(); // Fetch todo bro
  
       return res.status(201).json(forums); // Retornamos un JSON
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Could not fetch forums' });
    }
  });
  
  export default router;
import express, { Request, Response } from 'express';
import Forum from '../models/forum';

const router = express.Router();

// Create a new forum
router.post('/create-forum', async (req: Request, res: Response) => {
  try {
    const { title, description } = req.body;

    // Crear documento
    const forum = new Forum({ title, description });

    await forum.save();

    return res.status(201).json(forum);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Could not create forum' });
  }
});

export default router;

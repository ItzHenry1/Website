import mongoose, { Document, Schema } from 'mongoose';

interface IForum extends Document {
  title: string;
  description: string;

}

const ForumSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const Forum = mongoose.model<IForum>('Forum', ForumSchema);

export default Forum;

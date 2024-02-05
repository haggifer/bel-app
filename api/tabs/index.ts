import { VercelRequest, VercelResponse } from '@vercel/node';
import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.REACT_APP_MONGODB_URI;

export default async (req: VercelRequest, res: VercelResponse) => {
  if (!MONGODB_URI) {
    throw new Error('REACT_APP_MONGODB_URI env variable is not defined');
  }

  try {
    const client = await MongoClient.connect(MONGODB_URI);
    const db = client.db();

    const tabsCollection = db.collection('tabs');
    const tabs = await tabsCollection.find({}).toArray();

    res.status(200).json(tabs);

    await client.close();
  } catch (error) {
    console.error('Error connecting to the database or querying data:', error);
    res.status(500).send('Internal Server Error');
  }
};

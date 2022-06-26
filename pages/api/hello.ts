// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next';

type Data = {
	name: string;
};

export default function handler(
	request: NextApiRequest,
	result: NextApiResponse<Data>,
) {
	result.status(200).json({name: 'Kyle'});
}

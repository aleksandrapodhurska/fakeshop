import React, {useState, useEffect} from 'react';

const useFetch = (url) => {
	const [data, setData] = useState([]);
	const [error, setError] = useState(null);
	const [isPending, setIsPending] = useState(true);

	useEffect(() => {
		setIsPending(true)
		fetch(url)
		.then(res => {
			if (!res.ok) {
				throw Error('Could not get data...')
			}
			return res.json()
		})
		.then(data => {
			setData(data)
			setError(null)
			setIsPending(false)
		})
		.catch(err => {
			setIsPending(false)
			setError(err.message)
		})
	}, [url])
	return {data, error, isPending}
}

export default useFetch;
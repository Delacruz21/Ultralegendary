export function createComment({ name, comment }) {
  return fetch('http://ec2-54-175-194-217.compute-1.amazonaws.com:3000/api/addcomment', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      comment,
    }),
  }).then(response => response.json());
}

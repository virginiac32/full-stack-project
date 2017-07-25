export const createVote = (vote) => (
  $.ajax({
    method: 'POST',
    url: 'api/votes/',
    dataType: 'json',
    data: vote
  })
);

export const deleteVote = (vote) => (
  $.ajax({
    method: 'DELETE',
    url: `api/votes/${vote.id}`
  })
);

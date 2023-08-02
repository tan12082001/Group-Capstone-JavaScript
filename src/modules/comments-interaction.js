const appId = 'yVAEqw33gzsdx8sGwaR1';
const addComment = async (id, user, comment) => {
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
        body: JSON.stringify({
          item_id: id,
          username: user,
          comment: comment
        }),
    })
    const data = await response.text();
    return data.result;
}

const getComments = async (id) => {
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments?item_id=${id}`,);
    const data = await response.json();
    return data;
    
}

export {addComment, getComments};
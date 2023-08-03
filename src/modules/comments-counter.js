const countComments = () => {
  let comments = document.querySelectorAll('.each-comment');
  return comments.length;
}

export default countComments;
import { getComments } from './comments-interaction.js';
import countComments from './comments-counter.js';

const updateComments = async (id, commentsdisplay) => {
  const comments = await getComments(id);
  if (comments.length > 0) {
    commentsdisplay.innerHTML = '';
    comments.forEach((c) => {
      commentsdisplay.innerHTML += `
                <li class='each-comment'>
                    <p class='user-name'><ion-icon class='person' name="person-circle-outline"></ion-icon>${c.username}</p>
                    <div class = 'comment-date'>
                      <p class='user-comment'>${c.comment}</p>
                      <p class='creation-date'>${c.creation_date}</p>
                    </div>
                </li>
            `;
    });
  } else {
    commentsdisplay.innerHTML = 'No comments yet!';
  }
  const cc = document.querySelector('.comments-count');
  const updatedCommentCount = countComments();
  cc.textContent = updatedCommentCount;
};

export default updateComments;
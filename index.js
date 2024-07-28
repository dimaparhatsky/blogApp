const posts = [];

const postTitleInputNode = document.querySelector('.js-newpost__add-title');
const postTextInputNode = document.querySelector('.js-newpost__add-text');
const newPostBtnNode = document.querySelector('.js-newpost__add-post-btn');
const postsNode = document.querySelector('.js-posts');
const errorTextNode = document.querySelector('.js-error-decorator');

newPostBtnNode.addEventListener('click', function() {
    const postFromUser = getPostFromUser();

    addPost(postFromUser);

    renderPosts();

    postTitleInputNode.innerText = ' ';
    postTextInputNode.innerText = ' ';
})

function getPostFromUser () {
    const title = postTitleInputNode.value;
    const text = postTextInputNode.value;

    return {
        title: title,
        text: text,
    };
}

function addPost({ title, text }) {
    const currentDate = new Date();
    const date = `${currentDate.getDate()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}`
    posts.push({
        title: title,
        text: text,
        date: date,
    });
}

function getPosts() {
    return posts;
}

function renderPosts() {
    const posts = getPosts();

    let postsHTML = '';
    
    posts.forEach(post => {
        postsHTML += `
            <div class='posts'>
                <p class='post__date'>${post.date}</p>
                <h2 class='post__title'>${post.title}</h2>
                <p class='post__text'>${post.text}</p>
            </div>
        `;
    });

    postsNode.innerHTML = postsHTML;
}

function resetForm() {
    let addTitleEmpty = '';
    let addTextEmpty = '';

    addTitleEmpty += ` `;
    addTextEmpty += ` `;

    postTitleInputNode.innerHTML = addTitleEmpty;
    postTextInputNode.innerHTML = addTextEmpty;
}

postTitleInputNode.addEventListener('input', function() {
    let maxLength = 100;
    if(this.value.length > maxLength) {
      this.value = this.value.substring(0, maxLength);
    };

    if(this.value.length == 100) {
        errorTextNode.innerText = 'Заголовок может иметь не более 100 символов';
    } else {
        errorTextNode.innerText = '';
    }
});

postTextInputNode.addEventListener('input', function() {
    var maxLength = 200;
    if(this.value.length > maxLength) {
      this.value = this.value.substring(0, maxLength);
    };

    if(this.value.length == 200) {
        errorTextNode.innerText = 'Пост может иметь не более 200 символов';
    } else {
        errorTextNode.innerText = '';
    }
});

postTextInputNode.addEventListener('input', function() {
    let minLenghth = 0;
    if(this.value.length > minLenghth && postTitleInputNode.value.length > minLenghth) {
        newPostBtnNode.removeAttribute('disabled');
    };
})

postTitleInputNode.addEventListener('input', function() {
    let minLenghth = 0;
    if(this.value.length > minLenghth && postTextInputNode.value.length > minLenghth) {
        newPostBtnNode.removeAttribute('disabled');
    };
})


console.log(date.getDate())
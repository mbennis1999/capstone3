"use strict";

// Function to handle the creation of a new post
function createPost(postText) {
    const token = getLoginData().token;
    const postData = { text: postText };

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(postData)
    };

    return fetch(apiBaseURL + `/api/posts`, options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(newPost => {
            // Handle successful creation of the post
            console.log('Post created successfully:', newPost);
            window.location.assign("posts.html"); // Redirect to the posts page
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

// Ensure the DOM is fully loaded before adding event listeners
document.addEventListener("DOMContentLoaded", function () {
    const createPostForm = document.getElementById("createPostForm");

    createPostForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const postText = document.getElementById("postText").value;
        if (postText) {
            createPost(postText);
        }
    });
});

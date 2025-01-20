const posts = [
  {
    id: 1,
    title: "Post One",
    body: "This is my first post in the database.",
  },
  {
    id: 2,
    title: "Post Two",
    body: "This is my second post in the database.",
  },
];

const getPosts = () => posts;

// nodejs_traversy_media/postController.js
// module.exports = {
//   getPosts,
// };

export const getPostsLength = () => posts.length;

export default getPosts;

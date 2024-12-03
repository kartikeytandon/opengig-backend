# Nested Post API Documentation
## Base URL: https://opengig-backend.onrender.com/api

1. Create Post
```Endpoint: POST /posts
  Description: Create a new post.
  Request Body:
  json
  Copy code
  {
    "content": "This is a new post!"
  }
  Response:
  json
  Copy code
  {
    "_id": "postId123",
    "content": "This is a new post!",
    "likes": 0,
    "comments": [],
    "createdAt": "2024-12-03T10:00:00.000Z",
    "updatedAt": "2024-12-03T10:00:00.000Z"
  }```

2. Fetch All Posts
```Endpoint: GET /posts
  Description: Fetch all posts.
  Response:
  json
  Copy code
  [
    {
      "_id": "postId123",
      "content": "This is a new post!",
      "likes": 0,
      "comments": [],
      "createdAt": "2024-12-03T10:00:00.000Z",
      "updatedAt": "2024-12-03T10:00:00.000Z"
    },
    ...
  ]

3. Fetch Comments for a Post
```Endpoint: GET /posts/{postId}/comments
    Description: Fetch comments for a specific post.
    Path Parameter:
    postId: The ID of the post whose comments you want to fetch.
    Response:
    json
    Copy code
    [
      {
        "_id": "commentId123",
        "content": "This is a comment.",
        "createdAt": "2024-12-03T10:10:00.000Z",
        "updatedAt": "2024-12-03T10:10:00.000Z"
      },
      ...
    ]

4. Add Comment to a Post
```Endpoint: POST /posts/{postId}/comments
    Description: Add a new comment to a post.
    Request Body:
    json
    Copy code
    {
      "content": "This is a comment."
    }
    Response:
    json
    Copy code
    {
      "_id": "commentId123",
      "content": "This is a comment.",
      "createdAt": "2024-12-03T10:10:00.000Z",
      "updatedAt": "2024-12-03T10:10:00.000Z"
    }

5. Like/Dislike Post
```Endpoint: POST /posts/{postId}/like-dislike
    Description: Like or dislike a post.
    Request Body:
    json
    Copy code
    {
      "action": "like" // or "dislike"
    }
    Response:
    json
    Copy code
    {
      "_id": "postId123",
      "content": "This is a new post!",
      "likes": 1, // updated likes count
      "comments": [],
      "createdAt": "2024-12-03T10:00:00.000Z",
      "updatedAt": "2024-12-03T10:10:00.000Z"
    }

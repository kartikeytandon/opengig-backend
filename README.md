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
  }

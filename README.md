# Postlify Server

REST API for Postlify — a minimal post-sharing platform.

## Tech Stack

- Node.js
- Express
- MongoDB & Mongoose
- ImageKit (image upload)
- Multer
- Dotenv

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB Atlas account
- ImageKit account

### Installation

```bash
git clone https://github.com/SyntaxAdil/Postlify-server
cd Postlify-server
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```env
MONGODB_URI=your_mongodb_atlas_connection_string
IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_imagekit_id
```

### Run Locally

```bash
node server.js
```

Server runs on `http://localhost:3000`

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/create-post` | Create a new post with image |
| GET | `/posts` | Get all posts |

### POST `/create-post`

**Body** (form-data):

| Key | Type | Required |
|-----|------|----------|
| image | File | Yes |
| caption | Text | No |

**Response:**

```json
{
  "message": "Successfully posted",
  "data": {
    "_id": "...",
    "image": "https://ik.imagekit.io/...",
    "caption": "Abdur Rahman Adil"
  }
}
```

## Deployment

Deployed on **Render**.

Set all environment variables in Render dashboard before deploying.

---

> My first fullstack project — built while learning the MERN stack.
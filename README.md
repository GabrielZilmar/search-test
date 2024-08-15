# Cialdnb App

Welcome to the Cialdnb monorepo. This application is designed to use the DuckDuckGo API and save your search history.

## Technologies Used 💻

### General

- **turbo-repo**: A high-performance build system for JavaScript and TypeScript monorepos, optimizing the build and development workflow.

### Server

- **Nest.js**: A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.

### Client

- **Next.js**: A React framework for building fast, server-rendered web applications with minimal configuration.
- **react-query**: A library for managing server state in React applications, providing tools for fetching, caching, and updating data.
- **zustand**: A small, fast state-management library for React, offering a simple and flexible API for managing global state.

### UI

- **Tailwind**: A utility-first CSS framework for rapidly building custom user interfaces with pre-defined, low-level utility classes.
- **Shadcn**: A collection of accessible and customizable UI components for building modern web applications with React and Tailwind CSS.

## Installation 📦

1. **Clone the repository:**

```bash
git clone git@github.com:GabrielZilmar/cialdnb.git
  or
git clone https://github.com/GabrielZilmar/cialdnb.git
```

**Install dependencies:**

```bash
cd cialdnb
npm install
```

**Set up environment variables for server: 🤫**

Create a .env file in the root of the server dir **(apps/server)** and define the following variables:

```config
PORT=your_server_port

DUCK_DUCK_GO_API_URL=duck_duck_go_api_url
```

**Set up environment variables for client: 🤫**

Check the .env file in the root of the client dir **(apps/client)** and verify if the variable `NEXT_PUBLIC_BASE_API_URL` is correct to your server.

## Usage 🔄

In the root dir, run:

```bash
npm run dev
```

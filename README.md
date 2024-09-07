# Spotify

## Prerequisites

Before you begin, ensure that you have the following installed on your system:

- **Node.js** (version 12 or higher)
- **npm** (Node Package Manager) or **yarn**

## Installation

1. **Clone the repository** to your local machine using the following command:

    ```bash
    git clone [repository-url](https://github.com/sanskriti0606/Spotify06)
    ```

3. **Install the dependencies** by running either of the following commands:

    - Using npm:
    
      ```bash
      npm install
      ```

    - Using yarn:
    
      ```bash
      yarn install
      ```

## Configuration

To use the Spotify API, you'll need an API key. Follow these steps to get and configure your API key:

1. Sign up and log in at [RapidAPI](https://rapidapi.com/Glavier/api/spotify23).
2. After signing in, note down your API key.
3.In my case my api key from my account are given below :-
X-RapidAPI-Key = '73bc937552msh27eaf79d281b2bbp1e52afjsn9a548c143686'
X-RapidAPI-Host= spotify23.p.rapidapi.com

    export { RAPIDAPI_KEY, RAPIDAPI_HOST };
    ```

    Replace `'73bc937552msh27eaf79d281b2bbp1e52afjsn9a548c143686'` with your actual API key.

## Running the Application

To start the development server, run the following command:

- Using npm:

  ```bash
  npm run dev

This will start the Next.js development server and automatically open the application in your default browser.
Or manually open the site with <http://localhost:3000/>

Deployment
Deploy your Next.js music player software to your preferred hosting platform or server following the appropriate deployment process for Next.js applications.

Make sure to set the necessary environment variables in your deployment environment to match the configurations mentioned in the .env file.

My Deployment Link: https://spotify06.vercel.app/

![image](https://github.com/user-attachments/assets/9cbf8187-a41a-4622-b64d-7a6ddfccba9d)




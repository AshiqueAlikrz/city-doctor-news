- News App – React + RTK Query

  The News Web Application built with React 18, TypeScript, Redux Toolkit, and RTK Query, featuring Dark/Light theme, English/Arabic language toggle, and a clean, responsive UI styled with Tailwind CSS.

1️⃣ Fetch News with RTK Query

   - Fetches posts from JSONPlaceholder API

   - Uses /posts to simulate news articles

   - Uses /users to simulate authors

   - Combines posts and users using RTK Query

   - Automatic caching, loading, and error handling

2️⃣ Theme Support (Dark / Light)

   - Toggle between Dark and Light mode

   - Theme state managed using Redux Toolkit slice

  - Used localStorage for persisting the theme, langauge

  - Smooth animated transitions

  - Styled using Tailwind CSS

3️⃣ Language Toggle (English / Arabic)

   - Toggle between EN / AR

   - UI labels translated: News, Author, Read More

  - Language preference persisted

  - RTL support ready for Arabic

4️⃣ News List Page

  - Displays list of news articles: Title, Description, Author name, Thumbnail image

  - Skeleton loader while fetching data
  
  - Fallback image when thumbnail fails

  - Responsive newspaper-style layout

5️⃣ Post Details Page

  - Dedicated Post View Page

  - Shows full article content

  - Displays author information

  - Navigation handled with React Router

  - Animated transitions using Framer Motion

🛠 Tech Stack

 - React 18+

 - TypeScript

 - Redux Toolkit

 - RTK Query

 - React Router DOM

 - Tailwind CSS

 - Framer Motion

 - Radix UI

 - Lucide Icons

1️⃣ Clone the Repository

    git clone https://github.com/your-username/news-app.git

2️⃣ Install Dependencies

    npm i

3️⃣ Run the app

    npm run dev



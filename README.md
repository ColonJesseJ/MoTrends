## A

MoTrends is a product that AI-generates, depending on inputs, current trends or even predict them. So it is outputted to the user which could then can be saved into the database to see previous and all generated trends. It generates these trends thru difference sources such as Google Trends, Tiktok, Facebook and LinkedIn, and then catered through inputted categories. Once generated, it gives 3 trends (current or predicted), gives a calculated engagement score, as well as some suggest actions you can take to take advantage.

## B

Clone the repo:

```bash
git clone git@github.com:ColonJesseJ/MoTrends.git
```

Install dependencies:

```bash
npm install
```

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.A

go to /moTrends (no need for main site or /)

## C

Layout
- MoFlo Cloud header
    - sticky
    - exact layout
    - some navigation
- MoFlo Cloud sidebar
    - Collapsible navigation (hover to expand)
    - Active page highlighting
    - Organized by section:
    - Smooth animations


Dashboard (/motrends/)
- Title card
- Buttons to instantly start
- Cards using json information
    - such as # of trends generated, and most recent information

Create (/motrends/create)
- Visual bar, a perfect copy of MoSocial's create
- Choose industry through a visual card interface (to cater towards industry of choice)
- Select data sources with multi select (which sources to generate trends through)
- Choose details (to add more context to your generation)
    - Dynamic dropdown component for input
    - Text input
- All selections are dynamically being added to json (using context) for eventual generation and saved to database 
- Trend Preview which dynamically appears as inputs are being enterd, as well formatted for mobile and fullscreen
- Generation button, which would generate trends, engagement score, & actions based on inputs
- Save button which would then save json to txt file using POST
- Lots of instances of UX design with hover and selected


View (/motrends/view)
- Visual data being display that was saved from /create
- Uses GET to get data from txt file
- Button to choose between list or grid
- List for quick view of trends
- Grid displays full view of most information
- Delete button which deletes its it from txt file using POST

## D

Assumptions
- AI is simulated with placeholder information
- There is placeholder data

Limitations
- Client-side
- Local storage
- Only create page adjusted for mobile
- Unfinished edit button

# Music Catalog

A responsive single-page application for browsing a curated collection of music albums. Search across albums, artists and individual songs, narrow the results by genre, explore each artist's discography, and keep a list of favorites that survives page reloads.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7-CA4245?logo=reactrouter&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![CSS](https://img.shields.io/badge/CSS-Grid_%26_Flexbox-1572B6?logo=css&logoColor=white)

## Features

- **Unified search** – a single input matches album titles, artist names and song titles as you type.
- **Genre filter** – the genre list is generated from the data, and it combines with the active search.
- **Sorting** – order the results by release year or alphabetically by title.
- **Favorites** – mark albums with a star; the selection is saved in `localStorage` and restored on the next visit.
- **Album pages** – cover art, album details, the full tracklist and an automatically calculated total running time.
- **Artist pages** – every album by an artist, in chronological order.
- **Graceful fallbacks** – dedicated states for empty search results, unknown albums and unknown routes.
- **Responsive layout** – a mobile-first design that expands into a multi-column grid on larger screens.

The catalog contains **25 albums**, **15 artists**, **14 genres** and **125 songs**.

## Tech Stack

| Area | Technology |
| --- | --- |
| UI | React 19 (function components and hooks) |
| Routing | React Router 7 |
| Styling | CSS with Grid, Flexbox and BEM-style class names |
| Persistence | Browser `localStorage` |
| Data | Local JSON file |
| Tooling | Create React App |

## Getting Started

You need [Node.js](https://nodejs.org/) with npm installed.

```bash
git clone https://github.com/adelhokulic/music-catalog.git
cd music-catalog
npm install
npm start
```

The app runs at [http://localhost:3000](http://localhost:3000).

To create an optimized production build in the `build` folder:

```bash
npm run build
```

## Routes

| Path | Page |
| --- | --- |
| `/` | Catalog with search, genre filter and sorting |
| `/album/:id` | Album details and tracklist |
| `/artist/:name` | All albums by one artist |
| `*` | "Page not found" screen |

## Project Structure

```text
src/
├── components/
│   ├── AlbumCard.js      # Single album with a favorite toggle
│   ├── AlbumList.js      # Album grid and empty state
│   ├── GenreFilter.js    # Genre dropdown
│   ├── Search.js         # Search input
│   └── Sort.js           # Sort dropdown
├── pages/
│   ├── Home.js           # Catalog, filtering and sorting logic
│   ├── AlbumPage.js      # Album details and running time
│   ├── ArtistPage.js     # Artist discography
│   └── Others.js         # Page not found
├── albums.json           # Catalog data
├── App.js                # Routes and favorites state
└── App.css               # Application styles
```

## Implementation Notes

- **Shared favorites state** – favorites live in `App` and are passed down to the catalog and artist pages, so both always show the same selection. A `useEffect` writes every change to `localStorage`.
- **Combined filtering** – search and genre go through one filter function, so each change takes the other active criterion into account.
- **Non-mutating sort** – sorting works on a copy of the filtered list, which leaves the original order available for the default view.
- **Calculated running time** – track durations are stored as `mm:ss` strings, converted to seconds, summed and formatted back for display.

## Author

**Adel Hokulic** – [GitHub](https://github.com/adelhokulic)

# Demo image gallery using [`react-image-gallery`](https://github.com/xiaolin/react-image-gallery)

[![Edit in CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/github/stavaughan/rgm-react-image-gallery/main)

## Introduction

Welcome to dam-demo-gallery! This is a demo app showcasing an image gallery using `react-image-gallery`. The primary goal is to demonstrate how effortlessly you can consume image data from the 'Lineups API' and represent a commercial user's personal image gallery.

## Getting Started

### Prerequisites

- [x] Node.js and yarn installed.
- [x] Git installed (Optional but recommended)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/stavaughan/rgm-react-image-gallery.git
    ```

2. Navigate to the project directory:

    ```bash
    cd rgm-react-image-gallery
    ```

3. Install the required dependencies:

    ```bash
    yarn install
    ```

### Customize your App

1. Change `.env.sample` to `.env` and add your own `VITE_API_URI` link

2. Format your api image data with the following properties:

    ```ts
    export interface Image {
        id: string;
        src: string;
        srcset: string;
        alt?: string;
        thumbnail?: string;
    }
    ```

### Running the App

1. Start the development server:

    ```bash
    yarn dev
    ```

2. Open your browser and go to [http://localhost:3000](http://localhost:3000) (or the port displayed in your terminal).

### To build the project for production

```bash
yarn build
```

### To preview the production build

```bash
yarn preview
```

## Customizing the Gallery with `react-image-gallery` Props

**`react-image-gallery`** provides various props that allow you to customize your gallery. For an overview of all required and optional properties see [https://github.com/xiaolin/react-image-gallery#readme](https://github.com/xiaolin/react-image-gallery#readme).

## Resources

- [CodeSandbox — Docs](https://codesandbox.io/docs/learn)
- [React Image Gallery](https://github.com/xiaolin/react-image-gallery)
- [Vite — GitHub](https://github.com/vitejs/vite)
- [Vite — Docs](https://vitejs.dev/guide/)

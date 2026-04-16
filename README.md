# Next.js Mini Kanban Board 

## Deployed Link

https://kanban-bored-by-om.vercel.app/

A professional Kanban board application designed to manage tasks through a streamlined workflow. This project is built with Next.js (App Router), focusing on clean code, performance, and a robust user experience.

## Objective

The primary objective of this application is to provide a Trello-like interface where users can manage task cards across different stages of a workflow, specifically: Pending, In Progress, and Completed.

## Features

### Core Functionality
- Create Card: Add new tasks with a title and description, which automatically appear in the Pending column.
- View Board: A three-column layout (Pending, In Progress, Completed) to track task status.
- Move Cards: Functionality to transition cards between workflow stages.
- Edit Card: Inline editing for card titles and descriptions.
- Delete Card: Remove cards with a confirmation step to ensure data safety.

### Bonus Features Implemented
- Drag and Drop: Native HTML5 Drag and Drop API integration for intuitive card movement.
- Data Persistence: Automatic state preservation using browser localStorage.
- Optimistic UI: Immediate interface updates for a zero-latency user experience.
- Search and Filter: Real-time filtering to locate specific tasks by title or content.

## Tech Stack

- Framework: Next.js (App Router) 
- Library: React (Functional Components) 
- Styling: Tailwind CSS 
- Language: TypeScript 
- State Management: React Hooks (useState, useEffect) 

## Project Structure

- app/: Contains the main layout and the primary page route.
- components/: Houses the Board, Column, and Card components for modular UI.
- hooks/: Includes useKanban.ts for managing state and localStorage persistence.
- types/: Defines the TypeScript interfaces for Tasks and Statuses.

## Key Expectations Met
- Server and Client Component Separation: The application correctly utilizes 'use client' directives only where interactivity is required.
- Dynamic Rendering: The board updates dynamically as tasks are added, moved, or edited.
- Loading and Empty States: Visual indicators are provided when the board is loading and when columns are empty.
- Clean Code: The project follows a modular structure with clear separation of concerns.

## Getting Started

### Prerequisites
- Node.js (Latest LTS version recommended)
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
   git clone https://github.com/omonweb/Mini-Kanban.git

2. Install dependencies:
   npm install

3. Run the development server:
   npm run dev

4. Access the application:
   Open http://localhost:3000 in your browser.

## Deployment

This project is optimized for deployment on Vercel. You can connect your GitHub repository to Vercel for automatic deployments.

---
Developed by Om Arora

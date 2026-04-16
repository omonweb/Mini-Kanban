
import Board from '@/components/Board';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 font-sans p-6 md:p-12">
      <header className="max-w-6xl mx-auto mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight">Mini Kanban</h1>
        <p className="text-gray-500 mt-2">Manage your tasks by dragging them across columns.</p>
      </header>
      
      <Board />
    </main>
  );
}
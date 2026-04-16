
import { useState, useEffect } from 'react';
import { Task, Status } from '../types';

export const useKanban = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount to prevent hydration mismatch
  useEffect(() => {
    const saved = localStorage.getItem('kanban-tasks');
    if (saved) {
      setTasks(JSON.parse(saved));
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage whenever tasks change
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('kanban-tasks', JSON.stringify(tasks));
    }
  }, [tasks, isLoaded]);

  const addTask = (title: string, description: string) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      description,
      status: 'Pending',
    };
    setTasks([...tasks, newTask]);
  };

  const updateTask = (id: string, title: string, description: string) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, title, description } : t));
  };

  const deleteTask = (id: string) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      setTasks(tasks.filter(t => t.id !== id));
    }
  };

  const moveTask = (id: string, newStatus: Status) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, status: newStatus } : t));
  };

  return { tasks, isLoaded, addTask, updateTask, deleteTask, moveTask };
};
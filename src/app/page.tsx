import Chat from "../components/chat";
import ThemeToggle from '../components/ThemeToggle';

export default function Home() {
  return (
    <main className="min-h-screen bg-lmgray dark:bg-dmbg dark:text-white relative">
      <Chat />
      <div className="fixed bottom-4 right-4">
        <ThemeToggle />
      </div>
    </main>
  );
}

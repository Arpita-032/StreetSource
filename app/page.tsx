// app/page.tsx
import { supabase } from '@/utils/supabaseClient';
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function HomePage() {
  // Simple check to see if user is logged in.
  // In a real app, this would be in middleware.
  const { data: { user } } = await supabase.auth.getUser();

  if (user) {
    redirect('/group-chat');
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-orange-50 text-orange-900">
      <div className="w-full max-w-md p-8 space-y-6 bg-orange-100 rounded-2xl shadow-md border border-orange-200">
        <h1 className="text-3xl font-bold text-center">Welcome to StreetSource</h1>
        <p className="text-center text-sm">Please log in to continue.</p>
        <Link
          href="/login"
          className="block w-full text-center p-3 bg-green-400 text-white font-semibold rounded-xl hover:bg-green-500 transition"
        >
          Go to Login
        </Link>
      </div>
    </div>
  );
}

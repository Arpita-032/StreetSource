'use client';
import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import { ExcessFoodButton } from '@/components/ExcessFoodButton';
import Link from 'next/link';

export default function VendorHomePage() {
  const router = useRouter();
  const supabase = createClient();
  const [loading, setLoading] = useState(true);
  const [isVendor, setIsVendor] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.replace('/login');
        return;
      }
      setIsVendor(true);
      setLoading(false);
    };
    checkAuth();
  }, [router, supabase]);

  if (loading) return <p>Loading...</p>;
  if (!isVendor) return null;

  return (
    <div className="space-y-8 min-h-screen p-8" style={{ backgroundColor: '#d4f5d3' }}>
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-green-900">Vendor Dashboard</h1>
        <p className="text-muted-foreground mt-2 text-green-800">
          Welcome back! What would you like to do today?
        </p>
      </div>

      {/* Main Navigation Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          href="/freshness-scan"
          className="p-6 bg-white border rounded-lg hover:bg-green-100 transition-colors flex flex-col items-center justify-center text-center shadow-md"
        >
          <h3 className="font-semibold text-lg text-green-900">Food Freshness Check</h3>
          <p className="text-sm text-green-800 mt-1">Use AI to check the quality of your produce.</p>
        </Link>
        <Link
          href="/excess-food"
          className="p-6 bg-white border rounded-lg hover:bg-green-100 transition-colors flex flex-col items-center justify-center text-center shadow-md"
        >
          <h3 className="font-semibold text-lg text-green-900">Excess Food Dashboard</h3>
          <p className="text-sm text-green-800 mt-1">Notify others about surplus items.</p>
        </Link>
        <Link
          href="/group-chat"
          className="p-6 bg-white border rounded-lg hover:bg-green-100 transition-colors flex flex-col items-center justify-center text-center shadow-md"
        >
          <h3 className="font-semibold text-lg text-green-900">Group Ordering</h3>
          <p className="text-sm text-green-800 mt-1">Join forces to buy supplies in bulk.</p>
        </Link>
      </div>

      {/* Excess Food Form Section */}
      <div className="p-6 border rounded-lg bg-white shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-green-900">Quick Alert</h2>
        <ExcessFoodButton />
      </div>
    </div>
  );
}

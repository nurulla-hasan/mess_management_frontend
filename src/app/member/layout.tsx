import React from 'react';
import { MemberHeader } from '@/components/layout/member-header';

export default function MemberLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen w-full flex-col bg-muted/40">
      <MemberHeader />
      <main className="flex-1 overflow-y-auto p-4 md:p-6">
        <div className="mx-auto container">
          {children}
        </div>
      </main>
    </div>
  );
}

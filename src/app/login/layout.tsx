"use client";
import RegistrationFooter from '@/components/admin/RegistrationFooter';
import Header from '@/components/Header'

export default function RegistrationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col min-h-screen justify-between bg-gray-100">
           
            <main className='my-auto' >
                {children}
            </main>
            {/* Overide the RootLayout <Footer /> */}
            <RegistrationFooter />
        </div>
    );
}

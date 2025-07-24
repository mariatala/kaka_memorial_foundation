"use client"

import { usePathname } from "next/navigation"  
import Footer from "@/components/Footer" 

const FooterController: React.FC = () => {
    const pathname = usePathname();
    const hideFooter = ['/login','/registrations'];

    if( hideFooter.includes(pathname)) {
        return null;}

    return(
        <Footer />
    );

}

export default FooterController;
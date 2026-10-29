import { About } from "@/components/About/About";
import { Contacts } from "@/components/Contacts/Contacts";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import { Services } from "@/components/Services/Services";
import { Specialists } from "@/components/Specialists/Specialists";

export default function Home() {
    return (
        <>
            <Hero />
            <Header />
            <main>
                <About />
                <Services />
                <Specialists />
                <Contacts />
            </main>
            <Footer />
        </>
    );
}

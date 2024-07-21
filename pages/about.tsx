import { Header } from "@/components/header/header";
import "../src/globals.css"


export default function About(){
    return (
        <main>
        <Header />
        <section className="bg-[url('/health-food.jpg')] bg-cover bg-center h-screen backdrop-brightness-50">
        <div className="flex items-center justify-center h-full bg-transparent align-center flex-col backdrop-brightness-50 text-center">
            <div className="bg-white w-4/5 m-auto rounded-3xl p-5">
            <h1 className="text-center text-lg uppercase font-semibold">About Me</h1>
            <p className="mt-6">Hi! My name is Emma and I'm based in Ontario, Canada. In 2022, I had an illness that was made worse by eating gluten, causing me to go gluten free for 18 months.</p>
            <p>During that time, I realized how difficult it was to come up with recipes at home to eat gluten free food, and was inspired to make an application where I could plan, save, and shop for my meals.</p>
            <p>While my health has improved and I'm back to eating gluten, I have a family member with Celiac disease, so this application has still been useful. I hope you enjoy!</p>
            <h5> - Emma</h5>
            </div>
        </div>
        </section>
        </main>
    )
}
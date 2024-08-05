"use client";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function MainScreen() {
  return (
    <div className="min-h-screen">
      <header className="flex items-center justify-between px-4 py-4 border-b">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold">AuraLabs </h1>
          <nav className="hidden space-x-4 md:flex">
            <Link href="#" className="text-lg font-semibold" prefetch={false}>
              Home
            </Link>
            <Link href="#" className="text-lg" prefetch={false}>
              About Us
            </Link>
            <Link href="#" className="text-lg" prefetch={false}>
              Services
            </Link>
            <Link href="#" className="text-lg" prefetch={false}>
              Our Team
            </Link>
            <Link href="#" className="text-lg" prefetch={false}>
              Contact Us
            </Link>
          </nav>
        </div>
      </header>
      <main className="p-4">
        <div className="relative flex flex-col items-center justify-between p-8 bg-gray-100">
          {/* <div className="text-center">
            <h2 className="text-3xl font-bold">Futuristic plant design</h2>
            <p className="mt-2 text-lg">Reimagine your world. We code it to life</p>
            <div className="flex justify-center mt-4 space-x-4">
              <Button variant="outline">Spark your vision</Button>
              <Button>Ignite your impact</Button>
            </div>
          </div> */}
          <img
            src="/team.png"
            alt="Product"
            className="w-full h-80 mt-8"
            width="300"
            height="300"
            style={{ aspectRatio: "300/300", objectFit: "cover" }}
          />
          <div className="text-center mt-8">
            <h2 className="text-3xl font-bold">AuraLabs </h2>
            <p className="mt-2 text-lg">Ryse, Reimagine, Repeat!</p>
          </div>
        </div>
        <section className="mt-12">
          <h2 className="text-3xl font-bold">About US</h2>
          <p className="mt-4 text-lg">
            Welcome to AuraLabs, where innovation meets expertise! We are a dynamic team of dedicated engineers and
            designers who thrive on transforming your boldest ideas into reality. Our mantra, "Ryse, Reimagine, Repeat!"
            encapsulates the journey of innovation, where we Ryse to the occasion, Reimagine what's possible, and Repeat
            the cycle of excellence.
          </p>
        </section>
        <section className="mt-12">
          <h2 className="text-3xl font-bold">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
            <div>
              <h3 className="text-xl font-bold">Web Designing</h3>
              <p className="mt-2 text-lg">
                We design websites that are responsive, scalable and ignite across screens with pixel-perfect UI and
                optimized UX.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Web Development</h3>
              <p className="mt-2 text-lg">
                Our expertise spans full-stack development, ensuring your web applications are robust, secure and
                scalable.
              </p>
            </div>
          </div>
        </section>
        <section className="mt-12">
          <h2 className="text-3xl font-bold">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
            <div className="text-center">
              <img src="/placeholder.svg" alt="Team Member" className="w-32 h-32 rounded-full mx-auto" />
              <h3 className="text-xl font-bold mt-4">John Doe</h3>
              <p className="text-lg text-gray-500">Co-Founder, CEO</p>
            </div>
            <div className="text-center">
              <img src="/placeholder.svg" alt="Team Member" className="w-32 h-32 rounded-full mx-auto" />
              <h3 className="text-xl font-bold mt-4">Jane Smith</h3>
              <p className="text-lg text-gray-500">Co-Founder, CTO</p>
            </div>
            <div className="text-center">
              <img src="/placeholder.svg" alt="Team Member" className="w-32 h-32 rounded-full mx-auto" />
              <h3 className="text-xl font-bold mt-4">Bob Johnson</h3>
              <p className="text-lg text-gray-500">Lead Designer</p>
            </div>
          </div>
        </section>
        <section className="mt-12">
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <form className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-lg font-medium">
                Name
              </label>
              <Input type="text" id="name" name="name" className="mt-1" />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium">
                Email
              </label>
              <Input type="email" id="email" name="email" className="mt-1" />
            </div>
            <div className="col-span-1 md:col-span-2">
              <label htmlFor="message" className="block text-lg font-medium">
                Message
              </label>
              <Textarea id="message" name="message" rows={4} className="mt-1" />
            </div>
            <div className="col-span-1 md:col-span-2 text-right">
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </section>
      </main>
    </div>
  )
}

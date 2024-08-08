import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Text } from "@/components/ui/text"

export function MainScreenLanding() {
  return (
    <div className="flex flex-col min-h-dvh">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center font-bold text-lg lg:text-xl">
          {/* <MountainIcon className="size-6" /> */}
          <span className="sr-only">Aura Digital Labs</span>
          Aura Digital Labs
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Home
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Services
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Team
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Projects
          </Link>
        </nav>
      </header>
      <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
        <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
          <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16 mt-10">
            <div>
              <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                Unleash the Power of Digital Transformation
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl pt-4">
                Aura Digital Labs is your trusted partner in navigating the digital landscape. We empower businesses to
                thrive in the ever-evolving digital era.
              </p>
            </div>
            <img
              src="/banner_main.jpg"
              width="1270"
              height="600"
              alt="Hero"
              className="mx-auto aspect-[16/9] overflow-hidden rounded-t-xl object-cover pb-4"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Aura Digital Labs</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Aura Digital Labs is a leading digital transformation consultancy, dedicated to empowering businesses of all
                sizes to thrive in the digital age. With a team of seasoned experts, we combine cutting-edge technology,
                strategic insights, and a customer-centric approach to deliver innovative solutions that drive growth and
                success.
              </p>
            </div>
          </div>
          <div className="mx-auto grid items-center justify-center gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Our Mission</h3>
              <p className="text-sm text-muted-foreground">
                To be the trusted partner in our clients' digital transformation journey, enabling them to stay ahead of the
                curve and achieve their business goals.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Our Values</h3>
              <p className="text-sm text-muted-foreground">
                Integrity, Innovation, Collaboration, and Customer Success are the core values that guide our every decision
                and action.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Our History</h3>
              <p className="text-sm text-muted-foreground">
                Aura Digital Labs was founded in 2015 with a vision to revolutionize the way businesses leverage technology.
                Over the years, we have grown to become a trusted partner for organizations across various industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted flex justify-center">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3 mx-auto max-w-[800px]">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Our Services</h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Aura Digital Labs offers a comprehensive suite of digital transformation services to help your business thrive in the digital age.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-background p-6 shadow-sm transition-all hover:bg-accent hover:text-accent-foreground">
              <CodeIcon className="h-10 w-10" />
              <h3 className="text-lg font-bold">Web Development</h3>
              <p className="text-sm text-muted-foreground">
                Cutting-edge web solutions that drive engagement and conversion.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-background p-6 shadow-sm transition-all hover:bg-accent hover:text-accent-foreground">
              <SmartphoneIcon className="h-10 w-10" />
              <h3 className="text-lg font-bold">Mobile App Development</h3>
              <p className="text-sm text-muted-foreground">
                Innovative mobile apps that deliver seamless user experiences.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-background p-6 shadow-sm transition-all hover:bg-accent hover:text-accent-foreground">
              <DatabaseIcon className="h-10 w-10" />
              <h3 className="text-lg font-bold">Data Analytics</h3>
              <p className="text-sm text-muted-foreground">Actionable insights to drive informed decision-making.</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-background p-6 shadow-sm transition-all hover:bg-accent hover:text-accent-foreground">
              <CloudIcon className="h-10 w-10" />
              <h3 className="text-lg font-bold">Cloud Solutions</h3>
              <p className="text-sm text-muted-foreground">
                Scalable and secure cloud-based infrastructure and applications.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-background p-6 shadow-sm transition-all hover:bg-accent hover:text-accent-foreground">
              <PowerIcon className="h-10 w-10" />
              <h3 className="text-lg font-bold">IT Consulting</h3>
              <p className="text-sm text-muted-foreground">
                Strategic guidance to align technology with your business goals.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-background p-6 shadow-sm transition-all hover:bg-accent hover:text-accent-foreground">
              <RocketIcon className="h-10 w-10" />
              <h3 className="text-lg font-bold">Digital Marketing</h3>
              <p className="text-sm text-muted-foreground">
                Tailored digital marketing strategies to drive growth and engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Projects</h2>

          <div className="bg-background p-6 rounded-lg shadow-md w-full">
          <div className="flex overflow-x-auto space-x-3 p-6 w-full">
            {[...Array(7)].map((_, index) => (
              <div
                key={index}
                className="min-w-[400px] bg-background p-6 rounded-lg shadow-md flex-shrink-0"
              >
                <img
                  // src={`/placeholder${index + 1}.svg`}
                  src={`/project_temp.jpg`}
                  width={400}
                  height={300}
                  alt={`Project ${index + 1}`}
                  className="rounded-lg mb-4"
                  style={{ aspectRatio: "400/500", objectFit: "cover" }}
                />
                <h3 className="text-xl font-bold mb-2">{`Project ${index + 1}`}</h3>
                <p className="text-muted-foreground">
                  {/* {`Description for Project ${index + 1}.`} */}
                </p>
              </div>
            ))}

        </div>


            
            {/* <div className="bg-background p-6 rounded-lg shadow-md">
              <img
                src="/placeholder.svg"
                width={400}
                height={300}
                alt="Project 4"
                className="rounded-lg mb-4"
                style={{ aspectRatio: "400/300", objectFit: "cover" }}
              />
              <h3 className="text-xl font-bold mb-2">Project 4</h3>
              <p className="text-muted-foreground">
                A secure and scalable cloud infrastructure solution for a growing startup.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-md">
              <img
                src="/placeholder.svg"
                width={400}
                height={300}
                alt="Project 5"
                className="rounded-lg mb-4"
                style={{ aspectRatio: "400/300", objectFit: "cover" }}
              />
              <h3 className="text-xl font-bold mb-2">Project 5</h3>
              <p className="text-muted-foreground">
                A custom CRM system that streamlined operations for a professional services firm.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-md">
              <img
                src="/placeholder.svg"
                width={400}
                height={300}
                alt="Project 6"
                className="rounded-lg mb-4"
                style={{ aspectRatio: "400/300", objectFit: "cover" }}
              />
              <h3 className="text-xl font-bold mb-2">Project 6</h3>
              <p className="text-muted-foreground">
                A data visualization dashboard that empowered executives with real-time insights.
              </p>
            </div> */}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="bg-background p-6 rounded-lg shadow-md">
              <img
                src="/user_icon.jpeg"
                width={300}
                height={300}
                alt="Yasiru Basnayake"
                className="rounded-full mb-4"
                style={{ aspectRatio: "300/300", objectFit: "cover" }}
              />
              <h3 className="text-xl font-bold mb-2">Yasiru Basnayake</h3>
              <p className="text-muted-foreground text-sm mb-2">
                Electronic and Telecommunications Engineering Undergraduate University of Moratuwa
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg shadow-md">
              <img
                src="/user_icon.jpeg"
                width={300}
                height={300}
                alt="Prabath Wijethilaka"
                className="rounded-full mb-4"
                style={{ aspectRatio: "300/300", objectFit: "cover" }}
              />
              <h3 className="text-xl font-bold mb-2">Prabath Wijethilaka</h3>
              <p className="text-muted-foreground text-sm mb-2">
                Electronic and Telecommunications Engineering Undergraduate University of Moratuwa
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg shadow-md">
              <img
                src="/user_icon.jpeg"
                width={300}
                height={300}
                alt="Anushka Samaranayake"
                className="rounded-full mb-4"
                style={{ aspectRatio: "300/300", objectFit: "cover" }}
              />
              <h3 className="text-xl font-bold mb-2">Anushka Samaranayake</h3>
              <p className="text-muted-foreground text-sm mb-2">
                Electronic and Telecommunications Engineering Undergraduate University of Moratuwa
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg shadow-md">
              <img
                src="/user_icon.jpeg"
                width={300}
                height={300}
                alt="Lasith Haputhantri"
                className="rounded-full mb-4"
                style={{ aspectRatio: "300/300", objectFit: "cover" }}
              />
              <h3 className="text-xl font-bold mb-2">Lasith Haputhantri</h3>
              <p className="text-muted-foreground text-sm mb-2">
                Electronic and Telecommunications Engineering Undergraduate University of Moratuwa
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg shadow-md">
              <img
                src="/user_icon.jpeg"
                width={300}
                height={300}
                alt="Tashin Kavisham"
                className="rounded-full mb-4"
                style={{ aspectRatio: "300/300", objectFit: "cover" }}
              />
              <h3 className="text-xl font-bold mb-2">Tashin Kavisham</h3>
              <p className="text-muted-foreground text-sm mb-2">
                Electronic and Telecommunications Engineering Undergraduate University of Moratuwa
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg shadow-md">
              <img
                src="/user_icon.jpeg"
                width={300}
                height={300}
                alt="Wimukthi Bandara"
                className="rounded-full mb-4"
                style={{ aspectRatio: "300/300", objectFit: "cover" }}
              />
              <h3 className="text-xl font-bold mb-2">Wimukthi Bandara</h3>
              <p className="text-muted-foreground text-sm mb-2">
                Electronic and Telecommunications Engineering Undergraduate University of Moratuwa
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg shadow-md">
              <img
                src="/user_icon.jpeg"
                width={300}
                height={300}
                alt="Sajitha Madugalle"
                className="rounded-full mb-4"
                style={{ aspectRatio: "300/300", objectFit: "cover" }}
              />
              <h3 className="text-xl font-bold mb-2">Sajitha Madugalle</h3>
              <p className="text-muted-foreground text-sm mb-2">
                Electronic and Telecommunications Engineering Undergraduate University of Moratuwa
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg shadow-md">
              <img
                src="/user_icon.jpeg"
                width={300}
                height={300}
                alt="Dinujaya Wijewickrama"
                className="rounded-full mb-4"
                style={{ aspectRatio: "300/300", objectFit: "cover" }}
              />
              <h3 className="text-xl font-bold mb-2">Dinujaya Wijewickrama</h3>
              <p className="text-muted-foreground text-sm mb-2">
                Electronic and Telecommunications Engineering Undergraduate University of Moratuwa
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Get in Touch</h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have a project in mind or need our expertise? Fill out the form below and we'll get back to you as soon as
              possible.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-4">
            <form className="grid gap-4">
              <Input type="text" placeholder="Name" className="max-w-lg flex-1" />
              <Input type="email" placeholder="Email" className="max-w-lg flex-1" />
              <Textarea placeholder="Message" className="max-w-lg flex-1" />
              <Button type="submit">Submit</Button>
            </form>
            <div className="grid gap-2">
              <div className="flex items-center gap-2">
                <PhoneIcon className="h-5 w-5 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center gap-2">
                <MailIcon className="h-5 w-5 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">info@auradigitallabs.com</p>
              </div>
              <div className="flex items-center gap-2">
                <MapPinIcon className="h-5 w-5 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">123 Main Street, Anytown USA</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div>
              <h2 className="text-lg font-bold mb-4">Company</h2>
              <ul className="space-y-2">
                <li>About Us</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>Press</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-bold mb-4">Services</h2>
              <ul className="space-y-2">
                <li>Product Development</li>
                <li>Consulting</li>
                <li>Support</li>
                <li>Partnerships</li>
                <li>Client Resources</li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-bold mb-4">Resources</h2>
              <ul className="space-y-2">
                <li>Documentation</li>
                <li>Tutorials</li>
                <li>FAQs</li>
                <li>Community Forum</li>
                <li>Case Studies</li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-bold mb-4">Contact</h2>
              <ul className="space-y-2">
                <li>Contact Us</li>
                <li>Support Center</li>
                <li>Request a Demo</li>
                <li>Feedback</li>
                <li>Social Media</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-gray-600">
            <p>
              Aura Digital Labs is dedicated to delivering innovative solutions and exceptional service. Stay connected with us to explore how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </footer>

    </div>
  )
}

function CloudIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  )
}


function CodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}


function DatabaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  )
}


function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function MapPinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}


function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}


function PowerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2v10" />
      <path d="M18.4 6.6a9 9 0 1 1-12.77.04" />
    </svg>
  )
}


function RocketIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}


function SmartphoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  )
}

function ComputerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="8" x="5" y="2" rx="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" />
      <path d="M6 18h2" />
      <path d="M12 18h6" />
    </svg>
  )
}


function InfoIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  )
}


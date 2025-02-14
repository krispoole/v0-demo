import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-4rem)] flex-col">
      <section className="relative flex flex-col items-start justify-center overflow-hidden bg-background px-4 py-24 md:py-32">
        <div className="container relative z-10 grid gap-8 lg:grid-cols-[1fr_500px]">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <h1 className="text-6xl font-bold tracking-tighter sm:text-8xl">Look beyond limits</h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The most experienced, specialized team across the industry. Create and manage your digital workspace
                with our innovative platform.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/dashboard`}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pink-200 to-pink-100 text-black hover:from-pink-300 hover:to-pink-200"
                >
                  Get started
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                Learn more
              </Button>
            </div>
          </div>
          <div className="relative aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800&auto=format&fit=crop"
              alt="Decorative hero image"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background to-background/60 md:to-background/40" />
      </section>

      <section className="container py-24">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="flex flex-col items-start space-y-4 rounded-lg border p-6">
            <h3 className="text-2xl font-bold">Customizable</h3>
            <p className="text-muted-foreground">Drag and drop tiles to create your perfect workspace layout.</p>
          </div>
          <div className="flex flex-col items-start space-y-4 rounded-lg border p-6">
            <h3 className="text-2xl font-bold">Secure</h3>
            <p className="text-muted-foreground">Enterprise-grade security with Auth0 authentication.</p>
          </div>
          <div className="flex flex-col items-start space-y-4 rounded-lg border p-6">
            <h3 className="text-2xl font-bold">Flexible</h3>
            <p className="text-muted-foreground">Choose from a wide range of widgets and components.</p>
          </div>
        </div>
      </section>
    </main>
  )
}


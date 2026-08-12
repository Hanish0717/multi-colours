import Image from 'next/image'
import { Globe, Smartphone } from 'lucide-react'
import { AmbientBackground } from '@/components/ambient-background'
import { CtaCard } from '@/components/cta-card'
import TrustedBrands from '@/components/TrustedBrands'

const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.buynd.save'
const WEBSITE_URL = 'https://multicolours.in'

export default function Page() {
  return (
    <main className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 py-10">
      <AmbientBackground />

      <section className="flex w-full max-w-xl flex-col items-center">
        {/* Logo card — white panel with a soft purple glow, subtle entrance */}
        <div className="relative mc-animate mc-fade-scale">
          <div
            className="absolute -inset-6 -z-10 rounded-full opacity-70 blur-2xl"
            style={{
              background:
                'radial-gradient(circle, oklch(0.55 0.24 310) 0%, transparent 70%)',
            }}
            aria-hidden="true"
          />
          <div className="rounded-3xl bg-white px-8 py-6 shadow-2xl">
            <Image
              src="/images/multicolours-logo.png"
              alt="Multi Colours logo"
              width={520}
              height={300}
              priority
              className="h-auto w-44 select-none sm:w-52"
            />
          </div>
        </div>

        <div className="mt-8 w-full">
          <TrustedBrands
            title="Trusted Brands"
            subtitle="Available at Multi Colours"
            className="py-5"
          />
        </div>

        {/* Primary interactive elements — staggered entrance */}
        <div className="mt-9 flex w-full flex-col gap-4">
          <CtaCard
            href={PLAY_STORE_URL}
            variant="app"
            label="Google Play"
            title="Download App"
            subtitle="Get the full experience"
            icon={<Smartphone className="size-5" aria-hidden="true" />}
            delay={320}
            external
          />
          <CtaCard
            href={WEBSITE_URL}
            variant="web"
            label="multicolours.in"
            title="Visit Website"
            subtitle="Explore online"
            icon={<Globe className="size-5" aria-hidden="true" />}
            delay={420}
            external
          />
        </div>
      </section>
    </main>
  )
}

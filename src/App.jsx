import { useEffect, useState } from 'react'
import { Menu, Phone, Mail, MapPin, Star, Instagram, Facebook, Twitter } from 'lucide-react'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || ''

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/60 border-b border-white/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500" />
            <span className="font-semibold tracking-wide">Alpen Luxe</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#suites" className="hover:text-gray-900">Suites</a>
            <a href="#dining" className="hover:text-gray-900">Dining</a>
            <a href="#spa" className="hover:text-gray-900">Spa</a>
            <a href="#experiences" className="hover:text-gray-900">Experiences</a>
            <a href="#contact" className="px-4 py-2 rounded-full bg-gray-900 text-white">Book now</a>
          </nav>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white/80 backdrop-blur">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">
            <a href="#suites">Suites</a>
            <a href="#dining">Dining</a>
            <a href="#spa">Spa</a>
            <a href="#experiences">Experiences</a>
            <a href="#contact" className="px-4 py-2 rounded-lg bg-gray-900 text-white text-center">Book now</a>
          </div>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=2000&auto=format&fit=crop"
        alt="Swiss Alps"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-white/10" />
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        <p className="uppercase tracking-[0.4em] text-xs sm:text-sm text-white/80">Swiss Alps • 1,900m</p>
        <h1 className="mt-4 text-4xl sm:text-6xl md:text-7xl font-serif leading-tight">
          Pristine luxury above the clouds
        </h1>
        <p className="mt-6 text-white/90 max-w-2xl mx-auto">
          Wake to crystalline peaks, Michelin-starred dining, and the quiet elegance of a sanctuary sculpted by snow and light.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#contact" className="px-6 py-3 rounded-full bg-white text-gray-900 font-medium">Reserve your stay</a>
          <a href="#suites" className="px-6 py-3 rounded-full bg-white/10 border border-white/30 text-white">Explore suites</a>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ title, text, icon }) {
  const Icon = icon
  return (
    <div className="p-6 rounded-2xl bg-white/70 backdrop-blur border border-gray-200 shadow-sm hover:shadow-md transition">
      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 text-white flex items-center justify-center">
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600 text-sm">{text}</p>
    </div>
  )
}

function Suites() {
  const suites = [
    {
      name: 'Panorama Suite',
      img: 'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=1400&auto=format&fit=crop',
      desc: 'Wraparound views, private fireplace, terrace jacuzzi.'
    },
    {
      name: 'Glacier Residence',
      img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1400&auto=format&fit=crop',
      desc: 'Two bedrooms, dedicated butler, in-suite dining salon.'
    },
    {
      name: 'Alpine Studio',
      img: 'https://images.unsplash.com/photo-1505692952047-1a78307da8f3?q=80&w=1400&auto=format&fit=crop',
      desc: 'Minimal, serene, and framed by snow-dusted pines.'
    }
  ]
  return (
    <section id="suites" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl sm:text-4xl font-serif">Suites & Residences</h2>
          <div className="flex items-center gap-1 text-amber-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-500" />
            ))}
          </div>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {suites.map((s) => (
            <div key={s.name} className="group rounded-2xl overflow-hidden border bg-white shadow-sm">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={s.img} alt={s.name} className="w-full h-full object-cover group-hover:scale-105 transition" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold">{s.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function DiningSpa() {
  return (
    <section id="dining" className="py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-serif">Dining, Refined</h2>
          <p className="mt-4 text-gray-600">
            Alpine terroir elevated with modern Swiss craft. A cellar of rare vintages, a chef whose artistry earned stars among the peaks.
          </p>
          <ul className="mt-6 space-y-3 text-gray-700">
            <li>• Tasting menus inspired by the season</li>
            <li>• Fireside lounge and panoramic terrace</li>
            <li>• Private chef’s table</li>
          </ul>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg border">
          <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1400&auto=format&fit=crop" alt="Dining" className="w-full h-full object-cover" />
        </div>
      </div>
      <div id="spa" className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center mt-16">
        <div className="rounded-2xl overflow-hidden shadow-lg border order-last lg:order-first">
          <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1400&auto=format&fit=crop" alt="Spa" className="w-full h-full object-cover" />
        </div>
        <div>
          <h2 className="text-3xl sm:text-4xl font-serif">Spa in Stillness</h2>
          <p className="mt-4 text-gray-600">
            Thermal suites, snow therapy, and therapists trained in restorative alpine rituals. A sanctuary where silence lingers.
          </p>
          <ul className="mt-6 space-y-3 text-gray-700">
            <li>• Glacier water pool and outdoor onsen</li>
            <li>• Aromatic sauna and snow room</li>
            <li>• Tailored treatments and massage</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

function Experiences() {
  const cards = [
    {
      title: 'Heli-ski & Guides',
      img: 'https://images.unsplash.com/photo-1458442310124-dde6edb43d10?q=80&w=1400&auto=format&fit=crop'
    },
    {
      title: 'Private Glacier Picnic',
      img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1400&auto=format&fit=crop'
    },
    { title: 'Stargazing Above 2,000m', img: 'https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?q=80&w=1400&auto=format&fit=crop' }
  ]
  return (
    <section id="experiences" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-serif">Curated Experiences</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c) => (
            <div key={c.title} className="rounded-2xl overflow-hidden border bg-white shadow-sm">
              <div className="aspect-[4/3]">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="font-medium">{c.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', check_in: '', check_out: '', guests: 2, message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const submit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(`${BACKEND_URL}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed')
      setStatus('sent')
      setForm({ name: '', email: '', phone: '', check_in: '', check_out: '', guests: 2, message: '' })
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl sm:text-4xl font-serif">Begin your stay</h2>
          <p className="mt-4 text-gray-600">Share a few details and our concierge will be in touch.</p>
          <form onSubmit={submit} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input className="input" placeholder="Full name" name="name" value={form.name} onChange={handleChange} required />
            <input className="input" placeholder="Email" name="email" value={form.email} onChange={handleChange} required />
            <input className="input" placeholder="Phone" name="phone" value={form.phone} onChange={handleChange} />
            <input className="input" type="date" name="check_in" value={form.check_in} onChange={handleChange} />
            <input className="input" type="date" name="check_out" value={form.check_out} onChange={handleChange} />
            <input className="input" type="number" name="guests" min="1" max="12" value={form.guests} onChange={handleChange} />
            <textarea className="input sm:col-span-2" rows="5" placeholder="Message" name="message" value={form.message} onChange={handleChange} />
            <button className="sm:col-span-2 px-6 py-3 rounded-full bg-gray-900 text-white disabled:opacity-60" disabled={status==='sending'}>
              {status==='sending' ? 'Sending…' : 'Send inquiry'}
            </button>
            {status==='sent' && <p className="sm:col-span-2 text-emerald-600">Thank you — our team will reach out shortly.</p>}
            {status==='error' && <p className="sm:col-span-2 text-red-600">Something went wrong. Please try again.</p>}
          </form>
          <div className="mt-10 flex flex-col gap-3 text-gray-700">
            <p className="flex items-center gap-2"><Phone className="w-4 h-4"/> +41 22 555 0123</p>
            <p className="flex items-center gap-2"><Mail className="w-4 h-4"/> concierge@alpenluxe.ch</p>
            <p className="flex items-center gap-2"><MapPin className="w-4 h-4"/> Oberland, Switzerland</p>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden border shadow-lg">
          <img src="https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?q=80&w=1400&auto=format&fit=crop" alt="Alps night" className="w-full h-full object-cover"/>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Alpen Luxe — Swiss Alps</p>
        <div className="flex items-center gap-4 text-gray-500">
          <Instagram className="w-5 h-5"/>
          <Facebook className="w-5 h-5"/>
          <Twitter className="w-5 h-5"/>
        </div>
      </div>
    </footer>
  )
}

function App() {
  useEffect(() => {
    document.body.classList.add('bg-white')
  }, [])

  return (
    <div className="text-gray-900">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6 -mt-10 relative z-20">
          <FeatureCard title="Michelin dining" text="Seasonal tasting journeys framed by alpine views." icon={Star} />
          <FeatureCard title="Private transfers" text="Seamless arrival by car or helicopter." icon={MapPin} />
          <FeatureCard title="Concierge, 24/7" text="Dedicated to the art of effortless stays." icon={Phone} />
        </div>
        <Suites />
        <DiningSpa />
        <Experiences />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App

'use client'

import * as React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Facebook, Instagram, Linkedin, Moon, Send, Sun, Twitter } from 'lucide-react'
import { FooterTwoBlock } from '@/payload-types'

export const FooterBlockTwoComponent: React.FC<FooterTwoBlock> = ({
  newsletter,
  quickLinks,
  contact,
  socialLinks,
  bottomLinks,
  copyright,
}) => {
  const [isDarkMode, setIsDarkMode] = React.useState(false)

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  // console.log('FooterTwo rendered', copyright)

  return (
    <footer className="dark relative border-t bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Newsletter */}
          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">{newsletter?.title}</h2>
            <p className="mb-6 text-muted-foreground">{newsletter?.description}</p>
            <form className="relative">
              <Input
                type="email"
                placeholder="Enter your email"
                className="pr-12 backdrop-blur-sm"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              {quickLinks?.map((link) => (
                <a
                  key={link.id}
                  href={link.url || '#'}
                  className="block transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <address className="space-y-2 text-sm not-italic">
              {contact?.address && <p>{contact.address}</p>}
              {contact?.phone && <p>{contact.phone}</p>}
              {contact?.email && <p>{contact.email}</p>}
            </address>
          </div>

          {/* Social Links */}
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="mb-6 flex space-x-4">
              {socialLinks?.map((s) => (
                <TooltipProvider key={s.id}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon" className="rounded-full" asChild>
                        <a href={s.url || '#'} target="_blank" rel="noreferrer">
                          {s.platform === 'facebook' && <Facebook className="h-4 w-4" />}
                          {s.platform === 'twitter' && <Twitter className="h-4 w-4" />}
                          {s.platform === 'instagram' && <Instagram className="h-4 w-4" />}
                          {s.platform === 'linkedin' && <Linkedin className="h-4 w-4" />}
                        </a>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{s.platform}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>

            {/* Dark mode toggle */}
            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4" />
              <Switch id="dark-mode" checked={isDarkMode} onCheckedChange={setIsDarkMode} />
              <Moon className="h-4 w-4" />
              <Label htmlFor="dark-mode" className="sr-only">
                Toggle dark mode
              </Label>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">{copyright}</p>
          <nav className="flex gap-4 text-sm">
            {bottomLinks?.map((link) => (
              <a
                key={link.id}
                href={link.url || '#'}
                className="transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}

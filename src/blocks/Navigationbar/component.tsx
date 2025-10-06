// components/CustomHeader.tsx
'use client'

import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { Menu, MoveRight, X } from 'lucide-react'
import { Fragment, useState } from 'react'
import Link from 'next/link'
import { NavigationBarBlock } from '@/payload-types'

interface NavItem {
  title: string
  href?: string | null | undefined
  description?: string | null | undefined
  items?: NavItem[] | null | undefined
  id?: string | null | undefined
}

const NavigationBarComponent: React.FC<NavigationBarBlock> = ({ navigationItems, buttons }) => {
  const [isOpen, setOpen] = useState(false)

  const items: NavItem[] =
    navigationItems && navigationItems.length > 0
      ? navigationItems
      : [
          {
            title: 'Home',
            href: '/',
          },
          {
            title: 'Services',
            description: 'Managing a small business today is already tough.',
            items: [
              { title: 'Repo', href: '/reports' },
              { title: 'Statistics', href: '/statistics' },
              { title: 'Dashboards', href: '/dashboards' },
              { title: 'Recordings', href: '/recordings' },
            ],
          },
          {
            title: 'Contacts',
            description: 'Managing a small business today is already tough.',
            items: [
              { title: 'About us', href: '/about' },
              { title: 'Fundraising', href: '/fundraising' },
              { title: 'Investors', href: '/investors' },
              { title: 'Contact us', href: '/contact' },
            ],
          },
        ]

  return (
    <header className="w-full z-40 fixed top-0 left-0 bg-background">
      <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
        {/* Desktop Navigation */}
        <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
          <NavigationMenu className="flex justify-start items-start">
            <NavigationMenuList className="flex justify-start gap-4 flex-row">
              {items.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.href ? (
                    <Link href={{ pathname: item.href ?? '/' }}>
                      <NavigationMenuLink asChild>
                        <Button variant="ghost">{item.title}</Button>
                      </NavigationMenuLink>
                    </Link>
                  ) : (
                    <>
                      <NavigationMenuTrigger className="font-medium text-sm">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="!w-[450px] p-4">
                        <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                          <div className="flex flex-col h-full justify-between">
                            <div className="flex flex-col">
                              <p className="text-base">{item.title}</p>
                              <p className="text-muted-foreground text-sm">{item.description}</p>
                            </div>
                            <Button size="sm" className="mt-10">
                              Book a call today
                            </Button>
                          </div>
                          <div className="flex flex-col text-sm h-full justify-end">
                            {item.items?.map((subItem) => (
                              <Link key={subItem.title} href={{ pathname: subItem.href ?? '/' }}>
                                <NavigationMenuLink className="flex flex-row justify-between items-center hover:bg-muted py-2 px-4 rounded">
                                  <span>{subItem.title}</span>
                                  <MoveRight className="w-4 h-4 text-muted-foreground" />
                                </NavigationMenuLink>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Logo */}
        <div className="flex lg:justify-center items-center gap-2">
          <p className="font-semibold">OnCall Mechanic</p>
        </div>

        {/* Right Actions */}
        <div className="flex justify-end w-full gap-4">
          {buttons?.map((item, index) => (
            <Fragment key={item.id}>
              <Link href={{ pathname: item.href ?? '/' }}>
                <Button
                  variant={item.variant as 'ghost' | 'outline' | 'default'}
                  className={index === 0 ? 'hidden md:inline' : ''}
                >
                  {item.label}
                </Button>
              </Link>
              {/* Add separator after the first item */}
              {index === 0 && <div className="border-r hidden md:inline"></div>}
            </Fragment>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="flex w-12 shrink lg:hidden items-end justify-end">
          <Button variant="ghost" type="button" onClick={() => setOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
          {isOpen && (
            <div className="absolute top-20 border-t flex flex-col w-full right-0 bg-background shadow-lg py-4 container gap-8">
              {items.map((item) => (
                <div key={item.title}>
                  <div className="flex flex-col gap-2">
                    {item.href ? (
                      <Link
                        href={{ pathname: item.href ?? '/' }}
                        className="flex justify-between items-center"
                        onClick={() => setOpen(false)}
                      >
                        <span className="text-lg">{item.title}</span>
                        <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                      </Link>
                    ) : (
                      <p className="text-lg">{item.title}</p>
                    )}
                    {item.items &&
                      item.items.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={{ pathname: subItem.href ?? '/' }}
                          className="flex justify-between items-center"
                          onClick={() => setOpen(false)}
                        >
                          <span className="text-muted-foreground">{subItem.title}</span>
                          <MoveRight className="w-4 h-4 stroke-1" />
                        </Link>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export { NavigationBarComponent }

'use client';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="min-h-screen  py-6 sm:py-14">
      {/* Add keyframes for the animation */}
     

      <div className="pointer-events-none absolute inset-0 top-0 z-0 overflow-hidden">
        <div className="absolute -left-20 -top-20 h-[600px] animate-gradient- delay-0 w-[600px] rounded-full bg-gradient-to-br from-rose-500  via-rose-500/20 to-transparent opacity-50 blur-[100px]" />
        <div className="absolute -right-20 -top-40 h-[500px] animate-gradient-x delay-75 w-[500px] rounded-full bg-gradient-to-bl from-red-500 via-red-500/20 to-transparent opacity-50 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[400px] animate-gradient-x delay-100 w-[400px] rounded-full bg-gradient-to-tr from-amber-500 via-amber-500/10 to-transparent opacity-30 blur-[80px]" />
      </div>

      <main className="container relative mt-4 max-w-[1100px] px-2 py-4 lg:py-8">
        <div className="relative sm:overflow-hidden">
          <div className="relative flex flex-col items-start justify-start rounded-xl bg-fd-background/70 px-4 pt-12 shadow-xl shadow-primary/10 backdrop-blur-md max-md:text-center md:px-12 md:pt-16">
            <div
              className="animate-gradient-x absolute inset-0 top-32 z-0 hidden blur-2xl dark:block"
              style={{
                maskImage:
                  'linear-gradient(to bottom, transparent, white, transparent)',
                background:
                  'repeating-linear-gradient(65deg, hsl(var(--primary)), hsl(var(--primary)/0.8) 12px, color-mix(in oklab, hsl(var(--primary)) 30%, transparent) 20px, transparent 200px)',
                backgroundSize: '200% 100%',
              }}
            />
            <div
              className="animate-gradient-x absolute inset-0 top-32 z-0 text-left blur-2xl dark:hidden"
              style={{
                maskImage:
                  'linear-gradient(to bottom, transparent, white, transparent)',
                background:
                  'repeating-linear-gradient(65deg, hsl(var(--primary)/0.9), hsl(var(--primary)/0.7) 12px, color-mix(in oklab, hsl(var(--primary)) 30%, transparent) 20px, transparent 200px)',
                backgroundSize: '200% 100%',
              }}
            />
            <h1 className="mb-4 flex flex-wrap gap-2 text-3xl font-medium leading-tight md:text-5xl">
              Build  <span className="text-primary">Stunning Apps</span> with Me
            </h1>
            <p className="mb-8 text-left text-muted-foreground md:max-w-[80%] md:text-xl">
              I’m a Full Stack Developer crafting modern, responsive, and scalable web applications using Next.js, React, Node.js, and .NET. From intuitive UIs to powerful APIs, I bring full-stack ideas to life with clean, production-ready code.

            </p>
            <div className="mb-6 flex flex-wrap gap-4 md:flex-row">
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Full Stack Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>TypeScript & Tailwind CSS</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span> Responsive & Accessible</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>API & Admin Dashboards</span>
              </div>
            </div>

            <div className="z-10 mt-2 inline-flex items-center justify-start gap-3">
              <a
                href="#"
                className={cn(
                  buttonVariants({
                    size: 'lg',
                    className:
                      'rounded-full bg-gradient-to-b from-primary to-primary/80 text-primary-foreground',
                  }),
                )}
              >
                Explore Projects <ArrowRight className="size-4" />
              </a>
              <a
                href="https://github.com/Amalcs9188"
                target="_blank"
                rel="noreferrer noopener"
                className={cn(
                  buttonVariants({
                    size: 'lg',
                    variant: 'outline',
                    className: 'rounded-full bg-fd-background',
                  }),
                )}
              >
                GitHub{' '}
                <svg
                  className="ml-1 inline size-4"
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
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

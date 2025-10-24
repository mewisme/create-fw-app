"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ArrowRight, Download, Github, Shield, Star, Zap } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { CodeTabs } from "@/components/animate-ui/components/animate/code-tabs";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useState } from "react";

export default function CreateFrameworkAppPage() {
  const [copied, setCopied] = useState(false);

  const packageManagers = [
    { name: "npm", command: "npx create-fw-app@latest" },
    { name: "pnpm", command: "pnpm create fw-app@latest" },
    { name: "yarn", command: "yarn create fw-app@latest" },
    { name: "bun", command: "bun create fw-app@latest" },
  ];

  const features = [
    {
      title: "Quick Setup",
      description: "Get started in seconds with pre-configured templates",
    },
    {
      title: "Modern UI",
      description: "Comprehensive ShadCN/UI component library with 50+ components",
    },
    {
      title: "Responsive Design",
      description: "Built-in responsive layouts and mobile-first approach",
    },
    {
      title: "Dark Mode",
      description: "Automatic dark/light theme switching",
    },
    {
      title: "Performance",
      description: "Optimized for speed with latest framework features",
    },
    {
      title: "Developer Experience",
      description: "ESLint, Prettier, and TypeScript configured out of the box",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="px-4 py-20 sm:py-24 min-h-screen">
        <div className="mx-auto w-full max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
                Create Framework App
              </h1>
              <p className="mx-auto max-w-2xl text-balance text-base text-muted-foreground sm:text-lg md:text-xl">
                The easiest way to get started with your favorite web framework. Scaffold applications with prebuilt templates for Next.js, React.js, Vue.js, and more.
              </p>
            </div>

            <div className="mx-auto w-full max-w-3xl">
              <div className="rounded-xl border bg-muted/30 p-3 sm:p-4">
                <CodeTabs
                  codes={Object.fromEntries(packageManagers.map((pm) => [pm.name, pm.command]))}
                  lang="bash"
                  copyButton
                  onCopiedChange={(copied) => setCopied(copied)}
                />
              </div>
              <p className="mt-3 text-center text-xs text-muted-foreground sm:text-sm">
                Interactive mode will prompt you to choose a framework, variant, and project name. Each command scaffolds a new project with all dependencies and sensible defaults.
              </p>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Features Section */}
      <section id="features" className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight">Key Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to scaffold modern web applications with a focus on developer experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section id="showcase" className="py-24 px-4">
        <div className="mx-auto w-full max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 text-center lg:mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight">Component Showcase</h2>
            <p className="mx-auto mt-3 max-w-2xl text-lg text-muted-foreground">
              See shadcn/ui components in action with our monochrome theme.
            </p>
          </motion.div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {/* Interactive Elements */}
            <Card className="h-full">
              <CardHeader className="space-y-1">
                <CardTitle>Interactive Elements</CardTitle>
                <CardDescription>Buttons, inputs, and form controls</CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="flex flex-wrap gap-2.5">
                  <Button>Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                </div>

                <div className="grid gap-2">
                  <Input placeholder="Enter your email" />
                  <Input placeholder="Password" type="password" />
                  <Textarea placeholder="Your message..." />
                </div>

                <div className="flex flex-wrap gap-2.5">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="outline">Outline</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Form Controls */}
            <Card className="h-full">
              <CardHeader className="space-y-1">
                <CardTitle>Form Controls</CardTitle>
                <CardDescription>Checkboxes, switches, and selectors</CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="flex items-center gap-2">
                  <Checkbox id="terms" />
                  <label htmlFor="terms" className="text-sm">Accept terms</label>
                </div>

                <div className="flex items-center gap-2">
                  <Switch id="notifications" />
                  <label htmlFor="notifications" className="text-sm">Enable notifications</label>
                </div>

                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select framework" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="next">Next.js</SelectItem>
                    <SelectItem value="react">React</SelectItem>
                    <SelectItem value="vue">Vue</SelectItem>
                  </SelectContent>
                </Select>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Progress</label>
                  <Progress value={60} />
                </div>
              </CardContent>
            </Card>

            {/* Navigation & Modals */}
            <Card className="h-full">
              <CardHeader className="space-y-1">
                <CardTitle>Navigation & Modals</CardTitle>
                <CardDescription>Tabs, dialogs, and navigation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <Tabs defaultValue="tab1" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                  </TabsList>
                  <TabsContent value="tab1" className="mt-4">
                    <p className="text-sm text-muted-foreground">
                      This is the content for the first tab.
                    </p>
                  </TabsContent>
                  <TabsContent value="tab2" className="mt-4">
                    <p className="text-sm text-muted-foreground">
                      This is the content for the second tab.
                    </p>
                  </TabsContent>
                </Tabs>

                <div className="flex flex-wrap gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">Dialog</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Example Dialog</DialogTitle>
                        <DialogDescription>
                          This is an example of a dialog component.
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>

                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline" size="sm">Sheet</Button>
                    </SheetTrigger>
                    <SheetContent>
                      <SheetHeader>
                        <SheetTitle>Example Sheet</SheetTitle>
                        <SheetDescription>
                          This is an example of a sheet component.
                        </SheetDescription>
                      </SheetHeader>
                    </SheetContent>
                  </Sheet>
                </div>
              </CardContent>
            </Card>

            {/* Data Display */}
            <Card className="h-full">
              <CardHeader className="space-y-1">
                <CardTitle>Data Display</CardTitle>
                <CardDescription>Tables, avatars, and alerts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="flex items-center gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium leading-none">John Doe</p>
                    <p className="text-xs text-muted-foreground">Developer</p>
                  </div>
                </div>

                <Alert>
                  <Shield className="h-4 w-4" />
                  <AlertTitle>Security Notice</AlertTitle>
                  <AlertDescription>Your data is encrypted and secure.</AlertDescription>
                </Alert>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Slider</label>
                  <Slider defaultValue={[50]} max={100} step={1} />
                </div>
              </CardContent>
            </Card>

            {/* Advanced Components */}
            <Card className="h-full">
              <CardHeader className="space-y-1">
                <CardTitle>Advanced Components</CardTitle>
                <CardDescription>Command palette and tooltips</CardDescription>
              </CardHeader>
              <CardContent className="space-y-5 space-x-2">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline">Hover me</Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>This is a tooltip</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline">Open Popover</Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-72">
                    <div className="space-y-2">
                      <h4 className="font-medium">Popover Title</h4>
                      <p className="text-sm text-muted-foreground">This is a popover content.</p>
                    </div>
                  </PopoverContent>
                </Popover>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Radio Group</label>
                  <RadioGroup defaultValue="option1">
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="option1" id="r1" />
                      <label htmlFor="r1" className="text-sm">Option 1</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="option2" id="r2" />
                      <label htmlFor="r2" className="text-sm">Option 2</label>
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
            </Card>

            {/* Loading & Skeleton */}
            <Card className="h-full">
              <CardHeader className="space-y-1">
                <CardTitle>Loading States</CardTitle>
                <CardDescription>Skeleton loaders and progress</CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Loading Progress</label>
                  <Progress value={33} />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <span className="text-sm">Feature Status</span>
                  <Badge variant="outline">Active</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <Card>
              <CardHeader className="space-y-1">
                <CardTitle>Component Carousel</CardTitle>
                <CardDescription>Interactive carousel showcasing various components</CardDescription>
              </CardHeader>
              <CardContent>
                <Carousel className="mx-auto w-full max-w-md">
                  <CarouselContent>
                    <CarouselItem>
                      <div className="space-y-4 p-6 text-center">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                          <Star className="h-6 w-6" />
                        </div>
                        <h3 className="font-semibold">Star Rating</h3>
                        <p className="text-sm text-muted-foreground">Interactive rating component</p>
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="space-y-4 p-6 text-center">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                          <Download className="h-6 w-6" />
                        </div>
                        <h3 className="font-semibold">Download</h3>
                        <p className="text-sm text-muted-foreground">File download component</p>
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="space-y-4 p-6 text-center">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                          <Zap className="h-6 w-6" />
                        </div>
                        <h3 className="font-semibold">Performance</h3>
                        <p className="text-sm text-muted-foreground">Speed optimization tools</p>
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </CardContent>
            </Card>
          </motion.div>

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <Card>
              <CardHeader className="space-y-1">
                <CardTitle>Frequently Asked Questions</CardTitle>
                <CardDescription>Common questions about FrameForge</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What is Create Framework App?</AccordionTrigger>
                    <AccordionContent>
                      Create Framework App is the main tool from FrameForge for scaffolding applications with prebuilt templates for Next.js, React.js, Vue.js, and more. It provides an interactive CLI experience to choose frameworks and variants.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Which frameworks are supported?</AccordionTrigger>
                    <AccordionContent>
                      Currently supports Next.js 15/16 with ShadCN/UI, React.js with Vite + ShadCN/UI, and Vue.js with Vite + ShadCN/UI. More templates are coming soon!
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>How do I customize the theme?</AccordionTrigger>
                    <AccordionContent>
                      The monochrome theme is built on shadcn/ui with TailwindCSS. You can customize colors, spacing, and components through the design system.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

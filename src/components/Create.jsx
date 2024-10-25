
// import { useState } from 'react'
// import { useCompletion } from 'ai/react'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
// import { Card, CardContent } from "@/components/ui/card"
// // import Link from 'next/link'
// import { Home, LogIn, Palette, Layout } from 'lucide-react'

// const Create = () => {
//     const [primaryColor, setPrimaryColor] = useState('#3b82f6')
//     const [secondaryColor, setSecondaryColor] = useState('#f59e0b')
//     const [selectedTemplate, setSelectedTemplate] = useState('blog')

//     const { completion, input, handleInputChange, handleSubmit } = useCompletion({
//         api: '/api/generate',
//     })

//     return (
//         <div className="min-h-screen flex flex-col">
//             <header className="bg-gray-100 p-4">
//                 <nav className="flex justify-between items-center max-w-6xl mx-auto">
//                     <Link href="/" className="text-xl font-bold">Web Builder AI</Link>
//                     <div className="flex space-x-4">
//                         <Link href="/" className="flex items-center"><Home className="mr-1" size={18} /> Home</Link>
//                         <Link href="/login" className="flex items-center"><LogIn className="mr-1" size={18} /> Login</Link>
//                         <Link href="/onboarding" className="flex items-center"><Layout className="mr-1" size={18} /> Onboarding</Link>
//                     </div>
//                 </nav>
//             </header>

//             <main className="flex-grow p-6 max-w-6xl mx-auto w-full">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div className="space-y-6">
//                         <Card>
//                             <CardContent className="pt-6">
//                                 <form onSubmit={handleSubmit} className="space-y-4">
//                                     <div>
//                                         <Label htmlFor="prompt">Enter your website idea:</Label>
//                                         <Input
//                                             id="prompt"
//                                             placeholder="Describe your website..."
//                                             value={input}
//                                             onChange={handleInputChange}
//                                         />
//                                     </div>
//                                     <Button type="submit">Generate</Button>
//                                 </form>
//                             </CardContent>
//                         </Card>

//                         <Card>
//                             <CardContent className="pt-6">
//                                 <Label>Choose a template:</Label>
//                                 <RadioGroup value={selectedTemplate} onValueChange={setSelectedTemplate} className="grid grid-cols-2 gap-4 mt-2">
//                                     <div>
//                                         <RadioGroupItem value="blog" id="blog" className="peer sr-only" />
//                                         <Label
//                                             htmlFor="blog"
//                                             className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
//                                         >
//                                             <Palette className="mb-3" />
//                                             Blog
//                                         </Label>
//                                     </div>
//                                     <div>
//                                         <RadioGroupItem value="portfolio" id="portfolio" className="peer sr-only" />
//                                         <Label
//                                             htmlFor="portfolio"
//                                             className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
//                                         >
//                                             <Layout className="mb-3" />
//                                             Portfolio
//                                         </Label>
//                                     </div>
//                                 </RadioGroup>
//                             </CardContent>
//                         </Card>

//                         <Card>
//                             <CardContent className="pt-6 space-y-4">
//                                 <div>
//                                     <Label htmlFor="primaryColor">Primary Color:</Label>
//                                     <div className="flex items-center mt-2">
//                                         <Input
//                                             id="primaryColor"
//                                             type="color"
//                                             value={primaryColor}
//                                             onChange={(e) => setPrimaryColor(e.target.value)}
//                                             className="w-full"
//                                         />
//                                         <span className="ml-2">{primaryColor}</span>
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <Label htmlFor="secondaryColor">Secondary Color:</Label>
//                                     <div className="flex items-center mt-2">
//                                         <Input
//                                             id="secondaryColor"
//                                             type="color"
//                                             value={secondaryColor}
//                                             onChange={(e) => setSecondaryColor(e.target.value)}
//                                             className="w-full"
//                                         />
//                                         <span className="ml-2">{secondaryColor}</span>
//                                     </div>
//                                 </div>
//                             </CardContent>
//                         </Card>
//                     </div>

//                     <Card className="h-full">
//                         <CardContent className="p-6">
//                             <h2 className="text-2xl font-bold mb-4">Preview</h2>
//                             <div
//                                 className="border rounded p-4 h-[400px] overflow-auto"
//                                 style={{ backgroundColor: primaryColor, color: secondaryColor }}
//                             >
//                                 {completion ? (
//                                     <div dangerouslySetInnerHTML={{ __html: completion }} />
//                                 ) : (
//                                     <p>Your generated content will appear here...</p>
//                                 )}
//                             </div>
//                         </CardContent>
//                     </Card>
//                 </div>
//             </main>
//         </div>
//     )
// }

// export default Create;
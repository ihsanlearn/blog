"use client"

import { motion } from "framer-motion"
import { Bot, ArrowLeft, Hammer, Construction } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WorkInProgress() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background px-6 text-center relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 max-w-md"
      >
        <div className="flex justify-center mb-8 relative">
           {/* Animated Character */}
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
            className="relative"
          >
            <div className="w-32 h-32 rounded-3xl bg-linear-to-br from-primary/20 to-secondary/20 flex items-center justify-center border border-border backdrop-blur-xs shadow-xl">
               <Bot className="w-16 h-16 text-primary" />
            </div>
            
            <motion.div 
                animate={{ rotate: [0, 15, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                className="absolute -top-4 -right-4 bg-tertiary text-tertiary-foreground p-2 rounded-full shadow-lg border border-border"
            >
                <Hammer className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-primary">
            Still Brewing...
          </h1>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            I'm currently crafting this masterpiece! It's not quite ready for the spotlight yet, but I promise it'll be worth the wait.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <Button onClick={() => window.history.back()} 
                className="group flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25"
            >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Safety
             </Button>
             
             <div className="flex items-center gap-2 text-sm text-muted-foreground px-4 py-2 rounded-full border border-border bg-muted/50">
                <Construction className="w-3 h-3" />
                <span>Status: Building</span>
             </div>
          </div>
        </motion.div>
      </motion.div>
      
      <div className="absolute bottom-8 text-xs text-muted-foreground/50">
        Error: 404_PASSION_NOT_FOUND (Just kidding, purely working hard)
      </div>
    </main>
  )
}

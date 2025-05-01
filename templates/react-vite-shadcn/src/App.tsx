import { Button } from '@/components/ui/button'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { ThemeToggle } from '@/components/common/theme-toggle'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <div className='flex flex-row items-center justify-center h-screen space-x-4'>
        <ThemeToggle />
        <div className='flex flex-row items-center justify-center space-x-4'>
          <Button variant="outline" onClick={() => setCount(count + 1)}>
            Click me
          </Button>
          <p>Count: {count}</p>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App

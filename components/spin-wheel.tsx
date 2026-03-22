"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

interface SpinWheelProps {
  onSpinComplete: (name: string, color: string) => void
  lastSpin: { name: string; color: string } | null
  onCheckName?: (name: string) => Promise<boolean>
}

const COLORS = [
  { name: "Red", hex: "#ff4757", label: "🔴", startAngle: 0, endAngle: 72 },
  { name: "Blue", hex: "#3366ff", label: "🔵", startAngle: 72, endAngle: 144 },
  { name: "White", hex: "#f1f2f6", label: "⬜", startAngle: 144, endAngle: 216 },
  { name: "Green", hex: "#2ed573", label: "🟢", startAngle: 216, endAngle: 288 },
  { name: "Yellow", hex: "#ffd32a", label: "🟡", startAngle: 288, endAngle: 360 },
]

// Random spin durations in milliseconds (for variety)
const SPIN_DURATIONS = [7000, 10000, 12000, 20000] // 7s, 10s, 12s, 20s

// Helper function to get random spin duration
const getRandomSpinDuration = () => {
  return SPIN_DURATIONS[Math.floor(Math.random() * SPIN_DURATIONS.length)]
}

const SECTIONS_COUNT = COLORS.length
const DEGREES_PER_SECTION = 360 / SECTIONS_COUNT // 120 degrees per section

// Helper function to convert angle to SVG coordinates
const angleToPoint = (angleDeg: number, centerX: number, centerY: number, radius: number) => {
  const angleRad = ((angleDeg - 90) * Math.PI) / 180 // Convert to radians and adjust for SVG coordinate system (0° is at top)
  const x = centerX + radius * Math.cos(angleRad)
  const y = centerY + radius * Math.sin(angleRad)
  return { x, y }
}

export default function SpinWheel({ onSpinComplete, lastSpin, onCheckName }: SpinWheelProps) {
  const [name, setName] = useState("")
  const [isSpinning, setIsSpinning] = useState(false)
  const [rotation, setRotation] = useState(0)
  const [selectedColor, setSelectedColor] = useState<string | null>(null)
  const [hasSpun, setHasSpun] = useState(false)
  const [isChecking, setIsChecking] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isSaving, setIsSaving] = useState(false)
  const [spinDuration, setSpinDuration] = useState(7000) // Default duration

  // Check if current name has already spun (database only)
  useEffect(() => {
    const checkExistingSpin = async () => {
      if (!name.trim()) {
        setHasSpun(false)
        setSelectedColor(null)
        return
      }

      setIsChecking(true)
      setError(null)

      if (onCheckName) {
        try {
          const exists = await onCheckName(name.trim())
          setHasSpun(exists)
          if (!exists) setSelectedColor(null)
        } catch (err) {
          console.error('Error checking name:', err)
        }
      }

      setIsChecking(false)
    }

    // Debounce the check - wait 1.5 seconds after user stops typing
    const timeoutId = setTimeout(checkExistingSpin, 1500)
    return () => clearTimeout(timeoutId)
  }, [name, onCheckName])

  const handleSpin = async () => {
    if (!name.trim()) {
      setError("Please enter your name!")
      return
    }

    if (hasSpun) {
      setError("You can only spin once! 🎡")
      return
    }

    if (isSpinning || isSaving) return

    setError(null)
    setIsSpinning(true)
    setSelectedColor(null)

    // Get random spin duration for this spin
    const currentSpinDuration = getRandomSpinDuration()
    setSpinDuration(currentSpinDuration)

    // Add multiple spins for dramatic effect - vary spins based on duration
    // Longer durations get more spins for visual consistency
    const minSpins = currentSpinDuration <= 7000 ? 5 : currentSpinDuration <= 10000 ? 7 : currentSpinDuration <= 12000 ? 9 : 12
    const maxSpins = currentSpinDuration <= 7000 ? 10 : currentSpinDuration <= 10000 ? 15 : currentSpinDuration <= 12000 ? 18 : 25
    const randomSpins = Math.floor(Math.random() * (maxSpins - minSpins + 1)) + minSpins
    
    // Select the next color sequentially after the last spin's color
    const lastColorIndex = lastSpin
      ? COLORS.findIndex((c) => c.name === lastSpin.color)
      : -1
    const selectedColorObj = COLORS[(lastColorIndex + 1) % COLORS.length]
    
    // Get the target section for this color
    // Each color spans 120 degrees, we want to land somewhere in the middle section
    // Add some randomness within the section for more natural results
    const sectionStart = selectedColorObj.startAngle
    const sectionEnd = selectedColorObj.endAngle
    const sectionSize = sectionEnd - sectionStart // 120 degrees
    
    // Random position within the section (40% to 60% through the section for more central landing)
    const randomOffset = 0.4 + Math.random() * 0.2 // 0.4 to 0.6
    const targetAngle = sectionStart + (sectionSize * randomOffset)
    
    // Calculate rotation needed to bring this angle to the pointer (0°)
    // The pointer is fixed at the top (0°)
    // When the wheel rotates clockwise by R degrees:
    // - The color that was at position (360 - R) mod 360 ends up at the pointer (0°)
    // So to bring targetAngle to the pointer, we need: (360 - finalRotation) mod 360 = targetAngle
    // Which means: finalRotation = (360 - targetAngle) mod 360
    //
    // But we have current rotation, so:
    // finalRotation = currentRotation + targetRotation
    // We want: (360 - (currentRotation + targetRotation)) mod 360 = targetAngle
    // So: 360 - currentRotation - targetRotation = targetAngle (mod 360)
    // targetRotation = (360 - targetAngle - currentRotation) mod 360
    
    const currentRotationMod = rotation % 360
    const baseRotationNeeded = (360 - targetAngle - currentRotationMod + 720) % 360
    
    // Add full spins for dramatic effect
    const targetRotation = randomSpins * 360 + baseRotationNeeded
    
    setRotation(rotation + targetRotation)

    // Wait for spin animation to complete (use the random duration)
    setTimeout(async () => {
      // Verify what color is actually at the pointer after rotation
      const finalRotation = (rotation + targetRotation) % 360
      
      // The pointer is fixed at 0° (top)
      // When the wheel rotates clockwise by R degrees, everything rotates clockwise
      // So the color that was at position (360 - R) mod 360 is now at the pointer (0°)
      // This is because: position on wheel - rotation = pointer position (0°)
      // So: original position = rotation mod 360
      // But wait, if wheel rotates clockwise by R, color at A moves to (A + R) mod 360
      // At pointer (0°): we need the color where (A + R) mod 360 = 0
      // So: A = (360 - R) mod 360
      const actualColorAngle = (360 - finalRotation) % 360
      
      // Determine which color section this angle falls into
      const actualSelectedColor = COLORS.find(
        (c) => actualColorAngle >= c.startAngle && actualColorAngle < c.endAngle
      ) ?? COLORS[COLORS.length - 1]
      
      // Use the actually calculated color, not the randomly selected one (for debugging)
      // This ensures we save what actually lands at the pointer
      const selectedColorName = actualSelectedColor.name
      setSelectedColor(selectedColorName)
      
      // Log for debugging
      console.log(`🎲 Randomly selected color: ${selectedColorObj.name}`)
      console.log(`📐 Target section: ${sectionStart}° - ${sectionEnd}°`)
      console.log(`🎯 Target angle: ${targetAngle.toFixed(2)}°`)
      console.log(`🔄 Final rotation: ${finalRotation.toFixed(2)}°`)
      console.log(`📍 Actual color at pointer: ${actualColorAngle.toFixed(2)}° = ${actualSelectedColor.name}`)
      console.log(`💾 Saving color: ${selectedColorName}`)
      
      if (selectedColorObj.name !== actualSelectedColor.name) {
        console.warn(`⚠️ WARNING: Randomly selected ${selectedColorObj.name} but ${actualSelectedColor.name} is at pointer!`)
      }
      
      // Save to Supabase via callback
      setIsSaving(true)
      try {
        await onSpinComplete(name.trim(), selectedColorName)
        setHasSpun(true)
        setError(null)
        console.log('✅ Spin saved to database')
      } catch (err) {
        console.error('Error saving spin:', err)
        setError("Failed to save your spin. Please try again.")
        setSelectedColor(null)
        setHasSpun(false)
      } finally {
      setIsSpinning(false)
        setIsSaving(false)
      }
    }, currentSpinDuration)
  }

  return (
    <div className="flex flex-col items-center gap-6 sm:gap-8 w-full max-w-2xl mx-auto">
      <div className="relative w-[90vw] h-[90vw] max-w-[320px] max-h-[320px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] animate-bounce-in">
        {/* Pointer */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 sm:-translate-y-3 z-10">
          <div className="w-0 h-0 border-l-[10px] sm:border-l-[12px] border-r-[10px] sm:border-r-[12px] border-t-[14px] sm:border-t-[18px] border-l-transparent border-r-transparent border-t-primary drop-shadow-lg"></div>
        </div>

        {/* Wheel SVG */}
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 300 300"
          className="transform transition-transform"
          style={{
            transform: `rotate(${rotation}deg)`,
            transitionDuration: isSpinning ? `${spinDuration}ms` : "0s",
            transitionTimingFunction: isSpinning ? "cubic-bezier(0.25, 0.1, 0.25, 1)" : "linear",
            filter: "drop-shadow(0 15px 40px rgba(0,0,0,0.3))",
          }}
        >
          {COLORS.map((color, index) => {
            const centerX = 150
            const centerY = 150
            const radius = 100
            
            // Calculate start and end points for this section
            const startPoint = angleToPoint(color.startAngle, centerX, centerY, radius)
            const endPoint = angleToPoint(color.endAngle, centerX, centerY, radius)
            
            // Large arc flag (1 if arc spans more than 180 degrees, 0 otherwise)
            // For 120-degree sections, we use large-arc-flag = 0
            const largeArcFlag = 0
            
            // Create the path for this section
            const path = `M ${centerX} ${centerY} L ${startPoint.x} ${startPoint.y} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endPoint.x} ${endPoint.y} Z`
            
            // Calculate label position (middle of the section)
            const labelAngle = (color.startAngle + color.endAngle) / 2
            const labelRadius = radius * 0.65 // Position label closer to center
            const labelPoint = angleToPoint(labelAngle, centerX, centerY, labelRadius)
            
            return (
              <g key={color.name}>
          <path
                  d={path}
                  fill={color.hex}
            stroke="white"
                  strokeWidth="4"
                />
                <text
                  x={labelPoint.x}
                  y={labelPoint.y}
                  fontSize="20"
                  fontWeight="bold"
                  fill="white"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontFamily="Poppins"
                  className="select-none"
                >
                  {color.name.toUpperCase()}
          </text>
              </g>
            )
          })}

          {/* Center Circle */}
          <circle cx="150" cy="150" r="40" fill="white" stroke="#ff6b9d" strokeWidth="4" />
          <text x="150" y="158" fontSize="20" fontWeight="bold" fill="#ff6b9d" textAnchor="middle" fontFamily="Poppins" className="select-none">
            SPIN
          </text>
        </svg>
      </div>

      <div className="w-full flex flex-col gap-3 sm:gap-4 px-4 sm:px-0">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-heading text-base sm:text-lg text-primary font-semibold">
            Your Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && !hasSpun && handleSpin()}
            placeholder="Enter your name..."
            className="px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 border-accent bg-white text-foreground placeholder-foreground/40 font-body text-base sm:text-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
            disabled={isSpinning || hasSpun || isChecking || isSaving}
          />
          {isChecking && <p className="text-sm text-foreground/60 font-body">Checking...</p>}
          {hasSpun && !isChecking && <p className="text-sm text-primary font-body font-semibold">✓ You've spun! Results below.</p>}
          {error && <p className="text-sm text-red-600 font-body font-semibold">{error}</p>}
        </div>

        <Button
          onClick={handleSpin}
          disabled={isSpinning || hasSpun}
          className="w-full bg-primary hover:bg-pink-600 text-white font-heading text-base sm:text-lg py-5 sm:py-6 rounded-xl transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {isSaving ? "💾 SAVING..." : isSpinning ? "🎡 SPINNING..." : hasSpun ? "✓ ALREADY SPUN" : "🎉 SPIN NOW"}
        </Button>
      </div>

      {/* Result Display */}
      {selectedColor && lastSpin && (
        <div className="w-full mt-4 sm:mt-6 p-4 sm:p-6 bg-white rounded-2xl border-3 border-primary shadow-lg animate-bounce-in mx-4 sm:mx-0">
          <div className="text-center">
            <p className="font-body text-sm text-foreground/60 mb-2">🎊 Amazing! 🎊</p>
            <p className="font-heading text-xl sm:text-2xl text-primary mb-2 font-bold">{lastSpin.name}</p>
            <p className="font-heading text-2xl sm:text-3xl mb-3 font-bold">
              {COLORS.find((c) => c.name === selectedColor)?.label} {selectedColor?.toUpperCase()}
            </p>
            <p className="font-body text-foreground/70 text-sm sm:text-base">
              Congratulations! You're expected to represent this color at the picnic.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

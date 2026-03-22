"use client"

import { useCallback } from "react"
import SpinWheel from "@/components/spin-wheel"
import WheelStats from "@/components/wheel-stats"
import { useParticipants } from "@/lib/hooks/use-participants"

export default function Home() {
  const { participants, loading, error, refetch } = useParticipants()

  // Derive last spin from the most recent participant in the database (shared across all browsers)
  const lastSpin = participants.length > 0
    ? { name: participants[0].name, color: participants[0].color }
    : null

  const handleSpinComplete = useCallback(async (name: string, color: string) => {
    try {
      const response = await fetch("/api/participants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, color }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Failed to save participant")
      }

      // The participant is now saved to the database (publicly visible)
      // The leaderboard will update automatically via:
      // 1. Real-time subscription (instant update)
      // 2. Refetch as backup (ensures update)
      await refetch()
      
      // Log for debugging
      console.log(`✅ Participant saved: ${name} - ${color}`)
    } catch (error) {
      console.error("Error saving participant:", error)
      throw error // Re-throw so SpinWheel can handle it
    }
  }, [refetch])

  const checkNameExists = useCallback(async (name: string): Promise<boolean> => {
    try {
      const response = await fetch(`/api/participants/check?name=${encodeURIComponent(name)}`)
      const result = await response.json()

      if (!response.ok) {
        return false // If check fails, allow user to proceed
      }

      return result.exists
    } catch (error) {
      console.error("Error checking name:", error)
      return false // On error, allow user to proceed
    }
  }, [])

  // Transform participants for the components
  const participantsForDisplay = participants.map((p) => ({
    id: p.id,
    name: p.name,
    color: p.color,
  }))

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-yellow-50 to-green-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 p-4 sm:p-6 lg:p-8">
      <div className="text-center mb-6 sm:mb-8 animate-slide-up">
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary mb-1 sm:mb-2">
          RCCG YAYA'S COLOUR THEMED PICNIC
        </h1>
        <p className="text-sm sm:text-base lg:text-lg text-foreground/70 font-body px-2 sm:px-0">
          Enter your name, spin once, and pick your color!
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
        {/* Spin Wheel Section */}
        <div className="flex justify-center items-center order-1 lg:order-1 px-2 sm:px-4">
          <SpinWheel 
            onSpinComplete={handleSpinComplete} 
            lastSpin={lastSpin}
            onCheckName={checkNameExists}
          />
        </div>

        {/* Stats Section */}
        <div className="order-2 lg:order-2 px-4 sm:px-0">
          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-600">⚠️ Error loading participants: {error}</p>
              <button
                onClick={() => refetch()}
                className="mt-2 text-sm text-red-700 underline"
              >
                Try again
              </button>
            </div>
          )}
          <WheelStats participants={participantsForDisplay} loading={loading} />
        </div>
      </div>

      <div className="text-center mt-8 sm:mt-12 flex flex-col gap-3">
        <p className="text-xs sm:text-sm text-foreground/70 font-body">Each person spins only once</p>
        <a
          href="https://jabulaniusen.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs sm:text-sm text-primary hover:text-pink-700 font-body font-semibold transition-colors"
        >
          Build by Jabulani Usen
        </a>
      </div>
    </main>
  )
}

"use client"

interface WheelStatsProps {
  participants: { id?: string; name: string; color: string }[]
  loading?: boolean
}

export default function WheelStats({ participants, loading = false }: WheelStatsProps) {
  const COLORS = [
    { color: "Red", hex: "#ff4757", emoji: "🔴" },
    { color: "Blue", hex: "#3366ff", emoji: "🔵" },
    { color: "Green", hex: "#2ed573", emoji: "🟢" },
    { color: "Yellow", hex: "#ffd32a", emoji: "🟡" },
    { color: "White", hex: "#f1f2f6", emoji: "⬜" },
  ]

  const stats = COLORS.map((c) => ({
    ...c,
    count: participants.filter((p) => p.color === c.color).length,
  }))

  return (
    <div className="w-full h-full flex flex-col gap-6">
      {/* Title */}
      <div className="animate-slide-up">
        <h2 className="font-heading text-2xl sm:text-3xl text-primary mb-2">📊 Leaderboard</h2>
        <p className="font-body text-foreground/60">
          Total spins: <span className="font-bold text-primary">{participants.length}</span>
        </p>
      </div>

      {/* Color Stats */}
      <div className="grid gap-4">
        {stats.map((stat, index) => (
          <div
            key={stat.color}
            className="p-6 rounded-xl bg-white border-2 shadow-md hover:shadow-lg transition-all transform hover:scale-105 animate-slide-up"
            style={{
              borderColor: stat.hex,
              animationDelay: `${index * 0.1}s`,
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{stat.emoji}</span>
                <h3 className="font-heading text-lg text-foreground">{stat.color}</h3>
              </div>
              <span className="font-heading text-3xl text-foreground/20">{stat.count}</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${participants.length > 0 ? (stat.count / participants.length) * 100 : 0}%`,
                  backgroundColor: stat.hex,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Participants List */}
      {participants.length > 0 && (
        <div className="mt-4 animate-slide-up">
          <h3 className="font-heading text-lg text-primary mb-4">👥 All Participants</h3>
          <div className="bg-white rounded-xl p-4 max-h-96 overflow-y-auto border-2 border-accent">
            <div className="space-y-2">
              {participants.map((participant, index) => (
                <div
                  key={participant.id || index}
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <span className="font-heading text-lg">
                    {COLORS.find((c) => c.color === participant.color)?.emoji}
                  </span>
                  <span className="font-body text-foreground flex-1">{participant.name}</span>
                  <span className="font-body text-sm text-foreground/50">#{participants.length - index}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {loading && participants.length === 0 && (
        <div className="mt-8 p-8 bg-white rounded-xl border-2 border-dashed border-accent text-center">
          <p className="font-heading text-xl text-primary mb-2">⏳ Loading...</p>
          <p className="font-body text-foreground/60">Fetching participants data...</p>
        </div>
      )}

      {!loading && participants.length === 0 && (
        <div className="mt-8 p-8 bg-white rounded-xl border-2 border-dashed border-accent text-center">
          <p className="font-heading text-xl text-primary mb-2">🎪 Ready to play?</p>
          <p className="font-body text-foreground/60">Enter your name and start spinning to see the magic happen!</p>
          <p className="font-body text-xs text-foreground/40 mt-2">No participants yet. Be the first to spin!</p>
        </div>
      )}
    </div>
  )
}

export default function ExpectationsSummary() {
  return (
    <section className="mb-16">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-[#14BD95] mb-4">
          Participation Requirements (Summary)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-500">
          <div className="flex items-start gap-2 text-base">
            <span className="text-xl shrink-0">⏰</span>
            <span>Minimum 3, average 5 hours per week commitment</span>
          </div>
          <div className="flex items-start gap-2 text-base">
            <span className="text-xl shrink-0">📍</span>
            <span>Mandatory weekly studio (Mondays 7-8pm)</span>
          </div>
          <div className="flex items-start gap-2 text-base">
            <span className="text-xl shrink-0">🎯</span>
            <span>Must prioritize DISC above most other commitments</span>
          </div>
          <div className="flex items-start gap-2 text-base">
            <span className="text-xl shrink-0">🤝</span>
            <span>Regular team and client communication</span>
          </div>
          <div className="flex items-start gap-2 text-base">
            <span className="text-xl shrink-0">🎭</span>
            <span>Attend Winter and Spring Showcases</span>
          </div>
          <div className="flex items-start gap-2 text-base">
            <span className="text-xl shrink-0">💪</span>
            <span>Take initiative and help teammates</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-base lg:col-span-3">
            <span className="text-xl shrink-0">📢</span>
            <span>Be vocal about issues and seek help when needed</span>
          </div>
        </div>
      </div>
    </section>
  );
}

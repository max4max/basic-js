const MODERN_ACTIVITY = 15
const HALF_LIFE_PERIOD = 5730

module.exports = function dateSample(sampleActivity) {
  if (
    typeof sampleActivity != "string" ||
    isNaN(sampleActivity) ||
    sampleActivity <= 0 ||
    sampleActivity >= 15
  )
    return false

  return Math.ceil(Math.log(15 / Number(sampleActivity)) / 0.000120942408377)
}

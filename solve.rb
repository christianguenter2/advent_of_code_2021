day = "day" + ARGV[0]
part = ARGV[1] || 1
file = ARGV[2] || "input"

input = File.open(day + "/" + file).readlines(&:chomp).map{|l| l.gsub("\n","")}.map(&:to_i)

require_relative(day + "/part" + part.to_s + ".rb")
puts solve(input)
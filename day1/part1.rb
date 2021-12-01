input = [199,
         200,
         208,
         210,
         200,
         207,
         240,
         269,
         260,
         263].map(&:to_s)

def solve(input)
    prev = ""
    count = 0
    
    input.each do |x|
        if (x > prev)
          count += 1
        end
        prev = x
    end
    return count
    
end

puts solve(input)
#input = File.open("day1/input").readlines()
#puts solve(input)

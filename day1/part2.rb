input = [199,
    200,
    208,
    210,
    200,
    207,
    240,
    269,
    260,
    263]

def solve(input)

    count = 0
    prev = ""
    input
        .each_with_index
        .map{ |x,i| [input[i], input[i+1], input[i+2]].filter{|y| y!= nil} }        
        .filter{ |x| x.length == 3}
        .map{ |x| x.sum }
        .each_with_index do |x,i|
            if (prev != "" && x > prev)
                count += 1
            end
            prev = x
        end

    return count
end

puts solve(input)
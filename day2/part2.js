module.exports.solve = input => {
    const commands = input.map(x => {
        s = x.split(/\s/);
        return {
            direction : s[0],
            value : parseInt(s[1])
        }
    })
    
    let position = {
        horizontal : 0,
        depth : 0,
        aim : 0
    }
    
    commands.forEach(c => {
        if (c.direction === "forward") {
            position.horizontal += c.value;
            position.depth += position.aim * c.value;
        } else if (c.direction === "down") {
            position.aim += c.value;
        } else if (c.direction === "up") {
            position.aim -= c.value;
        }
    });
    
    console.log(position);
    console.log(position.horizontal * position.depth);

}
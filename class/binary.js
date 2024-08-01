// binary to decimal
// 14 -> 1*10^1 + 4*10^0 -> 1*10 + 4*1 = 10 + 4 = 14
// 115 -> 1*10^2 + 1*10^1 + 5*10^0 = 100 + 10 + 5 = 115
// 3546 -> 3*10^3 + 5*10^2 + 4*10^1 + 6*10^0 = 3000+500+40+6 = 3546

// 1101 (4 bit) -> 1*2^3 + 1*2^2 + 0*2^1 + 1*2^0 = 1*8 + 1*4 + 0*2 + 1*1 = 8 + 4 + 0 + 1 = 13
// 0111 (4 bit) -> 0*8 + 1*4 + 1*2 + 1*1 = 0 + 4 + 2 + 1 = 7

// 8 bits -> 1 byte
// 0000 1101

// for a 4 bit number, what is the maximum value in decimal you can represent?
// 1111 -> 15 (max), range: 0 to 15 (16 numbers) 2^4 -> 16 diff. numbers
// for 8 bits: max? 255, what is the range? 0-255 formula?, how many numbers total? 2^8 = 256
// unsigned number formula: 0 to (2^n)-1, n is the number of bits

// 0000 -> 0
// 0001 -> 1
// 0010 -> 2
// 0011 -> 3
// 1110 -> 8 + 4 +2 = 14
// 1111 -> 15
// two's complement
// 0: 0000
// -1: 0001 -> 1110+0001 -> 1111
// -2: 0010 -> 1101+0001 -> 1110
// -15: 1111 -> 0000+0001 -> 0 001 (1)
// -7: 0111 -> 1000+0001 -> 1001
// -8: 1000 -> 0111+0001 -> 1000
// 2's complement system range formula for an n-bit number: [-2^(n-1), 2^(n-1)-1]
// signed 4-bit: [-8, 7]
// signed 8-bit: [-128, 127] (256 numbers), unsigned 8-bit: [0, 255] (also 256 numbers)

// -8: 1000 -> 1111 1000
// 0: 0000 0000
// 8: 0000 1000

// intuition
// 10^2/10 => 100/10
// 10^1/10 = 10/10
// 10^0 = 1

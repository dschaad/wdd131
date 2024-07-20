// Calculations.js

export function determineCharacterLevel(experience) {
    const levelRanges = [300, 900, 2700, 6500, 14000, 23000, 34000, 48000, 64000, 85000, 100000, 120000, 140000, 165000, 195000, 225000, 265000, 305000, 355000];
    
    if      (experience < levelRanges[0]) { return 1; }
    else if (experience < levelRanges[1]) { return 2; }
    else if (experience < levelRanges[2]) { return 3; }
    else if (experience < levelRanges[3]) { return 4; }
    else if (experience < levelRanges[4]) { return 5; }
    else if (experience < levelRanges[5]) { return 6; }
    else if (experience < levelRanges[6]) { return 7; }
    else if (experience < levelRanges[7]) { return 8; }
    else if (experience < levelRanges[8]) { return 9; }
    else if (experience < levelRanges[9]) { return 10; }
    else if (experience < levelRanges[10]) { return 11; }
    else if (experience < levelRanges[11]) { return 12; }
    else if (experience < levelRanges[12]) { return 13; }
    else if (experience < levelRanges[13]) { return 14; }
    else if (experience < levelRanges[14]) { return 15; }
    else if (experience < levelRanges[15]) { return 16; }
    else if (experience < levelRanges[16]) { return 17; }
    else if (experience < levelRanges[17]) { return 18; }
    else if (experience < levelRanges[18]) { return 19; }
    else { return 20; }
}